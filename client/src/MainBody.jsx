import React, { useState } from 'react'
import CategoryList from './CategoryList'
import ArticleList from './ArticleList'
import ArticleDetails from './ArticleDetails'

const MainBody = ({ user, categories, setUpdatingUser}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [selectedArticle, setSelectedArticle] = useState(null)

  //const allArticles = categories?.map(c => c.articles).flatten() || []

  const updateSelectedCategory = (selectedCategoryId) => {
    setSelectedCategoryId(selectedCategoryId)
    setSelectedArticle(null)
  }

  return (
    <div className="main-body">
      <div className="navbar">
        <span onClick={() => setUpdatingUser(true)}>{user?.username}</span>
      </div>


  
      <CategoryList categories={categories} setSelectedCategoryId={updateSelectedCategory} />
      { selectedArticle ? 
        <ArticleDetails article={selectedArticle} setSelectedArticle={setSelectedArticle} user={user} />
        :
        <ArticleList articles={categories.find((c) => c.id === selectedCategoryId)?.articles || []} setSelectedArticle={setSelectedArticle} />
      }
    </div>
  )
}

export default MainBody