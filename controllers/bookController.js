const {Book, Author} = require("../model/Model");

const bookController = {
   //ADD A BOOK
   addABook: async(req,res) => {
      try {
          const newBook = new Book(req.body);
          const savedBook = await newBook.save();
          if (req.body.author) {
              const author = Author.findById({_id:req.body.author});
            await  author.updateOne({$push: {books: savedBook._id}})
          }
          res.status(200).json(savedBook);
      } catch (error) {
          res.status(500).json(error);
      }
   },

   // GET ALL BOOKS
   getAllBooks: async(req,res) => {
       try {
           const allBook = await Book.find();
           res.status(200).json(allBook);
       } catch (error) {
           res.status(500).json(error);
       }
   },
   //GET A BOOK
   getABook: async(req,res) => {
       try {
           const book = await Book.findById(req.params.id).populate("author");
           res.status(200).json(book);
       } catch (error) {
           res.status(500).json(error);
       }
   },

   // UPDATE A BOOK
   updateBook: async(req,res) => {
       try {
           const book = await Book.findById(req.params.id);
           await book.updateOne({$set: req.body});
           res.status(200).json("Update successfully !");
       } catch (error) {
           res.status(500).json(error);
       }
   }
}

module.exports = bookController;