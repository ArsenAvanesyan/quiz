import React from'react';
import { useParams, useNavigate} from 'react-router-dom'
function FirstTopicPage({ title, questions }) {

   let question;

  const { questionId } = useParams();
  const navigate = useNavigate();

  question = questions.find((que) => que.id === +questionId);

  return (
    <div>
      <h1>{title}</h1>
      {question && <h3>{question.title}</h3>}
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default FirstTopicPage;