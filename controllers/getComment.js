const Blog = require("../models/Comment");

exports.getComment = async(req,res) => {
    try{
        const blog = await Blog.find({});

        res.status(200).json({
            success:true,
            data:blog,
            message:"Comment fetched Successfully",
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