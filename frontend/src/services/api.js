import axiosInstance from "../axios/axios";

const REVIEW_API_URL="review"
export function getAllReviews(){
    return axiosInstance.get(REVIEW_API_URL)
}

export function getReviewById(id){
    return axiosInstance.get(`${REVIEW_API_URL}/${id}`)
}

export function addNewReview(data){
    return axiosInstance.post(REVIEW_API_URL,data)
}


export function updateReviewById(id,data){
    return axiosInstance.post(`${REVIEW_API_URL}/${id}`,data)
}

export function deleteReviewById(id){
    return axiosInstance.delete(`${REVIEW_API_URL}/${id}`)
}