import React from 'react';
import styled from 'styled-components';
import '../app.css';
import { useHistory } from 'react-router';

function Popup(props) {
    const { onClose } = props;
    const history = useHistory();

    return (
        <Container>
            <Text>저장 완료!</Text>
            <Button onClick={() => {onClose(false); history.push('/')}}>확인</Button>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
`;

const Text = styled.p`
    height: 40vh;
    line-height: 70vh;
    color: #f2efe8;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 3px 3px 3px #2b271d;
`;

const Button = styled.button`
    height: 30px;
    width: 60px;
    border: transparent;
    border-radius: 5px;
    outline: none;
    &:hover {
        background-color: #ad8039;
        color: #b2aea4;
    }
    background-color: #d1a051;
    color: #f2efe8;
    box-shadow: 3px 3px 3px #2b271d;
`;

export default Popup;