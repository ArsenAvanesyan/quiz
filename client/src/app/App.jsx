import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { axiosRequest } from '../services/axiosInstance';
import './App.css'
import Navbar from '../widgets/navbar/Navbar';
import MainPage from '../pages/mainPage/MainPage';
import FirstTopicPage from '../pages/firstTopic/FirstTopicPage'
import SecondTopicPage from '../pages/secondTopic/secondTopicPage'





function App() {

  const first = 'quiz1'
  const second = 'quiz2'

  const [questionsFT, setFirstTopic] = useState([]);
  const [questionsST, setSecondTopic] = useState([]);

  const getAllquestionsOfFirstTopic = async () => {
    try {
      const response = await axiosRequest.get('/');
      if (response.status === 200) {
        setFirstTopic(response.data);
      }
    } catch ({ response }) {
      // попадают 400 и 500
      console.log(response.data.message);
    }
  };

  const getAllquestionsOfSecondTopic = async () => {
    try {
      const response = await axiosRequest.get('/');
      if (response.status === 200) {
        setSecondTopic(response.data);
      }
    } catch ({ response }) {
      // попадают 400 и 500
      console.log(response.data.message);
    }
  };


  useEffect(() => {
    getAllquestionsOfFirstTopic()
    getAllquestionsOfSecondTopic()

  }, [])

  return (
    <>
    <Navbar firstTopic={first} secondTopic={second}/>
    
    <Routes>
        
        <Route
          path={`/quiz/:topicId/question/:questionId`}
          element={<FirstTopicPage title={'hello!1'} questions={questionsFT}/>} 
        />
        
        <Route path='/' element={<MainPage/>}/>

        <Route
          path={`/quiz/:topicId/question/:questionId`} 
          element={<SecondTopicPage title={'hello!2'}/>} 
        />
      </Routes>
    </>
  )
}

export default App
