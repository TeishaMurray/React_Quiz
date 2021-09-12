import React from 'react'
import AnswerCard from './AnswerCard'

const QuizCard = (props) => {
    // console.log("QuizCard line5", props.question3)
    // console.log("QuizCard line6", props.answers)
        console.log("QuizCard", props.question)
    return(
        <div>
            <div>
                <h2>Description</h2>
            </div>
            <div>
                <h2>JS Array Methods Quiz</h2>
                <div className="question-sec">
                    {props.question1}
                    <div className="answer-btns">
                        
                        <AnswerCard options={props.answers} />
                    </div>
                </div>
                </div>
        </div>
    )
}

export default QuizCard