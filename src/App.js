import './App.css';
import Login from './components/login';
import Register from './components/register';
import Choose from './components/choose';
import Main from './components/main';
import Quotelist from './components/Quotelist';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import View from './components/view';
import Create from './components/create';
import Front from './components/front';

function App() 
{
  return (
    <div className="App">
      <BrowserRouter>
       
         <Routes>
          <Route exact path="/" element={<Front/>} />
           <Route exact path="/choose" element={<Choose/>} />
            <Route exact path="/Quotelist" element={<Quotelist/>}/>
            <Route exact path="/main/" element={<Main/>} ></Route>
            <Route exact path="/view" element={<View/>} ></Route>
            <Route exact path="/create/" element={<Create/>} ></Route>

          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
