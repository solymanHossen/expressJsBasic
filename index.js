const express= require("express")
const fs=require("fs");
const morgan = require("morgan");
const cors=require("cors")


const app=express();
const router=express.Router();


// medidleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cors())
app.use(router)

app.use(golobalMiddlewar)


router.get("/",(req,res)=>{
  fs.readFile("./components/index.html",(error,data)=>{
    if(error){
      console.log("error",error);
      res.send("this is any problem man")
    }else{
      res.write(data)
      res.end();
    }
  })
})

router.get("/about",localMiddleware,(req,res)=>{
  fs.readFile("./components/about.html",(error,data)=>{
    if(error){
      console.log("error",error);
      res.send("this is any problem man")
    }else{
      res.write(data)
      res.end();
    }
  })
})

router.get("/contact",(req,res)=>{
  fs.readFile("./components/contact.html",(error,data)=>{
    if(error){
      console.log("error",error);
      res.send("this is any problem man")
    }else{
      res.write(data)
      res.end();
    }
  })
})


// this is the coustom midleware

const middlewareSingnature=(req,res,next)=>{
  
}
// this is the golobal middleware
function golobalMiddlewar(req,res,next){
console.log(`${req.method}-${req.url}`);
console.log("i am a golobal middleware");

if(req.query.bad){
  return res.status(400).send("abal tabal request")
}
next()

}

// this is the local middleware
function localMiddleware(req,res,next){
  console.log("i am a local middleware man");
  next();
}

app.listen(5000,()=>{
  console.log("your local host is start no problem");
})