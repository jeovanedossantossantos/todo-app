const restfull = require('node-restful')
const mongoose = restfull.mongoose

const todoSchema = new mongoose.Schema({
    description:{type: String,required: true},
    done: {type: Boolean, required: false},
    cretedAt: {type: Date, default: Date.now}
})

module.exports = restfull.model('Todo', todoSchema)