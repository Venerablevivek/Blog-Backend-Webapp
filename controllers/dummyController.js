
exports.dummyController = async(req,res) => {
    try{
        res.send("Hello this is Dummy route");
    }catch(error){
        console.log(error);
    }
}