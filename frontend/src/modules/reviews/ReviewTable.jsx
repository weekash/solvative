import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteReviewById, getAllReviews } from '../../services/api';
import Button from '../../components/button/Button';
export default function ReviewTable() {
    const [reviews, setReviews] = useState([]);

    function addSocket() {
        const socket = new WebSocket('ws://localhost:8000');
        if (!socket) {
            return;
        }
        socket.onopen = () => {
            console.log('Connected to WebSocket server');
        };
        socket.onmessage = (ev) => {
            const {type, review,id} = JSON.parse(ev.data)
            switch (type) {
                case 'ADD_REVIEW':
                    setReviews((prev) => [review, ...prev]);
                    break;
                case 'UPDATE_REVIEW':
                    setReviews((prev) =>
                        prev.map((prevReview) =>
                            prevReview.id === id ? {...prevReview,  ...review } : prevReview
                        )
                    );
                    break;
                case 'DELETE_REVIEW':
                    setReviews((prev) => prev.filter((review) => review.id !== id));
                    break;
                default:
                    break;
            }
        }

        return () => socket.close();
    }
    useEffect(() => {
        const fetchReviews = async () => {
            const { data } = await getAllReviews();
            setReviews(data);
        };

        fetchReviews();
        addSocket()
    }, []);


    async function handleDelete(id) {
        const { data, error } = await deleteReviewById(id)
        if (error) {
            alert("Review cannot be deleted")
        } else {
            alert("Review Deleted Successfully")
            setReviews((reviews) => reviews.filter(({ id: itemId }) => itemId != id))
        }
    }

    return (
        <div>
            <div className='table-container'>
                <table className='review-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Date-time</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{index + 1}</td>
                                <td>{review.title}</td>
                                <td>{review.content}</td>
                                <td>{new Date(review.createdAt).toLocaleString()}</td>
                                <td>
                                    <Link to={`/${review.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <Button variant={"danger"} onClick={() => handleDelete(review.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
