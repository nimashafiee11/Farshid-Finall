import React from 'react'

function headerBodyCu() {
  return (
      <React.Fragment>
        {/* <!-- header body --> */}
	<div className="overflow-hidden py-9 py-xl-10 position-relative bg-info">
	   	<img src="https://static.vecteezy.com/vite/assets/photaso-masthead-375-BoK_p8LG.webp" className="position-absolute z-n1 top-0 h-100 w-100 object-fit-cover" alt="Meeting"/>
 

	    <div className="position-absolute z-0 top-0 h-100 w-100">
		    <div className="container h-100 d-flex align-items-center">
                <div className="max-w-2xl mx-auto mx-xl-0 text-center text-xl-start">
                    <h1 className="m-0 mt-7 text-white tracking-tight text-6xl fw-bold" data-aos-delay="0" data-aos="fade" data-aos-duration="3000">
                    Kontaktieren Sie uns
                    </h1>
                    <p className="m-0 mt-4 text-white text-lg leading-8" data-aos-delay="100" data-aos="fade" data-aos-duration="3000">
                    Ihr Zuhause verdient das Beste – Kontaktieren Sie uns für erstklassige Reinigungsservices!
                    </p>
                </div>
		    </div>
	    </div>
	</div>	

      </React.Fragment>
  )
}

export default headerBodyCu