import React from'react';
import TopicItem from './TopicItem';
function TopicPages({ topics, setTopics }) {

   
  return (
   <>
   <div className="flex">
   {topics && topics.map(topic => <TopicItem key={topic.id} topic={topic} setTopics={setTopics}/>)}
   </div>
   </>
  )
}

export default TopicPages;