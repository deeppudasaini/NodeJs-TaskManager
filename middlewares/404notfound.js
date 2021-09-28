const notFound=(req,res)=>{
    res.status(404).send({
        status:404,
        message:"Not Found"
    })
}
module.exports=notFound;