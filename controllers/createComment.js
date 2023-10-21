const Post = require("../models/Post");
const Comment = require("../models/Comment");

exports.createComment = async(req,res) => {
    try{
      const {post,user,body} = req.body;

      const comment = new Comment({
        post,user,body
      });

      const savedComment = await comment.save();

      const updatedPost = await Post.findByIdAndUpdate(post,{$push : {comments: savedComment._id}}, {new:true})
                          .populate("comments")
                          .exec();

        res.json({
            post: updatedPost,
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