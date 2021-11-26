import React from 'react'
import { Button, Space } from 'antd'
import { useMediaQuery } from 'react-responsive';

const AnswerList = (props) => {

    const isMobile = useMediaQuery({ maxWidth: 980 })

    if(isMobile)
        return (
            <Space direction="vertical" size="middle">
            { props.answers.map((ans, i) => (
                <Button key={i} style={{ minWidth: '50vw' }} block onClick={() => props.handleAnswer(ans)}>{ ans }</Button>
            ))}
            </Space>
        )
    else
        return (
            <Space direction="vertical" size="middle">
                { props.answers.map((ans, i) => (
                    <Button key={i} style={{ minWidth: '25vw' }} block onClick={() => props.handleAnswer(ans)}>{ ans }</Button>
                ))}
            </Space>
    )
}

export default AnswerList
