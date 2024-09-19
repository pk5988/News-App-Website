import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
  constructor(){
    super()
      this.state = {
        language : "hi",
        search:""
      }
    
  }
    changeLanguage = (data) => {
      this.setState({language: data})
    }
    changeSearch = (data) => {
      this.setState({search: data})
    }
  render() {
    return (
      <BrowserRouter>
      <Navbar changeLanguage={this.changeLanguage} changeSearch = {this.changeSearch}/>
      <Routes>
        <Route path='All' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "All"}/>} />
        <Route path='/Politics' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Politics"}/>} />
        <Route path='/Crime' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Crime"}/>} />
        <Route path='/Education' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Education"}/>} />
        <Route path='/World' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "World"}/>} />
        <Route path='/india' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "India"}/>} />
        <Route path='/Sports' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Sports"}/>} />
        <Route path='/Cricket' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Cricket"}/>} />
        <Route path='/Science' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Science"}/>} />
        <Route path='/Technology' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Technology"}/>} />
        <Route path='/Jokes' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Jokes"}/>} />
        <Route path='/Entertainment' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Entertainment"}/>} />
        <Route path='/t20' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "t20"}/>} />
        <Route path='/Stock' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Stock"}/>} />
        
  </Routes>
      <Footer/>
        
      </BrowserRouter>
      
    )
  }
}
