import React from 'react'


function whyUs() {
  return (
    <React.Fragment>
       {/* <!-- Why us --> */}
	<div className="overflow-hidden py-7 py-sm-8 py-xl-9">
		<div className="container">
			<div className="row gy-5 align-items-center justify-content-between">
				<div className="col-12 col-xl-5 order-first order-xl-last">
					<div className="mx-auto max-w-2xl">
						<h2 className="m-0 text-primary-emphasis text-base leading-7 fw-semibold">
						warum wir?
						</h2>
						<p className="m-0 mt-2 text-body-emphasis text-3xl tracking-tight fw-bold">
						Erfahrene Mitarbeiter Wir verfügen über geprüftes, geschultes und zuverlässiges Personal.
						</p>
						<p className="m-0 mt-4 text-body-secondary text-lg leading-8">
						Nachfolgend können Sie einige unserer Leistungen sehen
						</p>
					</div>
				</div>
                     
				<div className="col-12 col-xl-6">
					<div className="mx-auto max-w-2xl">
                        <div className="ratio ratio-4x3" data-aos-delay="200" data-aos="fade" data-aos-duration="3000">
							<img src="/images/photo3.png" alt="photoPic" className='object-fit-cover rounded-3' />
                        </div>
					</div>
				</div>
			</div>		
		</div>
	</div>

    </React.Fragment>
  )
}

export default whyUs;