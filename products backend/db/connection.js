const mongoose=require('mongoose')

const connectionString=process.env.DATABASE


mongoose.connect(
    connectionString,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    }
).then(()=>{
    console.log("Atlas connected successfully");
}).catch((error)=>{
    console.log(error);
})