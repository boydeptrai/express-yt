const {Author,Book} = require("../model/Model");

const  authorController = {
    addAuthor: async(req,res) => {
      try {
          const newAuthor = new Author(req.body);
          const saveAuthor = await newAuthor.save();
          res.status(200).json(saveAuthor);
      } catch (error) {
          res.status(500).json(error);
      }

    },

    //GET ALL AUTHORS
    getAllAuthors: async(req,res) =>{
       try {
           const authors = await Author.find();
           res.status(200).json(authors);
       } catch (error) {
           res.status(500).json(error);
       }
    },
};

module.exports =authorController;