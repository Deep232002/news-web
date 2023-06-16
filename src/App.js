
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  state={
    progress:0
  }
 setprogress=(progress)=>{
  this.setState({progress:progress})
 }
  render() {
    return (
      <div>
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
       <Navbar/>
        <Router>
        <Routes>
          <Route exact path="/" element={<News setprogress={this.setprogress} key='general' pagesize={5} category='general' country={'in'}/>}/>
          <Route exact path="/sports" element={<News setprogress ={this.setprogress} key='general' pagesize={5} category='sports' country={'in'}/>}/>

          <Route exact path="/entertainment" element={<News setprogress ={this.setprogress} key='entertainment' pagesize={5} category='entertainment' country={'in'}/>}/>
          <Route exact path="/science" element={<News setprogress ={this.setprogress} key='science' pagesize={5} category='science' country={'in'}/>}/>
          <Route exact path="/health" element={<News setprogress ={this.setprogress} key='health' pagesize={5} category='health' country={'in'}/>}/>
          <Route exact path="/" element={<News setprogress ={this.setprogress} key='general' pagesize={5} category='general' country={'in'}/>}/>
          <Route exact path="/technology" element={<News setprogress ={this.setprogress} key='technology' pagesize={5} category='technology' country={'in'}/>}/>

         
        </Routes>
      
       </Router>
      </div>
    )
  }
}

