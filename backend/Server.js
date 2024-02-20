import express from 'express';
const app =express();

//dream::: https://www.finn.no/job/fulltime/ad.html?finnkode=336438340


//ingen er klar til å blø så mye for skjorten som meg
//sitter her midt på natten, øynene lyser opp, jeg gir alt, det jeg ikke kan skal jeg lære meg dobbelt så fort som alle andre
//dette vil jeg med hele kroppen
//Cradl AI, jeg vil kjempe for dette, masse erfaring og kreativitet, ai icp prosjekt desentralisert debattplattform sosialt db mysql, google plattform seknvens programmering

//create expresss server
//express node js interact database server side javascript runtime enviroment
//installing mysql2 conn3ecting to our database
app.use(express.json());

import mysql from 'mysql2';

// connecting Database
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "guestbook",
  });

//
app.get('/',(req,res)=>{
    res.send("listening to our route, route on localhost");
})

app.listen(5002,()=>{
console.log("Server listening in http://localhost:5002")
})


app.get("/users", async(req, res) => {
    try {
        const data = await connection.promise().query(
          `SELECT *  from entries;`
        );
        res.status(202).json({
          users: data[0],
        });
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
});