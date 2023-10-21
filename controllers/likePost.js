
const Post = require("../models/Post");
const Like = require("../models/Like");


exports.likePost = async(req,res) => {
    try{
       
        const {post, user} = req.body;
        const like = new Like({
            post,user
        });

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {like: savedLike._id}}, {new:true})
        .populate("like").exec() ;

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