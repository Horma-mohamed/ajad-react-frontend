import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page2 from './Pages/Page2';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Post from './Pages/Blog/Post';
import Home2 from './Pages/Home/Home2';
import Case from './Pages/Cases/Case';
import Header from './components/Header';
import Footer from './components/Footer';
import {motion} from 'framer-motion'
import ScrollToUp from './includes/Elements/ScrollToUP';
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.classList.add('w-screen overflow-x-hidden')
root.render(
  
 <>

      <BrowserRouter> 
      {/* <Header/> */}
      <ScrollToUp/>
  <Routes>
    
    <Route index  element={<Home/>} />
    <Route path='/home2' exact element={<Home2/>} />
    <Route path='/blog' exact element={<Blog/>} />
    <Route path='/about' exact element={<About/>} />
    <Route path='/gallery' exact element={<Gallery/>} />
    <Route path='/contact' exact element={<Contact/>} />
    <Route path='/blog/:id' exact element={<Post/>} />
    <Route path='/cases/:id' exact element={<Case/>} />

    <Route path='/page' exact element={<Page2/>} />
  {/* <Footer/> */}
  </Routes>
  </BrowserRouter>

 </>
 


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
