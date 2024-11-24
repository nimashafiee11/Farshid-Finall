import React from 'react'

function FAQ() {
  return (
   <React.Fragment>
    {/* <!-- FAQs --> */}
	<div className="overflow-hidden py-7 py-sm-8 py-xl-9">
	    <div className="container">
	        <div className="row gy-5 g-sm-5">
	            <div className="col-12 col-lg-5">
	                <h2 className="m-0 text-body-emphasis tracking-tight leading-10 text-2xl fw-bold">
					Häufig gestellte Fragen
	                </h2>
	                <p className="m-0 mt-3 text-body-secondary leading-7 text-base">
					    Unser
	                    <a href="../CallUs" className="text-decoration-none fw-semibold">
						     Kundenbetreuung
	                    </a>
						   Das Team ist für Sie da, wenn Sie Fragen haben.
	                </p>
	            </div>

	            <div className="col-12 col-lg-7">
	                <dl className="m-0">
	                    <div>
	                        <dt className="text-body-emphasis leading-7 text-base fw-semibold">
							Welche Reinigungsmittel verwenden Sie für Ihre Dienstleistungen?
	                        </dt>
	                        <dd className="m-0 mt-2 text-body-secondary leading-7 text-base">
							Wir verwenden ausschließlich umweltfreundliche und milde Reinigungsmittel, die sowohl effektiv als auch schonend für Oberflächen und die Gesundheit sind.
	                        </dd>
	                    </div>

	                    <div className="mt-4 pt-3">
	                        <dt className="text-body-emphasis leading-7 text-base fw-semibold">
							Bieten Sie auch Reinigungsdienste außerhalb der regulären Arbeitszeiten an?
	                        </dt>
	                        <dd className="m-0 mt-2 text-body-secondary leading-7 text-base">
							Ja, wir sind flexibel und bieten unsere Dienstleistungen auch abends oder am Wochenende an, um den Bedürfnissen unserer Kunden gerecht zu werden.
	                        </dd>
	                    </div>

	                    <div className="mt-4 pt-3">
	                        <dt className="text-body-emphasis leading-7 text-base fw-semibold">
							Wie oft sollte eine professionelle Reinigung im Büro durchgeführt werden?
	                        </dt>
	                        <dd className="m-0 mt-2 text-body-secondary leading-7 text-base">
							Die Häufigkeit hängt von der Nutzung und Größe des Büros ab. Wir empfehlen jedoch mindestens eine wöchentliche Reinigung, um eine angenehme und saubere Arbeitsumgebung zu gewährleisten.
	                        </dd>
	                    </div>

	                    <div className="mt-4 pt-3">
	                        <dt className="text-body-emphasis leading-7 text-base fw-semibold">
							Was ist im Service der Haushaltsreinigung enthalten?
	                        </dt>
	                        <dd className="m-0 mt-2 text-body-secondary leading-7 text-base">
							Unsere Haushaltsreinigung umfasst alle grundlegenden Reinigungsarbeiten, wie Staubsaugen, Wischen, Staubwischen sowie die Reinigung von Küche und Bad. Auf Wunsch bieten wir auch zusätzliche Leistungen an.
	                        </dd>
	                    </div>
	                </dl>
	            </div>
	        </div>
	    </div>
	</div>

   </React.Fragment>
  )
}

export default FAQ