import React from 'react'

function bigImage() {
  return (
   <React.Fragment>
      {/* <!-- big centered image --> */}
	<div className="overflow-hidden py-7 py-sm-8 py-xl-9 d-none d-xl-block">
		<div className="container">
			<div className="ratio ratio-16x9">
                <img src='/images/photo1.png' alt='bigPic' className='object-fit-cover rounded-3' />
  		    </div>
		</div>
	</div>
   </React.Fragment>
  )
}

export default bigImage