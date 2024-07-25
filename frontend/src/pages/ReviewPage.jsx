import React from 'react'
import ReviewTable from '../modules/reviews/ReviewTable'
import { Link } from 'react-router-dom'

export default function ReviewPage() {
  return (
    <>
      <div className='review-page-head'>
        <h1>Reviews</h1>
        <Link className='btn btn-primary' to="/new">New Review</Link>
      </div>
      <ReviewTable />
    </>
  )
}
