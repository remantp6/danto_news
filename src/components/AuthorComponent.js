import React from 'react'

const AuthorComponent = ({au_img, au_name, au_desc}) => {
  return (
    <>
      <div className="author_component_section">
            <div className='author_desc'>
                <img src={au_img} alt="author_img"/>
                <h5 className="mb-0">{au_name}</h5>
                <p className="mb-0">{au_desc}</p>
            </div>
      </div>
    </>
  )
}

export default AuthorComponent
