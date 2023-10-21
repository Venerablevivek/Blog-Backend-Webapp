const Post = require("../models/Post");
const Like = require("../models/Like");

exports.dislikePost = async(req,res) => {
    try{
       
        const {post, like} = req.body;
        const deletedLike = await Like.findOneAndDelete({
            post:post, _id:like,
        });

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull: {like:deletedLike._id}},{new:true});

        res.status(200).json({
            success:true,
            data:updatedPost,
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal Server Error",
            message:error.message,
        })
    }
}