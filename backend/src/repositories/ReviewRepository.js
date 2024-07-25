const Review = require("../database/models/review");

class ReviewRepository {

    static QueryToGetAllReviews() {
        return Review.findAll({
            order: [['updatedAt', 'DESC'],['createdAt','DESC']]
        });
    }

    static QueryToCreateReview(review) {
        return Review.create(review)
    }

    static QueryToFindReviewById(id) {
        return Review.findByPk(id)
    }

    static QueryToUpdateReviewById(id, review) {
        return Review.update(review, { where: { id } })
    }

    static QueryToDeleteReviewById(id) {
        return Review.destroy({
            where: { id },
            force: true
        })
    }
}

module.exports =  ReviewRepository