import React from 'react'
// import photo4 from '../../../public/images/photo6.png'
function aboutUsHm() {
  return (
    <React.Fragment>
        	{/* <!-- About Us --> */}
	<div className="overflow-hidden py-7 py-sm-8 py-xl-9">
		<div className="container">
			<div className="row gy-5 align-items-center justify-content-between">
				<div className="col-12 col-xl-5 order-last">
					<div className="mx-auto max-w-2xl">
						<h2 className="m-0 text-primary-emphasis text-base leading-7 fw-semibold">
						  Lernen Sie uns kennen
						</h2>
						<p className="m-0 mt-2 text-body-emphasis text-4xl tracking-tight fw-bold">
						Ihre Zufriedenheit ist unsere höchste Priorität.
						</p>
						<p className="m-0 mt-4 text-body-secondary text-lg leading-8">
						In Übereinstimmung mit unseren ökologischen Werten haben wir uns bereits früh für umweltfreundliche Reinigungsmethoden entschieden. Dabei setzen wir ausschließlich milde Reinigungsmittel und schonende Geräte im Rahmen unserer Gebäudereinigungsdienste ein.
						</p>
						<div className="mt-4">
							<a href="/AboutUs" className=" btn btn-info text-light icon-link icon-link-hover text-decoration-none text-sm leading-6 fw-bold">
							     Über uns
			                    <span className="bi align-self-start left-to-right" aria-hidden="true">→</span>
			                    
			                </a>
						</div>
					</div>
				</div>

				<div className="col-12 col-xl-6">
					<div className="mx-auto max-w-2xl">
                        <div className="ratio ratio-4x3" data-aos-delay="0" data-aos="fade" data-aos-duration="3000">
                          <img src='/images/photo6.png' alt='picture' className='object-fit-cover rounded-3'  loading='lazy' />
                        </div>
					</div>
				</div>
			</div>

		</div>
        </div>

    </React.Fragment>
  )
}

export default aboutUsHm