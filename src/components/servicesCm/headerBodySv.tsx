import React from 'react'
// import photo2 from '../img/clean/photo1.png'
// import photo3 from '../img/clean/photo5.png'
// import photo4 from '../img/clean/photo3.png'
// import Image from 'next/image'

function headerBodySv() {
  return (
    <React.Fragment>
        {/* <!-- header body --> */}
	<div className="overflow-hidden py-9 py-xl-10 position-relative bg-info">
	   	<img src="./assets/img/bg/bg1.jpg" className="position-absolute z-n1 top-0 h-100 w-100 object-fit-cover" alt="Meeting"/>

	   	<div className="position-absolute z-n1 top-0 h-100 w-100 bg-dark">
	    </div>

	    <div className="position-absolute z-0 top-0 h-100 w-100">
		    <div className="container h-100 d-flex align-items-center">
                <div className="max-w-2xl mx-auto mx-xl-0 text-center text-xl-start">
                    <h1 className="m-0 mt-7 text-white tracking-tight text-6xl fw-bold" data-aos-delay="0" data-aos="fade" data-aos-duration="3000">
                    Unsere Leistungen
                    </h1>
                    <p className="m-0 mt-4 text-white text-lg leading-8" data-aos-delay="100" data-aos="fade" data-aos-duration="3000">
                    Ihr Partner für umfassende Reinigungsdienste
                    </p>
                </div>
		    </div>
	    </div>
	</div>	
    </React.Fragment>
  )
}

export default headerBodySv