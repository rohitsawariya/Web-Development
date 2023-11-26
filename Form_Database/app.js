const mongoose = require('mongoose');
const express = require('express');
const app = express();

// MiddleWares
app.use(express.static('public'));
app.set('view engine', 'ejs');
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Mongoose Database
main().catch(err =>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/ProjectForm");
    console.log("Connected");
}

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true },
    email : {
        type : String,
        required : true },
    password : {
        type : String,
        required : true,
        minlength: 6 },
    number : {
        type : Number,
        required : true },
    gender : {
        type : String,
        required : true },
    address : {
        type : String,
        required : true }
});

const Data = mongoose.model("Data",schema);

app.get('/',(req,res)=>{
    res.render('index');
})
// app.post('/',(req,res)=>{
//     var mydata = new Data(req.body);
//     mydata.save().then(()=>{
//         res.render('thanks')
//     }).catch(()=>{
//         res.status(400).render('error')
//     })
// })
app.post('/', async (req, res) => {
    try {
      var mydata = new Data(req.body);
      await mydata.save();
      res.render('thanks');
    } catch (error) {
      res.status(400).render('error');
    }
  });
  
app.listen(80);
