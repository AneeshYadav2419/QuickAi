//import  {Layout}  from 'lucide-react'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import  Dashboard  from './pages/Dashboard'
import WriteArticle  from './pages/WriteArticle'
import  BlogTitles  from './pages/BlogTitles'
import GenerateImage  from './pages/GenerateImage'
import  RemoveBackground  from './pages/RemoveBackground'
import  RemoveObject  from './pages/RemoveObject'
import  ReviewResume  from './pages/ReviewResume'
import  Community  from './pages/Community'
import Home from './pages/Home'
import Layout from './pages/Layout'

 const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/ai' element={<Layout />}>
        <Route index element = {<Dashboard />}/>
       <Route path='write-article' element={<WriteArticle />}/>
       <Route path = 'blog-titles' element ={<BlogTitles />}/>
         <Route path = 'generate_images' element ={<GenerateImage />}/>
           <Route path = 'remove-background' element ={<RemoveBackground />}/>
           <Route path='remove-object' element={<RemoveObject />}/>
             <Route path = 'review-resume' element ={<ReviewResume />}/>
               <Route path = 'community' element ={<Community />}/>
        </Route>

      </Routes>
    </div>
  )
}
export default App
