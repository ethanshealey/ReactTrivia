
const Question = (props) => {
    return (
        <div className="header-container">
            <h1 className="header-md">{ props.question }</h1>
            <h4 className="sub">{ props.questionCategory } | <span style={{ color: props.diffColor }}>{ props.questionDiff }</span></h4>
        </div>
    )
}

export default Question
