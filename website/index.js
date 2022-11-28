const express = require("express")
var bodyParser = require('body-parser');
const mysql = require("mysql")
const path = require("path");
const cons = require("consolidate");
const app = new express()
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));




if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
  
// localStorage.setItem('myFirstKey', 'myFirstValue');
// console.log(localStorage.getItem('myFirstKey'));


var con = mysql.createConnection({
    host: "localhost",
    port:"4306",
    user: "root",
    password: "",
    database:"tamilmovies"
  });
  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
  });


app.listen(5555)


app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/admin",(req,res)=>{
    if(req.body.username=="sanjay457"  && req.body.password=="123456") localStorage.setItem("auth")
    if(localStorage.getItem('auth')) res.render('admin.ejs');
    else res.redirect("/login")
})
app.post("/admin",(req,res)=>{
    if(req.body.username=="sanjay457"  && req.body.password=="123456") localStorage.setItem("auth","true")
    if(localStorage.getItem('auth')) res.render('admin.ejs');
    else res.redirect("/login")
})

app.get("/logout",(req,res)=>{
    localStorage.removeItem("auth");
    res.redirect("/admin")
})

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

app.get("/",(req,res)=>{
    let sql="select * from movies";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        var r=result[0]
        var len=result.length;
        var movies=new Array();
        for(var i=0;i<len;i++){
            r=result[i]
            var data={
                name : r.name,
                storyline : r.storyline,
                directors :  r.directors,	
                writers: r.writers,
                productionCompany:r.productionCompany,	
                rating:r.rating,	
                releaseDate :r.releaseDate,
                stars :r.stars,
                length:r.length,
                genre: r.genre	
            }
            movies[i]=data;
        }
        shuffle(movies)
        res.render('home',{movies:movies})
        
    })
    
   
})

app.post("/insert",(req,res)=>{

    let sql = "insert into tamilmovies.movies (name,storyline,directors,writers,productionCompany,rating,releaseDate,stars,length,genre) values (?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[req.body.name,req.body.storyline,req.body.directors,req.body.writers,req.body.productioncompany,req.body.rating,req.body.releasedate,req.body.stars,req.body.length,req.body.genre], function (err, result) {
      if (err) console.log("error");
      console.log("Done");
    res.redirect("/admin")
  });

})


app.post("/find",(req,res)=>{
    let sql="select * from movies where name='"+req.body.name+"'";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.render("nope")
        }
        var r=result[0]
        var len=result.length;
        var movies=new Array();
        for(var i=0;i<len;i++){
            r=result[i]
            var data={
                name : r.name,
                storyline : r.storyline,
                directors :  r.directors,	
                writers: r.writers,
                productionCompany:r.productionCompany,	
                rating:r.rating,	
                releaseDate :r.releaseDate,
                stars :r.stars,
                length:r.length,
                genre: r.genre	
            }
            movies[i]=data;
        }
        res.render('home',{movies:movies})
        

    })

    
})