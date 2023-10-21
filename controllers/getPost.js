
const Post = require("../models/Post");

exports.getPost = async(req,res) =>{
    try{

        const posts = await Post.find().populate("like").populate("comments").exec();

        res.status(200).json({
            success:true,
            data:posts,
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