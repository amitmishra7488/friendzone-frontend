import React, { useContext, useEffect } from 'react';
import './post.css';
import { FaRegHeart, FaRegComment } from "react-icons/fa"
import { useState } from 'react';
import PostLoading from '../PostLoading/PostLoading';
import { authContext } from '../../context/Context.auth';


const InstagramPost = () => {
    const [data,setData] = useState([]);
    // <authContext.Provider value={{isLoggedIn,setIsLoggedIn,postArray,setPostArray}}>
    const {setPostArray,postArray}=useContext(authContext);
    const display=async ()=>{
      try{
        const res= await fetch('https://friendzone-backend-5d8r.vercel.app/post')
        const data=await res.json();
        console.log(data);
        setPostArray(data);
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
  {postArray.length >0 ?
    postArray.map((el,i)=>{
      return(
    <div className="InstagramPost">
      <div className="InstagramPost__header">
        <img src={el.user.dp} alt="" className="InstagramPost__profile-image" />
        <p className="InstagramPost__username">{el.user.name}</p>
      </div>
      <img src={el.image} alt="" className="InstagramPost__post-image" />
      <div className="InstagramPost__actions">
        <FaRegHeart />
        <p className="InstagramPost__likes">{el.likes.length+" likes"}</p>
        <FaRegComment />
        <p className="InstagramPost__comments">45</p>
      </div>
      <p className="InstagramPost__time">3 hours ago</p>
    </div>
    )
  })
    : 
    <div className="InstagramPost">
      <PostLoading/>
    </div>
    }

  </>
)};

export default InstagramPost;
