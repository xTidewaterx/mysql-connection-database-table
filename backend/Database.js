//create database, then table, realtional database, columns with rows, xampp, following address web browser

const {
    createPool
} = require('mysql2')

const  pool = 

    createPool({
host: "localhost",
user: "root",
password: "",
database: "guestbook",
connectionLimit: 10
    })


    //we now log result from mysql now database, xampp connected phpmyadmin, database 
    //mysql connection!!
    //database table createpool localhost host, then database then pool.query

//Database, guestbook
    pool.query(`select * from entries`, (err, result, fields) => {
        console.log(result)
        console.log(fields)
        if(err) {
            return console.log(err);
        }
    })

    //Database with table, then sql tab, then code (guestname varchar) ---varchar meaning::  A VARCHAR or variable character field is a set of character data of indeterminate length. 
    //type of a field (or column) in a database which can hold letters and numbers.

    module.exports = pool;

    //we have something building with all connection then exact return from database

    //link:: https://www.youtube.com/watch?v=eIjbSH3Imb8
    //link:: https://www.youtube.com/watch?v=eIjbSH3Imb8