const AnswerCard = (props) => {
    console.log("AnswerCard line2", props)
    console.log("AnswerCard line5", props.options)
    return(
        <div>
            {props.options.map((answerOption) => <button>{answerOption.answr}</button>)}
           {/* https://www.youtube.com/watch?v=Lya-qYiDqIA  */}
        </div>
    )
}

export default AnswerCard