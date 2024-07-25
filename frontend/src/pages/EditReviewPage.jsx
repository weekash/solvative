import React, { useEffect, useState } from 'react'
import ReviewForm from '../modules/reviews/components/ReviewForm'
import { useParams } from 'react-router-dom';
import { getReviewById } from '../services/api';

export default function EditReviewPage() {
    const { id } = useParams();
    const [review, setReview] = useState({})

    async function get(id){
        const {data} = await getReviewById(id)
        if(data){
            setReview(data)
        }
    }
    useEffect(()=>{
        if(id){
            get(id)
        }
    },[id])


  return (
    <div>
        <h3>Edit Your Review</h3>
        <ReviewForm review={review} isEdit={true}/>
    </div>
  )
}
