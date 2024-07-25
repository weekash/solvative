import React from 'react'
import { Routes, Route } from "react-router-dom"
import ReviewPage from '../pages/ReviewPage'
import HomeLayout from '../../layouts/HomeLayout'
import AddReviewPage from '../pages/AddReviewPage'
import EditReviewPage from '../pages/EditReviewPage'
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<ReviewPage />} />
        <Route exact path="/new" element={<AddReviewPage />} />
        <Route exact path="/:id" element={<EditReviewPage />} />
      </Route>
    </Routes>
  )
}
