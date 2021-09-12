import React, { useState } from 'react';
import quizData from './Questions';
import './App.css';
import QuizCard from './components/QuizCard';
import ScoreCard from './components/ScoreCard';

function App() {
  const [quizArray, setQuizArray] = useState(quizData)
  // const [currentQuestion, setCurrentQuestion] = useState ()

  console.log("App.js line 10", quizArray)



  //add conditional below for array length so that when you run out of questions quiz is complete
  const nextQuestion = () => {
    console.log("we are inside quizCard, we clicked and calling our function from App.js where this console log lives")
    if (quizArray.length > 0) {
      setQuizArray(quizArray.slice(1))
    }
  }
  return (
    <div>
      <QuizCard
        quiz={quizArray[0]}
        nextQuestion={nextQuestion}
      //^^passign a function as props / lifting state^^
      />

      <ScoreCard />
    </div>
  );
}

export default App;
