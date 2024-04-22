import { exit } from "process";
import  IBook  from "./IBook";

//import express from './node_modules/express'
const express = require('express')
const cors = require('cors');
const server = express()
server.use(cors());
server.use(express.json({type:'*/*'}))


let books:IBook[] = [
    {
        book_id: 1,
        book_name: 'Book 1',
        book_author: 'VK1',
        book_pages: 10,
        book_in_stock: true
    },
    {
        book_id: 2,
        book_name: 'Book 2',
        book_author: 'VK2',
        book_pages: 100,
        book_in_stock: false
    },
    {
        book_id: 3,
        book_name: 'Book 3',
        book_author: 'VK3',
        book_pages: 15,
        book_in_stock: true
    },
]

// URI -> URL -> HTTP
server.get('/', (req, res) => {
    res.send('Hello world')
})

server.get('/books', (req, res) => {
    res.send(books)
})

server.delete('/book/delete/:id', (req, res) => {
    console.log(req.params.id);

    books.forEach((book, index) => {
        if (book.book_id == req.params.id){
            books.splice(index, 1)
        }
    })
        
    res.status(200).json({result: 'deleted OK'})
})


server.post('/book/edit', (req, res) => {
    console.log(req.body);
    /*
    books.forEach((book, index) => {
        if (book.book_id == req.params.id){
            books.splice(index, 1)
        }
    })*/
        
    res.status(200).json({result: 'edited OK'})
})

server.get('/book/:id', (req, res) => {
    
    books.forEach((book, index) => {
        if (book.book_id == req.params.id){
            res.send(book)
        }
    })
})

server.listen(80, () => {
    console.log('Listeninig port: 80 ');
})
