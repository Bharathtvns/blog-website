const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());

    
app.post("/blogs", async (req, res) => {
    const values = [ req.body.title, 
        req.body.body,
        req.body.author]
    try {
      const newTodo = await pool.query(
        `INSERT INTO blog (title,body,author) VALUES($1,$2,$3) `,
        values
      );
  
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/blogs", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM blog");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  
  app.get("/blog/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM blog WHERE blog_id = $1", [
        id
      ]);
      console.log(id);
  
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


  app.get("/blogs/:author", async (req, res) => {
    try {
      const {author} = req.params;
      console.log(author);
      const todo = await pool.query("SELECT * FROM blog WHERE author = $1",[author]);
      
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.put("/blog/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const values = [ req.body.title, 
        req.body.body,
        req.body.author,
        id];
      const updateTodo = await pool.query(
        `UPDATE blog SET title = $1, body = $2, author = $3 WHERE blog_id = $4`,
        values
      );    
        console.log(req.body);
      res.json("Blog was updated!");
    } catch (err) {
      console.error(err.message);
      res.json("Blog was not updated!");
    }
  });

  


  app.delete("/blogs/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM blog WHERE blog_id = $1", [
        id
      ]);
      res.json("Blog was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(8000, () => {
    console.log("server has started on port blog server 8000");
  });