import React from 'react'
import { BrowserRouter as Router, useParams} from 'react-router-dom'
import AuthorPageComponent from '../components/AuthorPageComponent'

const Author = () => {
  let {authorId} = useParams()
  return (
    <>
    <div>Author </div>
    <AuthorPageComponent />
    </>
  )
}

export default Author