import React, { useState } from'react';
import { Link } from 'react-router-dom';
function TopicItem({ topic, setTopics }) {

  const [question, setQuesstions] = useState([])

  
  return (
      <div className='item'>
        <img src={topic.img} alt='image'/>
        <h1>{topic.title}</h1>
        <Link to={`/topics/${topic.id}`}> choose this topic</Link>
        </div>
  );
}

export default TopicItem;