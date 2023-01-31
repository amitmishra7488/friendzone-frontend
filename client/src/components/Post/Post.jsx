import React, { useEffect } from 'react';
import './post.css';
import { FaRegHeart, FaRegComment } from "react-icons/fa"
import { useState } from 'react';


const InstagramPost = () => {
    const [data,setData] = useState([]);
    const display=async ()=>{
      try{
        const res= await fetch('http://localhost:8080/post')
        const data=await res.json();
        console.log(data);
        setData(data);
      }
      catch(err){
        console.log(err);
      }
    }
  
    useEffect(()=>{
      display();
    },[])
  return(

  <>
  {data.length >0 ?
    data.map((el,i)=>{
      return(
    <div className="InstagramPost">
      <div className="InstagramPost__header">
        <img src="https://picsum.photos/50" alt="" className="InstagramPost__profile-image" />
        <p className="InstagramPost__username">{el.user.name}</p>
      </div>
      <img src={el.image} alt="" className="InstagramPost__post-image" />
      <div className="InstagramPost__actions">
        <FaRegHeart />
        <p className="InstagramPost__likes">{' '+el.likes.length}</p>
        <FaRegComment />
        <p className="InstagramPost__comments">45</p>
      </div>
      <p className="InstagramPost__time">3 hours ago</p>
    </div>
    )
  })
    : <div>Loading....</div>}

  </>
)};

export default InstagramPost;
