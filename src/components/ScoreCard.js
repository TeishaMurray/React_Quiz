const ScoreCard = (props) => {

console.log("ScoreCard line3", "Current Score", props.scoreDisplay)
    return(
        <div>
            <div>
                <h2>Your score</h2>
                <div>{props.scoreDisplay}/10</div>
            </div>
        </div>
        
       
    )
}

export default ScoreCard