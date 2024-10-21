const post_crud = require('../crud/post_crud')

const getAllPosts = async(req,res) => {
    try {
        const posts = await post_crud.getAllPosts;
        const formattedPosts = posts.map(post =>({
            id:post.id,
            title:post.title,
            content:post.content,            
        })) 
        res.status(200).json(formattedPosts);
    } catch (error) {
        res.status(500).json({message:"Cannot fetch posts now,check it later."})
    }
}

const getPostById = async(req,res) => {
    try {
     const {id} = req.params;
     const post = await post_crud.getPostById(id)
     if(!post) return res.status(404).json({message})
    } catch (error) {
        res.status(500).json({message:"Cannot fetch post by ID"})
    }
}

const createPost = async(req,res) => {
    try {
        const {title,content} = req.body
        const post = await post_crud.createPost({
            title:title,
            content:content,
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({message:"Cannot create post"})
    }
}

const updatePost = async(req,res) => {
    try {
        const{id} = req.params;
        const{title,content} = req.body;
        
        const post = await post_crud.updatePost(id,{
            title:title,
            content:content,
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message:"update post not updated"})
    }   
}

const deletePost = async(req,res) => {
    try {
        const {id} = req.params;
        const post = await post_crud.deletePost(id)
        res.status(200).json({message:"Post deleted successfully"})
    } catch (error) {
        res.status(500).json({message:"Post cannot deleted"})
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}