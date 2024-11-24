import React from 'react'


function service1() {
  return (
    <React.Fragment>
        {/* <!-- Service 1 --> */}
	<div className="overflow-hidden py-7 py-sm-8 py-xl-9">
		<div className="container">
			<div className="row gy-5 align-items-center justify-content-between">
				<div className="col-12 col-xl-5">
					<div className="mx-auto max-w-2xl">
						<h2 className="m-0 text-primary-emphasis text-base leading-7 fw-semibold">
						   Dienst 1
						</h2>
						<p className="m-0 mt-2 text-body-emphasis text-4xl tracking-tight fw-bold">
						  Grundreinigung
						</p>
						<p className="m-0 mt-4 text-body-secondary text-lg leading-8 line-clamp-4 ">
						Erfahrene Leute können Ihnen mehr helfen
Wir beginnen von dem klassischen Teppich- und Bodenreinigung, Polsterreinigung, Reinigung von Heizkörpern, Steckdosen, Schränke, offene und zugängliche Flächen, komplette Türen, Zargen, Fußleisten und vielem mehr.

Um Ihnen ein möglich kostengünstiges Angebot erstellen zu können, der den Mehrwert für Ihr Objekt und somit Werterhalt steigert, ist eine gründliche Begutachtung sowie persönliche Beratung unbedingt erforderlich.

Kontaktieren Sie uns für einen kostenlosen und unverbindlichen, zeitnahen Beratungstermin vor Ort.
						</p>
					</div>
				</div>

				<div className="col-12 col-xl-6">
					<div className="mx-auto max-w-2xl">
                        <div className="ratio ratio-4x3" data-aos-delay="0" data-aos="fade" data-aos-duration="3000">
							<img src="/images/photo6.png" alt="servicespic1"  className='object-fit-cover rounded-3' loading='lazy'/>
                        </div>
					</div>
				</div>
			</div>		
		</div>
	</div>

    </React.Fragment>
  )
}

export default service1