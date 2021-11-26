import { useMediaQuery } from 'react-responsive';

const Question = (props) => {

    const isMobile = useMediaQuery({ maxWidth: 980 });

    return (
        <div className="header-container">
            <h1 className={ !isMobile ? 'header-md' : 'header' }>{ props.question }</h1>
            <h4 className="sub">{ props.questionCategory } | <span style={{ color: props.diffColor }}>{ props.questionDiff }</span></h4>
        </div>
    )
}

export default Question
