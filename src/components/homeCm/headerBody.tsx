import React from 'react'
import '../../css/photoo.css'

function headerBody() {
  return (
    <React.Fragment>
        {/* <!-- header body --> */}
	<div className="overflow-hidden position-relative">
	  <img src='images/photo7.png' alt='bodyPic' className='position-absolute z-n1 top-0 h-100 w-100 object-fit-cover bg-info' id='photoo2'  />
{/* 
	   <div class="overlay position-absolute z-n1 top-0 h-100 w-100 bg-dark"
	        style="opacity: 0.85; mix-blend-mode: multiply; filter: contrast(1.15) brightness(0.85);">
	    </div> */}

	    <div className="container">
	        <div className="min-vh-100 row align-items-center">
	        	<div className="col-12 col-xl-8">
		            <div className="pt-9 pt-md-10 pt-xl-11 pb-7 pb-md-8 pb-xl-9 max-w-2xl mx-auto mx-xl-0">
		                <div className="mt-4 pt-2">
		                    <div className="text-center text-xl-start">
		                        <h1 className="m-0 text-white tracking-tight text-6xl fw-bold" data-aos-delay="0" data-aos="fade" data-aos-duration="3000">
                                  Erleben Sie ultimative Sauberkeit
		                        </h1>
		                        <p className="m-0 mt-4 text-white text-lg leading-8" data-aos-delay="100" data-aos="fade" data-aos-duration="3000">
								Mehr Zeit für das Wesentliche – wir übernehmen die Reinigung!
		                        </p>
		                        <div className="mt-4 pt-3 d-flex align-items-center justify-content-center justify-content-xl-start column-gap-3">
		                            <a href="../CallUs" className="btn  btn-lg btn-info text-white text-sm icon-link icon-link-hover bg-secondary-hover text-sm leading-6  fw-semibold" data-aos-delay="200" data-aos="fade" data-aos-duration="3000">
									Kontaktieren Sie uns
		                            </a>
		                            <a href="../AboutUs" className="btn btn-info btn-lg text-white icon-link icon-link-hover bg-secondary-hover text-sm leading-6 fw-semibold" data-aos-delay="300" data-aos="fade" data-aos-duration="3000">
									     mehr wissen  
		                                <span className="bi align-self-start left-to-right" aria-hidden="true">→</span>
		                                <span className="bi align-self-start right-to-left" aria-hidden="true">←</span>
		                            </a>
		                        </div>
		                    </div>
		                </div>
		            </div>
	            </div>
	        </div>
	    </div>
	</div> 
    </React.Fragment>
  )
}

export default headerBody