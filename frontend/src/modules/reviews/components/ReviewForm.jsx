import React, { useEffect, useState } from 'react'
import Input from '../../../components/input/Input'
import Textarea from '../../../components/textarea/TextArea'
import Button from '../../../components/button/Button'
import { addNewReview, updateReviewById } from '../../../services/api'
import { useNavigate } from 'react-router-dom'

export default function ReviewForm({review, isEdit}) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
      if(review){
        setTitle(review.title)
        setContent(review.content)
      }
    },[review])
    async function addReview(){
      const {data, error} = await addNewReview({title, content})
      if(error){
        alert("Add review failed")
      }else{
        alert("Review added successfully")
        navigate("/")
      }
    }
    async function updateReview(){
      const {data, error} = await updateReviewById(review.id, {title,content})
      if(error){
        alert("Update review failed")
      }else{
        alert("Review updated successfully")
      }
    }
    function submitForm(e){
      e.preventDefault()
      e.stopPropagation()
      if(isEdit){
        updateReview()
      }else{
        addReview()
      }
    }
  return (
    <form className='review-form'>
        <Input label={"Title for the review"} required value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Start typing..."/>
        <Textarea label={"Add your review"} required value={content} onChange={(e)=>setContent(e.target.value)} placeholder="Start typing..."/>
        <Button variant={"primary"} type="button" onClick={submitForm}>{isEdit ? "Edit" : "Add"} Review</Button>
    </form>
  )
}
