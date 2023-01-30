import React from 'react';
import './post.css';
import {FaRegHeart,FaRegComment} from "react-icons/fa"


const InstagramPost = () => (
    <>
  <div className="InstagramPost">
    <div className="InstagramPost__header">
      <img src="https://picsum.photos/50" alt="" className="InstagramPost__profile-image"/>
      <p className="InstagramPost__username">example_username</p>
    </div>
    <img src="https://picsum.photos/400" alt="" className="InstagramPost__post-image"/>
    <div className="InstagramPost__actions">
      <FaRegHeart/>
      <p className="InstagramPost__likes">123</p>
      <FaRegComment/>
      <p className="InstagramPost__comments">45</p>
    </div>
    <p className="InstagramPost__time">3 hours ago</p>
  </div>
  <div className="InstagramPost">
  <div className="InstagramPost__header">
    <img src="https://picsum.photos/50" alt="" className="InstagramPost__profile-image"/>
    <p className="InstagramPost__username">example_username</p>
  </div>
  <img src="https://picsum.photos/400" alt="" className="InstagramPost__post-image"/>
  <div className="InstagramPost__actions">
    <FaRegHeart/>
    <p className="InstagramPost__likes">123</p>
    <FaRegComment/>
    <p className="InstagramPost__comments">45</p>
  </div>
  <p className="InstagramPost__time">3 hours ago</p>
</div>
</>
);

export default InstagramPost;
