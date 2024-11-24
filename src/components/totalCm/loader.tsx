import React from 'react'

function loader() {
  return (
   <React.Fragment>
     {/* <!-- loader-wrapper --> */}
    <div className="loader-wrapper">
        <div className="spinner-border text-primary p-5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div> 
   </React.Fragment>
  )
}

export default loader