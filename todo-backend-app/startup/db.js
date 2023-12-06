const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env)

module.exports = function(){
  const db = `mmongodb+srv://${process.env.REACT_APP_MONGODB_USERNAME}:${process.env.REACT_APP_MONGODB_PASSWORD}@cluster0.rwpfvjo.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(db,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log(`Connect to ${db}...`))
    .catch(err => console.error('Could not connect to MongoDB...'))

}
 