  import React, { Component, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App (){
  let [language,setlanguage]=useState("hi")
  let[search , setSearch]= useState("")
  let changeLanguage = (data) => {
    setlanguage(data)
  }
  let changeSearch = (data)=>{
    setSearch(data)
  }
  
    return (
      <BrowserRouter>
      <Navbar changeLanguage={changeLanguage} changeSearch = {changeSearch}/>
      <Routes>
        <Route path='All' element={<Home language={language} q={search ? search : "All"}/>} />
        <Route path='/Politics' element={<Home language={language} q={search ? search : "Politics"}/>} />
        <Route path='/Crime' element={<Home language={language} q={search ? search : "Crime"}/>} />
        <Route path='/Education' element={<Home language={language} q={search ? search : "Education"}/>} />
        <Route path='/World' element={<Home language={language} q={search ? search : "World"}/>} />
        <Route path='/india' element={<Home language={language} q={search ? search : "India"}/>} />
        <Route path='/Sports' element={<Home language={language} q={search ? search : "Sports"}/>} />
        <Route path='/Cricket' element={<Home language={language} q={search ? search : "Cricket"}/>} />
        <Route path='/Science' element={<Home language={language} q={search ? search : "Science"}/>} />
        <Route path='/Technology' element={<Home language={language} q={search ? search : "Technology"}/>} />
        <Route path='/Jokes' element={<Home language={language} q={search ? search : "Jokes"}/>} />
        <Route path='/Entertainment' element={<Home language={language} q={search ? search : "Entertainment"}/>} />
        <Route path='/t20' element={<Home language={language} q={search ? search : "t20"}/>} />
        <Route path='/Stock' element={<Home language={language} q={search ? search : "Stock"}/>} />
        
  </Routes>
      <Footer/>
        
      </BrowserRouter>
      
    )
  }

