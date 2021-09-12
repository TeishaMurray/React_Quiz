import React from 'react'

const QuizCard = (props) => {
    // console.log("QuizCard line5", props.question3)
    console.log("QuizCard line5", props)
    // console.log("QuizCard line7", props.quiz[0].question)
    return (
        <div>
            <div>
                <h2>JS Array Methods Quiz</h2>
                <h3>{props.quiz.question}</h3>
                <div>
                    <button onClick={() => props.nextQuestion()}>Next Question</button>
                </div>
            </div>
        </div>
    )
}

export default QuizCard