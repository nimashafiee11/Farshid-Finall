'use client'
import React from 'react'
function backTop() {

   const scrollToTop = ()=>{
      window.scrollTo({
        top : 0 , 
        behavior : 'smooth'
      })
   }

  return (
    <React.Fragment>
        {/* <!-- Back to top button --> */}
      <div className=''>
      <button
      onClick={scrollToTop}
      className="btn btn-info text-light rounded-circle  "
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      ↑ 
    </button>
      </div>
    </React.Fragment>
  )
}

export default backTop