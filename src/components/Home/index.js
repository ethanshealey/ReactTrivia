import { useState} from 'react'
import { Divider, Button } from 'antd'
import 'antd/dist/antd.css'
import '../../App.css';

const Home = (props) => {
    return (
        <>
            <div className="header-container">
                <h1 className="header">Welcome to Trivia!</h1>
            </div>
            <Divider />
            <div className="content-container">
                <div className="content">
                    <span className="paytone">Trivia!</span> takes advantage of the <a href="https://opentdb.com/" target="_blank">Open Trivia Database</a> to provide you with a fun and challenging way to test your knowledge of the world!
                </div>
                <Button type="primary" size="large" onClick={() => props.setSelected(2)}>Play Now!</Button>
            </div>
        </>
    )
}

export default Home
