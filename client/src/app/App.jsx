import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { axiosRequest } from '../services/axiosInstance';
import './App.css'
import Navbar from '../widgets/navbar/Navbar';
import MainPage from '../pages/mainPage/MainPage';
import TopicPages from '../pages/topic/TopicPages';
import Queston from '../pages/topic/Queston';





function App() {

  const [topics, setTopics] = useState([]);
  
  const getAllTopics = async () => {
    try {
      const response = await axiosRequest.get('/topic');
      
      if (response.status === 200) {
        setTopics(response.data.topic);
      }
    } catch ({ response }) {
      // попадают 400 и 500
      console.log(response.data.message);
    }
  };


  useEffect(() => {
    getAllTopics()
   
  }, [])

  return (
    <>
    <Navbar/>
    
    <Routes>
        
        <Route
          path={`/topics`}
          element={<TopicPages setTopics={setTopics} topics={topics} />} 
        />
    
        <Route path='/' element={<MainPage/>}/>

        <Route
          path={`/topics/:topicId`}
          element={<Queston />} 
        />

      </Routes>
    </>
  )
}

export default App
