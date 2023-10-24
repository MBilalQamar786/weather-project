const express=require('express')
const app=express();
const path=require('path')
const hbs=require('hbs');
const port= process.env.PORT || 8000;
const staticpath=path.join(__dirname,'../public')
app.set('view engine','hbs');
// app.engine('html', require('hbs').__express);
app.use(express.static(staticpath))

const templatepath=path.join(__dirname,'template/views')
app.set('views',templatepath);
const partialpath=path.join(__dirname,'template/partials')
hbs.registerPartials(partialpath);
app.get('',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('404error',{errormess:'Page Not Found'});
});
app.listen(port,()=>{
    console.log(`listening to the port number ${port}`)
});