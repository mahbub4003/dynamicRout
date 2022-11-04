import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/blog.css';
import { blogs } from "./Blogs";

const Blog = () => {
    const [blog, setBlog] = useState(blogs);

    const trankStreng =(num, str)=>{
        if(str.length >num){
            return str.slice(0, num)+ "....."
        }else{
            return str
        }
    }

    return (
        <div className='grid-container'>
          {blog.map((blog)=>{
           const { id, title, body } = blog
            return(
                <div className='item1' key={id}>
                    <h2>{title}</h2>
                    <p>{ trankStreng( 100, body ) }</p>
                    <Link to={title}>Learn more</Link>
                   
                </div>
            )
          })}
        </div>
    );
};

export default Blog;