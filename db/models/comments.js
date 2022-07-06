require('../database')
const mongoose =  require('mongoose')


const commentsSchema  = mongoose.Schema({
    name: {type: String, required: true},
    topic: {type: String, required: true},
    comment: {type: String, required: true, default: Date.now }
},
{
    timestamps: true
})

const Comments = mongoose.model('Comments', commentsSchema)

module.exports = Comments

