import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/blog.css";
import { blogs } from './Blogs';

const BlogData = () => {
    const {title} = useParams()
    const [blogData, setBlogData] = useState('');
    useEffect(()=>{
        const data = blogs.filter((data)=> data.title === title);
        setBlogData(data[0].body)
    },[title])
    return (
        <div>
            <h2 className='dataHead'>{title}</h2>
            <p className='data'>{blogData}</p>
        </div>
    );
};

export default BlogData;