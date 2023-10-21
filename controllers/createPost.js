const Post = require("../models/Post");

exports.createPost = async(req,res) =>{
    try{
        const {title,body} = req.body;

        const post = new Post({
            title,body
        });

        const savedPost = await post.save();

        res.status(200).json({
            success:true,
            post:savedPost,
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

