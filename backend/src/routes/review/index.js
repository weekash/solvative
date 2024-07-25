const express = require("express")
const ReviewController = require("../../controllers/ReviewController")

const reviewRouter = express.Router()


reviewRouter.post('/', ReviewController.addNewReview)
reviewRouter.get('/', ReviewController.getAllReviews)
reviewRouter.post('/:id', ReviewController.updateReview)
reviewRouter.get('/:id', ReviewController.getReviewById)
reviewRouter.delete('/:id', ReviewController.deleteReview)


module.exports = reviewRouter