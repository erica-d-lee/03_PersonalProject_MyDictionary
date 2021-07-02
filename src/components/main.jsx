import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { loadWordFB } from '../redux/modules/word';
import { useDispatch, useSelector } from 'react-redux';

const Main = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadWordFB());
    }, []);

    const word_data = useSelector(state => state.word_list.list);
    console.log(word_data);
    

    return (
        <React.Fragment>
            <Header>
                <Title>MY DICTIONARY</Title>
            </Header>
            <Container className='container'>
                <Cards className='cards'>
                    {word_data && word_data.map((l, index) => {
                        return (
                            <Card key={index}>
                                <Word><Key>단어</Key><Value>{l.word}</Value></Word>
                                <Desc><Key>설명</Key><Value>{l.desc}</Value></Desc>
                                <Exam><Key>예시</Key><Value style={{color: '#54b2ff'}}>{l.exam}</Value></Exam>
                            </Card>
                        )
                    })}
                </Cards>
                    <Button onClick={() => {props.history.push('/add')}}><Icon className="fas fa-feather fa-3x"/></Button>
            </Container>
        </React.Fragment>
    );
}

const Header = styled.div`
    background-color: #440000;
    width: 100%;
    height: 50px;
    border-bottom: 3px dotted #efe8da;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    position: absolute;
    top: 0px;
`;

const Title = styled.h1`
    font-size: 30px;
    color: #f2efe8;
    height: 50px;
    line-height: 50px;
    margin: 0px 0px 0px 10px;
`;

const Container = styled.div`
    background-color: none;
`;

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: inherit;
    overflow-x: hidden;
`;

const Card = styled.div`
    padding-top: 5px;
    background-color: #f2efe8;
    margin: 10px 20px 10px 20px;
`;

const Word = styled.div`
    margin: 5px;
    margin-left: 10px;
`;

const Desc = styled.div`
    margin: 5px;
    margin-left: 10px;
`;

const Exam = styled.div`
    margin: 5px;
    margin-left: 10px;
`;

const Key = styled.span`
    font-size: small;
    background-color: rgba(255, 165, 0, 0.5);
    border: 1.5px solid white;
    color: white;
    display: block;
    width: 30px;
    height: 20px;
    line-height: 20px;
    text-align: center;
`;

const Value = styled.p`
    color: #544a39;
    padding-left: 3px;
`;

const Button = styled.button`
    width: 75px;
    height: 75px;
    border-radius: 38px;
    border: 3px solid #c6b3b3;
    background-color: #725252;
    cursor: pointer;
    position: absolute;
    z-index: 1000;
    left: 300px;
    bottom: 20px;
    box-shadow: 2px 2px 5px gray;
    outline: none;
    &:focus {
        border: 3px double #a08888;
`;

const Icon = styled.svg`
    color: rgb(255, 165, 0);
`;

export default withRouter(Main);
