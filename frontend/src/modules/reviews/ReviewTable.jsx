import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteReviewById, getAllReviews } from '../../services/api';
import Button from '../../components/button/Button';
import { formatTimestamp } from '../../utils/time';

const FLASH_CLASS = {
    "add":"flash-green",
    "edit":"flash-blue",
    "delete":"flash-red"
}
const FLASH_DURATION = 3000

export default function ReviewTable() {
    const [reviews, setReviews] = useState([]);
    const [flashClass, setFlashClass] = useState("")
    const [flashElement, setFlashElement] = useState("")
    const timerRef = useRef()
    const socketRef = useRef()
    
    function handleFlash(type, id, callback){
        setFlashElement(id)
        setFlashClass(FLASH_CLASS[type])
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
            setFlashClass("")
            setFlashElement("")
            callback && callback()
        },FLASH_DURATION)

    }

    function addSocket() {
        const socket = new WebSocket('ws://localhost:8000');
        socketRef.current = socket;
        socket.onopen = () => {
            console.log('Connected to WebSocket server');
        };
        socket.onmessage = (ev) => {
            const {type, review,id} = JSON.parse(ev.data)
            switch (type) {
                case 'ADD_REVIEW':
                    setReviews((prev) => [review, ...prev]);
                    handleFlash("add",review.id)
                    break;
                case 'UPDATE_REVIEW':
                    setReviews((prev) =>
                        prev.map((prevReview) =>
                            prevReview.id === id ? {...prevReview,  ...review } : prevReview
                        )
                    );
                    handleFlash("edit",id)
                    break;
                case 'DELETE_REVIEW':
                    handleFlash("delete",id, ()=> setReviews((prev) => prev.filter((review) => review.id !== id)))    
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        const fetchReviews = async () => {
            const { data } = await getAllReviews();
            setReviews(data);
        };

        fetchReviews();
        addSocket()
        return ()=>{
            if (socketRef.current) {
                socketRef.current.close();
            }
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        }
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
                        {reviews.map(({id,title,content,createdAt}, index) => (
                            <tr key={id} className={flashElement==id ? flashClass : ''}>
                                <td>{index + 1}</td>
                                <td>{title}</td>
                                <td>{content}</td>
                                <td>{formatTimestamp(createdAt)}</td>
                                <td>
                                    <Link to={`/${id}`}>Edit</Link>
                                </td>
                                <td>
                                    <Button variant={"danger"} onClick={() => handleDelete(id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
