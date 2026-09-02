import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticles from './pages/WriteArticles'
import BLogTitles from './pages/BLogTitles'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import RemoveObject from './pages/RemoveObject'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast' //website par small notification/pop-up messages dikhane ke liye hota hai. like-> generated successfully etc
function App() {


    // const {getToken} = useAuth()
    // useEffect(()=>{
    //   getToken().then((token)=>console.log(token));
    // },[])

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/ai" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="write-articles" element={<WriteArticles />} />
              <Route path="blog-titles" element={<BLogTitles />} />

              <Route path="generate-images" element={<GenerateImages />} />
              <Route path="remove-background" element={<RemoveBackground />} />
              <Route path="review-resume" element={<ReviewResume />} />
              <Route path="community" element={<Community />} />
              <Route path="remove-object" element={<RemoveObject />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
