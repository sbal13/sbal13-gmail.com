import React from 'react'

const CategoryList = ({ categories, setSelectedCategoryId }) => {
  return (
    <section className="sidebar">
      <ul className="category-list">
        {
          categories.map(cat => {
            return (
              <span key={cat.id} onClick={() => {setSelectedCategoryId(cat.id)}} className="category-item" >{cat.name}</span>
            )
          })
        }
      </ul>
    </section>
  )
}

export default CategoryList