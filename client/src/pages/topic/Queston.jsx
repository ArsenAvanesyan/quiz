import React, {useEffect, useState} from'react';
import { axiosRequest } from '../../services/axiosInstance';
import { useParams } from 'react-router-dom';
function Queston() {

  const [question, setQuesstions] = useState([])
  const {topicId} = useParams()
  const [count, setCount] = useState(0)
  console.log(count);
  
  
  const get = async () => {
    try {
      const response = await axiosRequest.get(`/topic/${topicId}`);
      //console.log(response);
      
     // console.log(response.data.question);
      
      if (response.status === 200) {
        setQuesstions(response.data.topic.Questions);
      }
    } catch ({ response }) {
      // попадают 400 и 500
      
    }
  };

  console.log(question);

  useEffect(()=>{
  get()
  }, [])

  return (
    <>
     <div><h1>Question</h1></div>
      {
      question.slice(count,(count +1)).map(el => {
        return (
          <div>{el.title}</div>
        )
      })
      }
      <button onClick={()=> setCount((prev) => prev += 1)}>new question</button>
    </>
     
  );
}

export default Queston;