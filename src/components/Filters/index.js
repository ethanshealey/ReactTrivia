import React from 'react'
import { Space, Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const Filters = (props) => {

    const isMobile = useMediaQuery({ maxWidth: 980 })

    if(isMobile)
        return (
            <Space direction="vertical" size="middle" wrap align="center">
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { props.categories.map((cat, i) => (
                            <Menu.Item key={i} onClick={() => props.setCategory(cat)}>{ cat }</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '50vw' }}>{ props.category }<DownOutlined /></Button>
                </Dropdown>
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { props.difficulties.map((diff, i) => (
                            <Menu.Item key={i} onClick={() => props.setDifficulty(diff)}>{ diff }</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '50vw' }}>{ props.difficulty }<DownOutlined /></Button>
                </Dropdown>
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { props.types.map((ty, i) => (
                            <Menu.Item key={i} onClick={() => props.setType(ty)}>{ty}</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '50vw' }}>{ props.type }<DownOutlined /></Button>
                </Dropdown>
                <Button type="primary" style={{width: '50vw'}} onClick={props.handleNextQuestion}>Go</Button>
            </Space>
        )
    else
        return (
            <Space direction="horizontal" size="middle" wrap align="center">
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { props.categories.map((cat, i) => (
                            <Menu.Item key={i} onClick={() => props.setCategory(cat)}>{ cat }</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '22vw' }}>{ props.category }<DownOutlined /></Button>
                </Dropdown>
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { props.difficulties.map((diff, i) => (
                            <Menu.Item key={i} onClick={() => props.setDifficulty(diff)}>{ diff }</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '15vw' }}>{ props.difficulty }<DownOutlined /></Button>
                </Dropdown>
                <Dropdown placement="bottomLeft" overlay={() => (
                    <Menu>
                        { props.types.map((ty, i) => (
                            <Menu.Item key={i} onClick={() => props.setType(ty)}>{ty}</Menu.Item>
                        ))}
                    </Menu>
                )}>
                    <Button style={{ width: '15vw' }}>{ props.type }<DownOutlined /></Button>
                </Dropdown>
                <Button type="primary" onClick={props.handleNextQuestion}>Go</Button>
            </Space>
        )
}

export default Filters
