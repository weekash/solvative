const ReviewRepository = require("../repositories/ReviewRepository");
const CustomError = require("../utils/CustomError");

class ReviewService {
    static getAllTheReviews() {
        return ReviewRepository.QueryToGetAllReviews();
    }

    static createReview(review) {
        review.id = crypto.randomUUID()
        return ReviewRepository.QueryToCreateReview(review);
    }
    static findReviewById(id) {
        return ReviewRepository.QueryToFindReviewById(id)
    }

    static async updateReviewById(id, updatedReview) {
        let review = await ReviewRepository.QueryToFindReviewById(id)
        if (!review) {
            throw new CustomError("Review does not exist", 404)
        }
        let updatedObject = {}
        updatedObject.title = updatedReview.title || review.title;
        updatedObject.content = updatedReview.content || review.content;

        return await ReviewRepository.QueryToUpdateReviewById(id, updatedObject)
    }

    static async deleteReviewById(id){
        let review = await ReviewRepository.QueryToFindReviewById(id)
        if (!review) {
            throw new CustomError("Review does not exist", 404)
        }
        return await ReviewRepository.QueryToDeleteReviewById(id)
    }
}

module.exports = ReviewService;