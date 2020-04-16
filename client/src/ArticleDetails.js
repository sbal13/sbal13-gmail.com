import React, { useState } from 'react'

const ArticleDetails = ({ article, setSelectedArticle, user }) => {
  const [commentInput, setCommentInput] = useState("")

  const postComment = (text) => {
    fetch('http://localhost:8080/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        text: text,
        articleId: article.id,
        userId: user.id
      })
    })
    .then(res => res.json())
    .then(resp => {
      console.log(resp)
      // update the webpage with the comment
    })
  }

  const updateCommentInput = (e) => {
    setCommentInput(e.target.value)
  }



  return(
    <div className="article-item">
      <h4>{article.title}</h4>
      <p>{article.text}</p>

      <p onClick={() => setSelectedArticle(null)}>Go back</p>

      <form className="comment-form" onSubmit={(e) => {
        e.preventDefault()
        postComment(commentInput)
      }}> 
        <input placeholder="Comment on this article..." value={commentInput} onChange={updateCommentInput} />
      </form>
    </div>
  )
}

export default ArticleDetails