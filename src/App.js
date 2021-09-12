import React, { useState } from 'react';
import quizData from './Questions';
import './App.css';
import QuizCard from './components/QuizCard';
import ScoreCard from './components/ScoreCard';

function App() {
  const [quiz] = useState (quizData)
  
  console.log("App.js line 10", quiz[0].question)

  // const quizQuestions = quiz.map ( (question) => <QuizCard question={question}/> )
  //this would work to display all questions at once but i only want one question at a time
  //we do want to map over the answers for the buttons
  // const answerOptions = quiz.quizData[0].answers.map ( (answers) => <QuizCard answers={answers} />)
  // console.log("App.js line16", answerOptions)
  return (
    <div>
      <QuizCard  
      question1={quiz[0].question} 
      question2={quiz[1].question} 
      question3={quiz[2].question}
      answers={quiz[0].answers}
      />

      <ScoreCard />
    </div>
  );
}

export default App;
