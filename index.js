import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
const app = express()

const __filepath = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filepath)

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
res.render('home')

})


app.listen(4000,()=>{
    console.log(`server is running at port 4000`);
    
})