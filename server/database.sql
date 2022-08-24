CREATE DATABASE blog_website;

CREATE TABLE blog(
  blog_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  body VARCHAR(255),
  author VARCHAR(255)
);