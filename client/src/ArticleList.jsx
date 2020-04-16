import React from 'react'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles, setSelectedArticle }) => {

  const setSelected = (name) => {
    return () => {
      setSelectedArticle(name)
    }
  }
  
  return (
    <section className="article-container">
      <ul className="article-list">
        {
          articles.map(art => {
            return <ArticleItem key={art.id} article={art} setSelectedArticle={setSelected} />
          })
        }
      </ul>
    </section>
  )
}

export default ArticleList