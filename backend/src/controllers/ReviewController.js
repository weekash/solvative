const ReviewService = require('../services/ReviewService');

class ReviewController {
    // Create a new review
    static async addNewReview(req, res) {
        const { title, content } = req.body;
        const review = await ReviewService.createReview({ title, content })
        res.status(201).json(review);

    }

    // Get all reviews
    static async getAllReviews(req, res) {
        const reviews = await ReviewService.getAllTheReviews();
        res.status(200).json(reviews);

    }

    // Get a single review by ID
    static async getReviewById(req, res) {
        const { id } = req.params;
        const review = await ReviewService.findReviewById(id);
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json(review);

    }

    // Update a review
    static async updateReview(req, res) {
        const { id } = req.params;
        const { title, content } = req.body;

        const updated = await ReviewService.updateReviewById(id, { title, content });

        if (updated) {
            res.status(200).json({ message: 'Review updated successfully' });
        } else {
            res.status(400).json({ message: 'Review can not be updated' });
        }

    }

    // Delete a review
    static async deleteReview(req, res) {
        const { id } = req.params;
        const deleted = await ReviewService.deleteReviewById(id)
        if (deleted) {
            res.status(200).json({ message: 'Review deleted successfully' });
        } else {
            res.status(400).json({ message: 'Review can not be deleted' });
        }

    }
}

module.exports = ReviewController;
