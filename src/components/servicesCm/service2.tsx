import React from 'react'

function service2() {
  return (
       <React.Fragment>
             {/* <!-- Service 2 --> */}
	<div className="overflow-hidden py-7 py-sm-8 py-xl-9 bg-body-tertiary">
		<div className="container">
			<div className="row gy-5 align-items-center justify-content-between">
				<div className="col-12 col-xl-5 order-first order-xl-last">
					<div className="mx-auto max-w-2xl">
						<h2 className="m-0 text-primary-emphasis text-base leading-7 fw-semibold">
						Dienst 2
						</h2>
						<p className="m-0 mt-2 text-body-emphasis text-4xl tracking-tight fw-bold">
						    Büroreinigung
						</p>
						<p className="m-0 mt-4 text-body text-lg leading-8">
						Erfahrene Leute können Ihnen mehr helfen
                Wenn der Arbeitsplatz sauber ist, lässt es sich schöner und entspannter Arbeiten.
                 Wir reinigen nicht nur die Büroböden, sondern auch den Arbeitsplatz, die Arbeitsflächen, die Aktenschränke, die Heizkörper, den Flur samt Vitrinen, die Büroküche und stark beanspruchte Arbeitsflächen – wir leeren auch Papierkörbe und entsorgen den entstandenen Abfall gewissenhaft.
                 Gemäß unserer ökologischen Überzeugung haben wir uns schon früh für umweltschonende Reinigungsmethoden entschieden. Wir    verwenden sanfte Reinigungsmittel und -geräte im Rahmen der Gebäudereinigung.
						</p>
					</div>
				</div>

				<div className="col-12 col-xl-6">
					<div className="mx-auto max-w-2xl">
                        <div className="ratio ratio-4x3" data-aos-delay="0" data-aos="fade" data-aos-duration="3000">
							<img src="/images/photo7.png" alt="servicespic2" loading='lazy'  className='object-fit-cover rounded-3' />
                        </div>
					</div>
				</div>
			</div>		
		</div>
	</div>
       </React.Fragment>
  )
}

export default service2