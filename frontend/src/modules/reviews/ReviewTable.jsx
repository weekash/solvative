import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { io } from 'socket.io-client';
import { deleteReviewById, getAllReviews } from '../../services/api';
import Button from '../../components/button/Button';
export default function ReviewTable() {
    const [reviews, setReviews] = useState([]);

    // function addSocket(){
    //     const socket = io('http://localhost:3000');
    //     socket.on('message', (message) => {
    //         switch (message.type) {
    //             case 'ADD_REVIEW':
    //                 setReviews((prev) => [message.review, ...prev]);
    //                 break;
    //             case 'EDIT_REVIEW':
    //                 setReviews((prev) =>
    //                     prev.map((review) =>
    //                         review.id === message.id ? { ...review, ...message.review } : review
    //                     )
    //                 );
    //                 break;
    //             case 'DELETE_REVIEW':
    //                 setReviews((prev) => prev.filter((review) => review.id !== message.id));
    //                 break;
    //             default:
    //                 break;
    //         }
    //     });

    //     return () => socket.disconnect();
    // }
    useEffect(() => {
        const fetchReviews = async () => {
            const { data } = await getAllReviews();
            setReviews(data);
        };

        fetchReviews();
    }, []);


    async function handleDelete(id){
        const {data,error} = await deleteReviewById(id)
        if(error){
            alert("Review cannot be deleted")
        }else{
            alert("Review Deleted Successfully")
            setReviews((reviews)=>reviews.filter(({id:itemId})=>itemId!=id))
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
