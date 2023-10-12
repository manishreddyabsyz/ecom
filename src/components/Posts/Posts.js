import React, { useEffect, useState } from 'react'
import "./Posts.css"
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
const Posts = () => {
  const[posts,setPosts]=useState([])
  const[loader,setLoader]=useState(true)

  
  async function fetchposts(){
    await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(json=>setPosts(json))
    if(setPosts){
      setLoader(false)
    }
    
  }
  useEffect(()=>{
    fetchposts()
    
    

  },[])

  return (
    <>
    <Header />
    <main className="posts-container">
   
    <div className="pg-header">
      <div className="container">
        <h1>POSTS</h1>
      </div>
    </div>
    <div className="container content">
      {loader ? 
      <div className='loader'>
        <h1>Loading...</h1>
        </div>
        :
        <div className='row'>
       {posts.map(item=>{
        return(
          <div className='col-6'>
            <div className='post-card'>
              <div className='card-body'>
                <h5>{item.title}</h5>
                <p>{item.body}</p>
                </div>
              </div>
            </div>
        )
       })}

        </div>
      
    }
      
    </div>

  </main>
  <Footer />
  </>
  )
}

export default Posts