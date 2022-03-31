import React, { Component } from 'react'
import Navbar from './components/navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import News from './views/News'
import Article from './components/Articles';
  export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>this is the main app</h1>
   
        

        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/news' element={<News />} />
         <Route path='/Article' element={<Article/>}/>
        </Routes>

      </div>
    )
  }
}
  