const mongoose = require('mongoose')

module.exports = function(){
  const db = "mmongodb+srv://tiranHarsha:tiran@123@cluster0.rwpfvjo.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(db,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log(`Connect to ${db}...`))
    .catch(err => console.error('Could not connect to MongoDB...'))

}
 