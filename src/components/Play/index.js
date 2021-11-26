import { useState, useEffect } from 'react'
import { Space, Divider } from 'antd'
import { categories, difficulties, types, getData } from '../../api';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Filters from '../Filters'
import Question from '../Question';
import AnswerList from '../AnswerList';
import Results from '../Results';

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

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
        setIsAnswered(false)
        setUserAnswer('')
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
            <Filters 
                categories={categories} category={category} setCategory={setCategory} 
                difficulties={difficulties} difficulty={difficulty} setDifficulty={setDifficulty}
                types={types} type={type} setType={setType}
                handleNextQuestion={handleNextQuestion}
            />
            <Divider />
            { isLoaded ? 
                <>
                    <Question 
                        question={question} 
                        questionCategory={questionCategory}
                        questionDiff={questionDiff}
                        diffColor={diffColor}
                    />
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        <AnswerList answers={answers} handleAnswer={handleAnswer} userAnswer={userAnswer} />
                        <Results correctAnswer={correctAnswer} isAnswered={isAnswered} userAnswer={userAnswer} handleNextQuestion={handleNextQuestion} />
                    </Space>
                </>
            :
                <Spin indicator={loadingIcon} />
            }
            
        </div>
    )
}

export default Play
