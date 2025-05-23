const mongoose = require('mongoose');
console.log(process.env.DB_URL)
mongoose.connect(process.env.DB_URL).then((resp)=>{
    console.log("resp :: ",resp);
}).catch(err => {
console.log("error :: ",err);
})