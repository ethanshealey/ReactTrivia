import React from 'react'
import {Space, Divider, Button} from 'antd'
import { useMediaQuery } from 'react-responsive'

const Results = (props) => {

    const correct_responses = [
        'Correct!',
        'You got it!',
        'You are correct!',
        'That\'s right!',
        'Good job!',
    ]

    const isMobile = useMediaQuery({ maxWidth: 980 })

    if(isMobile)
        return (
            <Space direction="vertical" size="middle">   
                <div style={ props.isAnswered ? { display: 'block', width: '50vw' } : { display: 'none', width: '50vw' } }>
                    <Divider />
                    {
                        props.correctAnswer === props.userAnswer ? 
                            <h3 style={{ color: 'green' }}>{ correct_responses[Math.floor(Math.random() * correct_responses.length)] }</h3> 
                            : 
                            <>
                                <h3 style={{ color: 'red' }}>Sorry, thats incorrect!</h3>
                                <br />
                                <p style={{ marginTop: '-30px' }} className="sub">The correct answer was <b>{props.correctAnswer}</b></p>
                            </>
                    }
                    <Button onClick={() =>props.handleNextQuestion()} type="primary" style={{ width: '50vw' }}>Next Question</Button>
                </div>
            </Space>
        )
    else
        return (
            <Space direction="vertical" size="middle">   
                <div style={ props.isAnswered ? { display: 'block' } : { display: 'none' } }>
                    <Divider />
                    {
                        props.correctAnswer === props.userAnswer ? 
                            <h3 style={{ color: 'green' }}>{ correct_responses[Math.floor(Math.random() * correct_responses.length)] }</h3> 
                            : 
                            <>
                                <h3 style={{ color: 'red' }}>Sorry, thats incorrect!</h3>
                                <br />
                                <p style={{ marginTop: '-30px' }} className="sub">The correct answer was <b>{props.correctAnswer}</b></p>
                            </>
                    }
                    <Button onClick={() =>props.handleNextQuestion()} type="primary" style={{ width: '50vh' }}>Next Question</Button>
                </div>
            </Space>
        )
}

export default Results
