import React from 'react'
// import photo2 from '../../img/clean/photo1.png'
// import photo3 from '../../../public/images/photo8.webp'
// import Image from 'next/image'
function bigimage() {
  return (
    <React.Fragment>
      {/* <!-- big centered image --> */}
	<div className="overflow-hidden py-7 py-sm-8 py-xl-9 d-none d-xl-block">
		<div className="container">
			<div className="ratio ratio-16x9">
				<img src='images/photo8.webp' alt='bigPic' className='object-fit-cover rounded-3' />
		    </div>
		</div>
		
	</div>
    </React.Fragment>
  )
}

export default bigimage