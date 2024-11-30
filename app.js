const express = require('express');
const app = express();
const path = require('path');
let portNumber = 3000;

app.set('veiw engine',"ejs");
app.set('veiws',path.join(__dirname,'veiws'));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


let quoteArray = [
    {
    _id:1,
    qoute:"The only way to do great work is to love what you do.",
    name:"Steve Jobs" 
   },
   {
    _id:2,
    qoute:"In three words I can sum up everything I've learned about life: it goes on.",
    name:"Robert Frost" 
   },
   {
    _id:3,
    qoute:"The only person you are destined to become is the person you decide to be.",
    name:"Ralph Waldo Emerson " 
   },
   {
    _id:4,
    qoute:"It does not matter how slowly you go as long as you do not stop.",
    name:"Confucius" 
   },
   {
    _id:5,
    qoute:"The future belongs to those who believe in the beauty of their dreams.",
    name:" Eleanor Roosevelt" 
   },
   {
    _id:6,
    qoute:"Well done is better than well said. ",
    name:"-Benjamin Franklin"
   },
   {
    _id:7,
    qoute:"The best and most beautiful things in the world cannot be seen or even touched- they must be felt with the heart.  ",
    name:"-Helen Keller"
   },
   {
    _id:8,
    qoute:"It is during our darkest moments that we must focus to see the light.   ",
    name:"-Aristotle."
   },

   {
    _id:9,
    qoute:"Do not go where the path may lead, go instead where there is no path and leave a trail.  ",
    name:"-Ralph Waldo Emerson "
   },
   {
    _id:10,
    qoute:"Be yourself; everyone else is already taken. ",
    name:"-Oscar Wilde"
   }
]



app.get('/',(req,res)=>{
   let randomQuote = Math.floor(Math.random(quoteArray) *quoteArray.length);
   console.log(randomQuote);
     
 res.render('index.ejs',{data:quoteArray[randomQuote]});
})

app.get('/table',(req,res)=>{   
  res.render('table.ejs',{data:quoteArray});
 })





app.listen(portNumber,()=>{
  console.log(`listening to the portNumber ${portNumber}`); 
})