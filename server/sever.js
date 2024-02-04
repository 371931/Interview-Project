import Express from "express";
import cors from "cors";
import BodyParser from "body-parser";
import sqlite3 from "sqlite3";

const app = Express();
let sql;

app.use(BodyParser.urlencoded({extended : true}));
app.use(cors());
app.use(Express.json());

//table
app.get("/tableData",(req,res)=>{
    sql=`SELECT * FROM prodetails`;

    db.all(sql,(err,rows)=>{
        err ? console.log(err) : res.send(rows)
    });

});

//todo
app.get("/todo",(req,res)=>{
    sql=`SELECT * FROM todoData`;

    db.all(sql,(err,rows)=>{
        err ? console.log(err) : res.send(rows)
    });
    
});

app.post("/todoCon",(req,res)=>{
    let val = req.body;

    sql=`INSERT INTO todoData(content,completed) values(?,?)`;

    db.run(sql,[val.inval,0],(err)=>{
        err ? console.log(err) : console.log("added");
    })
});

app.post("/deletenote",(req,res)=>{
    let value = req.body;

    sql=`DELETE FROM todoData WHERE id=?`;

    db.run(sql,[value.id],(err)=>{
        err && console.log(err);
    })
});

app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("launched");
    }
});

const db = new sqlite3.Database("./interPro.db",sqlite3.OPEN_READWRITE,(err)=>{err ? console.log(err) : console.log("connected");});