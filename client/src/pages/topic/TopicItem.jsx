import React from'react';
function TopicItem({ topic, setTopics }) {
  return (
      <div className='item'>
        <img src={topic.img} alt='image'/>
        <h1>{topic.title}</h1>
        {/* <Link to={`/topics/${topic.id}`}> choose this topic</Link> */}
        </div>
  );
}

export default TopicItem;