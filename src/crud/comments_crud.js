const {Comment} = require('../models/comments')

const getAllComments = async() => await comments_crud.getAllComments()
const getCommentByPostId = async(postId) => await comments_crud.getCommentByPostId(postId)
const createComment = async(data) => await comments_crud.createComment(Comment,data)

module.exports = {
    getAllComments,getCommentByPostId,createComment
}