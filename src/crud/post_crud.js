const {Post} = require("../models/post")

const getAllPosts = async() =>await post_crud.getAllPosts(Post);

const getPostById = async(Post,id) => await post_crud.getPostById(Post,id)

const createPost = async(postId,data) => await post_crud.createPost(Post,data)

const updatePost = async(Post,id,data) => await post_crud.updatePost(Post,id,data)

const deletePost = async(Post,id) => await post_crud.deletePost(Post,id)

module.exports = {
    getAllPosts,getPostById,createPost,updatePost,deletePost
}
        
