import React, { useState,useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsItem from './NewsItem'

export default function Home({language,q}){
  let [articles,setArticles] = useState([])
  let[totalResults,setTotalResults]=useState(0)
  let[page,setPage] = useState(1)
  let size = 18
  
  async function  getAPIData(){ 
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&pagesize=${size}&sortBy=publishedAt&language=${language}&apiKey=8e0fbcc4889c4a1cb3d08ab3c8879d21`)
    response = await response.json()
    if(response.articles){
    setArticles(response.articles.filter((x) => x.title !== "[Removed]"))
    setTotalResults(response.totalResults)
  }
  }
 let fetchData = async () =>{
   setPage(page+1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${page}&pagesize=${size}&sortBy=publishedAt&language=${language}&apiKey=8e0fbcc4889c4a1cb3d08ab3c8879d21`)
    response = await response.json()
   if(response.articles){
    setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
   }

  }

  useEffect(() => {
    getAPIData()
    
  }, [language,q] )
    return (
      <>
        <div className="container-fluid my-3">
<h5 className='background text-center p-2 text-capitalize'>{q} News Article</h5>
<InfiniteScroll
  className='test'
  dataLength={articles.length} //This is important field to render the next data
  next={fetchData}
  hasMore={articles.length < totalResults}
  loader={
    <div className='my-3 text-center'>
      <div className="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>
  }
 >

   <div className='row'>
    {
   articles.map((item,index)=>{
   return<NewsItem
        key={index}
        source = {item.source.name}
        title={item.title}
        description={item.description}
        url={item.url}
        pic={item.urlToImage}
        date={item.publishedAt}
        
        />
    })
  }
   </div>
   </InfiniteScroll>
        </div>
      </>
    )
}

