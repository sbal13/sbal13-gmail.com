import React from 'react'

const ArticleItem = ({ article, setSelectedArticle }) => {

  const truncatedText = article.text.split(".")[0] + "..."

  return(
    <div className="article-item" onClick={setSelectedArticle(article)}> 
      <h4>{article.title}</h4>
      <p>{truncatedText}</p>
    </div>
  )
}

export default ArticleItem