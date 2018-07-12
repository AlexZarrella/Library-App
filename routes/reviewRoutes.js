const express       = require('express');
const reviewRouter  = express.Router();
const Book          = require('../models/book');



reviewRouter.get('/books/:id/reviews/new', (req,res,next)=>{
    Book.findById(req.params.id) //req.params is in URL 
    .then((theBook)=>{
        res.render('addReview', {theBook})
    })
    .catch((err)=>{
        next(err)
    })
});

reviewRouter.post('/books/:id/reviews/create', (req, res, next)=>{
    // const theReview = {reviewer: req.body.reviewer, content: req.body.content}
    // const theReview = req.body; could use this constant here
//mongoose update push                                      |
//                                                          |
    Book.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}})
//first arg is ID of thing you want to find
//second arg is the update you want to run
    .then((response)=>{
        res.redirect(`/books/${req.params.id}`) //goes back to book details page
    })
    .catch((err)=>{
        next(err);
    })
});

reviewRouter.post('/books/:id/reviews/delete/:reviewIndex', (req, res, next)=>{
    const bookId = req.params.id;
    const reviewIndex = req.params.reviewIndex
    Book.findById(bookId)
    .then((theBookThatIEdit)=>{
        theBookThatIEdit.reviews.splice(reviewIndex, 1)
        // theBookThatIEdit.reviews[reviewIndex] = {reviewer: "me", content: ""}
        
        theBookThatIEdit.save()
        .then(()=>{
            res.redirect('/books/' +bookId)
        })
        .catch((err)=>{
            next(err);
        })
    })
    .catch((err)=>{
        next(err);
    })
})







module.exports = reviewRouter;