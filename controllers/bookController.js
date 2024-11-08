const Book=require('../modals/bookModals')
// insert new book
exports.newBookController= async(req,res)=>{
    console.log("newBookController ");
    const{title,description,category,trending,coverImage,oldPrice,newPrice,createdAt}=req.body
    console.log(title,description,category,trending,coverImage,oldPrice,newPrice,createdAt);
    try{
      const existbook=await Book.findOne({title})
      console.log(existbook);
      if(existbook){
        res.status(406).send("Book already exist. please add another")

      }else{
        const newBook=new Book({
            title,description,category,trending,coverImage,oldPrice,newPrice,createdAt
        })
        await newBook.save()
        res.status(200).json(newBook)

      }
    }catch(err){ 
        res.status(401).json(err)
    }
}
// getallbooks
exports.getAllBookController= async(req,res)=>{
    console.log("GetAllBookController ");
    try{
      const books=await Book.find()
      
        res.status(200).send(books)

   
     
      
    }catch(err){ 
        console.log("error fectching books",err);
        
        res.status(401).json(err)
    }
}

// get single book
exports.getSingleBookController= async(req,res)=>{
    console.log("GetSingleBookController ");
    try{
            const {id}=req.params

      const book=await Book.findById(id)
      if(!book){
        res.status(404).send({message:" Book not Found"})
      }
        res.status(200).send(book)

    }catch(err){ 
        console.log("error fectching books",err);
        
        res.status(401).json(err)
    }
}
// update
exports.updateBookController= async(req,res)=>{
    console.log("DeleteBookController ");
    try{
            const {id}=req.params

      const updateBook=await Book.findByIdAndUpdate(id,req.body,{new:true})
      if(!updateBook){
        res.status(404).send({message:" Book not Found"})
      }
        res.status(200).send({
            message:"Book Updated SuccesFully",
            book:updateBook
        })

    }catch(err){ 
        console.log("error fectching books",err);
        
        res.status(401).json(err)
    }
}
// delete
exports.deleteBookController= async(req,res)=>{
    console.log("deleteBookController ");
    try{
            const {id}=req.params

      const deleteBook=await Book.findByIdAndDelete(id)
      if(!deleteBook){
        res.status(404).send({message:" Book not Found"})
      }
        res.status(200).send({
            message:"Book Deleted SuccesFully",
            book:deleteBook
        })

    }catch(err){ 
        console.log("error deleting books",err);
        
        res.status(401).json(err)
    }
}
