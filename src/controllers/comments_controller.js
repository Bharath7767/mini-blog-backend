const comments_crud = require('../crud/comments_crud')

const getAllComments = async(req,res) => {
    try {
        const comments = await comments_crud.getAllComments()
        res.status(200).json (comments)
    } catch (error) {
        res.status(500).json({message:"Error while getting comments"})
    }
}

const getCommentByPostId = async(req,res) => {
    try {
        const{postId} = req.params;
        const comments = await comments_crud.getCommentByPostId(postId)
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({message:"Comments cannot get successfully"})
    }
}

const createComment = async(req,res) => {
    try {
        const {postId,content} = req.body;
        const comment = await comments_crud.createComment({
            postId,
            userId,
            content
        });
        res.status(200).json(comment)    
    } catch (error) {
        res.status(500).json({message:"Cannot create comment"})
    }   
}

module.exports = {
    getAllComments,getCommentByPostId,createComment
}