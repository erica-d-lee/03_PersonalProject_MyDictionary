import React, { useState } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addWordFB } from '../redux/modules/word';
import Popup from './popup';

const Add = (props) => {

    const dispatch = useDispatch();
    const {} = props;
    const [popup, handlePopup] = useState(false);
    // useEffect(() => { dispatch(loadWordFB()); },[])
    
    const word_ref = React.useRef(null);
    const desc_ref = React.useRef(null);
    const exam_ref = React.useRef(null);
    const my_uuid = uuid();

    const addWord = () => {
        const word = {
            id: my_uuid,
            word: word_ref.current.value,
            desc: desc_ref.current.value,
            exam: exam_ref.current.value
        }
        dispatch(addWordFB(word));
    };

    return (
        <React.Fragment>
            <Header>
                <Title>Add to DICTIONARY</Title>
            </Header>
            <InputBox>
                <Key>단어</Key>
                <Input type='text' ref={word_ref} />
            </InputBox>
            <InputBox>
                <Key>설명</Key>
                <Input type='text' ref={desc_ref} />
            </InputBox>
            <InputBox>
                <Key>예시</Key>
                <Input type='text' ref={exam_ref} />
            </InputBox>
            <AddBtn onClick={() => {addWord(); handlePopup(true);}}>추가하기</AddBtn>{popup && <Popup onClose={handlePopup}/>}               
            <BackBtn className="goback" onClick={() => {props.history.goBack();}}><Arrow className="fas fa-reply fa-3x"/></BackBtn>
        </React.Fragment>
    );
};

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

const InputBox = styled.div`
    padding-top: 5px;
    background-color: #f2efe8;
    margin: 10px 20px 20px 20px;
    padding: 10px;
    padding-bottom: 15px;
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

const Input = styled.input`
    margin: 10px 10px 0 0;
    width: 95%;
    display: block;
    height: 30px;
    font-size: 16px;
    padding-left: 7px;
    color: gray;
    border: 3px double #efe8da;
    border-radius: 5px;
    outline: none;
    &:focus {
        border: 3px double rgba(255, 165, 0, 0.5);
    }
    caret-color: rgba(155,108, 0, 0.4);
`;

const AddBtn = styled.button`
    width: 360px;
    height: 40px;
    background-color: #725252;
    margin: 0px 20px 20px 20px;
    border: 2px solid #c6b3b3;
    border-radius: 5px;
    box-shadow: 2px 2px 5px gray;
    color: #f2efe8;
    font-weight: bold;
    letter-spacing: 1.2px;
    cursor: pointer;
    outline: none;
    &:focus {
        border: 3px double #a08888;
    }
`;

const BackBtn = styled.button`
    width: 75px;
    height: 75px;
    border-radius: 38px;
    border: 3px solid #c6b3b3;
    background-color: #725252;
    cursor: pointer;
    position: absolute;
    left: 300px;
    bottom: 20px;
    box-shadow: 2px 2px 5px gray;
    outline: none;
    &:focus {
        border: 3px double #a08888;
`;

const Arrow = styled.svg`
    color: rgb(255, 165, 0);
`;

export default withRouter(Add);
