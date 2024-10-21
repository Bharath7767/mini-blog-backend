const {Like} = require('../models/likes')

const getLikesByPostId = async(postId) => await db_factory.getLikesByPostId(postId)
const createLike = async(postId,userId) => await db_factory.createLike(Like,postId,userId)
const deleteLike = async(postId) => await db_factory.deleteLike(Like,postId)

module.exports = {
    getLikesByPostId,createLike,deleteLike
}
