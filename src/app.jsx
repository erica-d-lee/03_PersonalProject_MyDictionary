import React from 'react';
import './app.css';
import Add from './components/add';
import Main from './components/main';
import { BrowserRouter } from 'react-router-dom';
import { Route, withRouter } from 'react-router';
import styled from 'styled-components';

const App = (props) => {

  return (
    <Total className='App'>
      <Container>
        <BrowserRouter>
            <Route exact path='/' render={() => <Main history={props.history}/>}/>
            <Route path='/add' render={() => (<Add history={props.history}/>)}/>
        </BrowserRouter>
      </Container>
    </Total>
  );
};


const Total = styled.div`
  background-color: #efe8da;
  min-width: 400px;
  width: 20vw;
  min-height: 800px;
  height: 80vh;
  border-radius: 10px;
  margin: 5px auto;
  padding-top: 60px;
  box-shadow: 3px 3px 10px darkgray;
  position: relative;
`;

const Container = styled.div`
  height: 90%;
  width: 100%;
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow-y: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default withRouter(App);
