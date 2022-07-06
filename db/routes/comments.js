const express = require('express')
const Comments = require('../models/comments')
const route = express.Router()


route.get('/comments', async(req,res)=> {
    try{
        const comments = await Comments.find({})
        res.render('index', {comments})
    }catch(e){
        res.status(500).send(e)
    }
})

route.get('/new', async(req,res)=>{
    try{
        res.render('new')
    }catch(e){
        res.status(500).send(e)
    }
})

route.post('/comments', async(req,res)=> {
    try{
        const comments = new Comments({
            name: req.body.name,
            topic: req.body.topic,
            comment: req.body.comment
        })
        await comments.save()
        res.redirect('/comments', 301, {comments})
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports = route