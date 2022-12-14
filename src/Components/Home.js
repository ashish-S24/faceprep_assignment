import React from 'react'
import { LoadingPosts } from '../utility/LoadingPosts';
import { Posts } from './Posts';
import Header from './Header';

function Home() {
  return (
    <div className='container'>
    <Header/>
    <div className="p-4 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <LoadingPosts />
         {<Posts />}
    </div>
    </div>
  )
}

export default Home