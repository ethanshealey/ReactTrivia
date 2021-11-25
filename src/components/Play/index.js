import { useState, useEffect } from 'react'
import { Space, Dropdown, Button, Menu, Divider, Progress } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { categories, difficulties, types, getData } from '../../api';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Play = () => {

    const [ category, setCategory ] = useState('Any Category')
    const [ difficulty, setDifficulty ] = useState('Any Difficulty')
    const [ type, setType ] = useState('Any Type')

    const [ isLoaded, setIsLoaded ] = useState(false)

    const [ questionCategory, setQuestionCategory ] = useState('')
    const [ question, setQuestion ] = useState('')
    const [ answers, setAnswers ] = useState([])
    const [ correctAnswer, setCorrectAnswer ] = useState('')
    const [ questionDiff, setQuestionDiff ] = useState('')
    const [ questionType, setQuestionType ] = useState('')
    const [ diffColor, setDiffColor ] = useState('green')
    const [ userAnswer, setUserAnswer ] = useState('')
    const [ isAnswered, setIsAnswered ] = useState(false)

    useEffect(() => {
        getQuestion()
    }, [])

    const getQuestion = async () => {
        setIsLoaded(false)
        const [cat, q, ans, corr, diff, ty, color] = await getData(category, difficulty, type)
        setQuestionCategory(cat)
        setQuestion(q)
        setAnswers(ans)
        setCorrectAnswer(corr)
        setQuestionDiff(diff)
        setQuestionType(ty)
        setDiffColor(color)
        setIsLoaded(true)
    }

    const handleAnswer = (ans) => {
        if(!isAnswered){
            setUserAnswer(ans)
            setIsAnswered(true)
        }
    }

    const handleNextQuestion = () => {
        setIsAnswered(false)
        setUserAnswer('')
        getQuestion()
    }

    return (
        <div className="play-container">
            <Space direction="horizontal" size="middle" wrap align="center">
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { categories.map((cat, i) => (
                            <Menu.Item key={i} onClick={() => setCategory(cat)}>{ cat }</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '50vh' }}>{ category }<DownOutlined /></Button>
                </Dropdown>
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { difficulties.map((diff, i) => (
                            <Menu.Item key={i} onClick={() => setDifficulty(diff)}>{ diff }</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '25vh' }}>{ difficulty }<DownOutlined /></Button>
                </Dropdown>
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { types.map((ty, i) => (
                            <Menu.Item key={i} onClick={() => setType(ty)}>{ty}</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '25vh' }} >{ type }<DownOutlined /></Button>
                </Dropdown>
                <Button type="primary" onClick={handleNextQuestion}>Go</Button>
            </Space>
            <Divider />
            { isLoaded ? 
            <>
                <div className="header-container">
                    <h1 className="header-md">{ question }</h1>
                    <h4 className="sub">{ questionCategory } | <span style={{ color: diffColor }}>{ questionDiff }</span></h4>
                </div>
                <Space direction="vertical" size="middle">
                    { answers.map((ans, i) => (
                        <Button key={i} style={{ minWidth: '50vh' }} block onClick={() => handleAnswer(ans)}>{ ans }</Button>
                    ))}
                    <div style={ isAnswered ? { display: 'block' } : { display: 'none' } }>
                        <Divider />
                        {
                            correctAnswer === userAnswer ? 
                                <h3 style={{ color: 'green' }}>Thats right!</h3> 
                                : 
                                <>
                                    <h3 style={{ color: 'red' }}>Sorry, thats incorrect!</h3>
                                    <br />
                                    <p style={{ marginTop: '-30px' }} className="sub">The correct answer was <b>{correctAnswer}</b></p>
                                </>
                        }
                        <Button onClick={() => handleNextQuestion()} type="primary" style={{ width: '50vh' }}>Next Question</Button>
                    </div>
                </Space>
            </>
            :
                <Spin indicator={antIcon} />
            }
            
        </div>
    )
}

export default Play
