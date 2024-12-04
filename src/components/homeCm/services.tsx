import React from 'react'
// import photo2 from '../../../public/images/photo2.png'
// import photo3 from '../../../public/images/photo5.png'
// import photo4 from '../../../public/images/photo3.png'
// import Image from 'next/image'
function services() {
  return (
    <React.Fragment>
        {/* <!-- services --> */}
	<div className="overflow-hidden py-7 py-sm-8 py-xl-9 bg-body-tertiary">
	    <div className="container">
	        <div>
	            <div className="mx-auto max-w-2xl text-center">
					<h2 className="m-0 text-primary-emphasis text-base leading-7 fw-semibold  ">
					Unsere Leistungen
					</h2>
	                <p className="m-0 mt-2 text-body-emphasis text-4xl tracking-tight fw-bold">
					  Beste Reinigungsdienste vom Profi
	                </p>
	                <p className="m-0 mt-4 text-body text-lg leading-8">   
                     Wir bieten zeitgemäße Reinigungslösungen für Unternehmen jeder Größe, für Organisationen, Privathaushalte und vieles mehr.
	                </p>
	            </div>
	        </div>
	        <div>
	            <div className="row row-cols-1 row-cols-xl-3 gy-5 gx-xl-4 mt-1 justify-content-center justify-content-xl-between">
	                <div className="col pt-5 pt-xl-4">
	                    <div className="max-w-xl mx-auto mx-xl-0" data-aos-delay="0" data-aos="fade" data-aos-duration="1000">
                        	<div className="">
                               
								<img src='/images/photo2.png' alt='photo' className='object-fit-cover rounded-3 img-fluid' />
                            </div>

                            <h3 className="m-0 mt-4 text-body-emphasis text-lg leading-6 fw-semibold">
							Büroreinigung
                            </h3>

                            {/* <!-- Remove line-clamp-2 if you need more lines or add line-clamp-3 --> */}
                            <p className="m-0 mt-3 text-body-secondary line-clamp-3 text-sm leading-6">
							Wir kümmern uns um eine gründliche Reinigung Ihrer Büroräume, damit Sie und Ihr Team sich auf die wesentlichen Aufgaben konzentrieren können.
                              
                            </p>
	                    </div>
	                </div>
      				
      				<div className="col pt-5 pt-xl-4">
	                    <div className="max-w-xl mx-auto mx-xl-0" >
                        	<div className="">
                               <img src='/images/photo5.png' alt='servicepic' className='object-fit-cover rounded-3 img-fluid' />
                            </div>

                            <h3 className="m-0 mt-4 text-body-emphasis text-lg leading-6 fw-semibold">
							Grundreinigung
                            </h3>

                            {/* <!-- Remove line-clamp-2 if you need more lines or add line-clamp-3 --> */}
                            <p className="m-0 mt-3 text-body-secondary line-clamp-2 text-sm leading-6">
							Unsere Grundreinigung sorgt dafür, dass auch schwer zugängliche und selten gereinigte Bereiche makellos sauber werden.
                            </p>
	                    </div>
	                </div>

	                <div className="col pt-5 pt-xl-4">
	                    <div className="max-w-xl mx-auto mx-xl-0" data-aos-delay="200" data-aos="fade" data-aos-duration="1000">
                        	<div className="">
						     <img src='/images/photo3.png' alt='servicepic2' className='object-fit-cover rounded-3 img-fluid' />
                            </div>

                            <h3 className="m-0 mt-4 text-body-emphasis text-lg leading-6 fw-semibold">
							Haushaltsreinigung
                            </h3>

                            {/* <!-- Remove line-clamp-2 if you need more lines or add line-clamp-3 --> */}
                            <p className="m-0 mt-3 text-body-secondary line-clamp-3 text-sm leading-6">
							Wir sorgen dafür, dass Ihr Zuhause stets sauber und ordentlich ist – von der Küche bis zum Bad, wir übernehmen alle Reinigungsaufgaben für Sie.
                            </p>
	                    </div>
	                </div>
	            </div>
	        </div>

	        <div className="text-center pt-7">
	            <a href="/Services" className="btn btn-lg btn-info text-white icon-link icon-link-hover text-sm leading-6 fw-semibold">
				mehr Dienstleistungen
                    <span className="bi align-self-start left-to-right" aria-hidden="false">→</span>
                </a>
	        </div>
	    </div>      
	</div>	
    </React.Fragment>
  )
}

export default services