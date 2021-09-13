import React from 'react'

const QuizCard = (props) => {
    // console.log("QuizCard line5", props.question3)
    console.log("QuizCard line5", props)
    // console.log("QuizCard line7", props.quiz[0].question)
    console.log("QuizCard line7", props)
    return (
        <div>
            <div className="quiz-card">
                <h2>JS Array Methods Quiz</h2>
                <h3>{props.quiz.question}</h3>
                <div className="answer-btns">
                    {props.quiz.answers.map((answerOptions) => <button onClick={() => props.nextQuestion(answerOptions.isCorrect)}>{answerOptions.answr}</button>)}
                </div>
            </div>
        </div>
    )
}

export default QuizCard