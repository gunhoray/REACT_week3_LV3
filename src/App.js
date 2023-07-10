import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Pages';
function App() {
// react router를 쓴 이유는 NavigationBar와 Footer의 버튼 중 하나인 메인으로 돌아가는 기능을 구현하기 위해서 입니다.
// react router 와 react scroll를 혼합하여 구성한 원페이지 입니다. 
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </Router>
     </>
  );
}

export default App;