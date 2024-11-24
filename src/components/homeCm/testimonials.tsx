import React from 'react'

function testimonials() {
  return (
    <React.Fragment>
          {/* <!-- Testimonials --> */}
    <div className="overflow-hidden py-7 py-sm-8 py-xl-9 bg-body-secondary">
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide pb-5">
                <div className="carousel-indicators mb-0">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="mx-auto max-w-4xl text-center">
                         
                            <figure className="m-0 mt-5">
                                <blockquote className="text-center fw-semibold text-body-emphasis text-2xl leading-9">
                                    <p className="m-0">
                                    Nach der Arbeit ist jeder froh, heimzukommen und noch größer ist die Freude am nächsten Tag, wenn der Arbeitsplatz bereits schön sauber ist. Wir reinigen nicht nur die Büroböden, sondern auch den Arbeitsplatz, die Arbeitsflächen, die Aktenschränke, die Heizkörper, den Flur samt Vitrinen, die Büroküche und stark beanspruchte Arbeitsflächen. Wir leeren auch Papierkörbe und entsorgen den entstandenen Abfall gewissenhaft.
                                    </p>
                                </blockquote>

                                <figcaption className="m-0 mt-5">
                     
                                    <div className="mt-3 d-flex align-items-center justify-content-center text-base">
                                        <div className="fw-semibold text-body-emphasis">Farshid Kashkoli</div>
                                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="mx-3 text-body-emphasis" fill="currentColor">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div className="text-body-secondary">Firmeninhaber</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="mx-auto max-w-4xl text-center">
                            
                            <figure className="m-0 mt-5">
                                <blockquote className="text-center fw-semibold text-body-emphasis text-2xl leading-9">
                                    <p className="m-0">
                                        “ Wir bieten moderne Reinigungslösungen für alle kleinen und großen Unternehmen, für Organisationen oder Heime uvm. ”
                                    </p>
                                </blockquote>

                                <figcaption className="m-0 mt-5">
                                    
                                    <div className="mt-3 d-flex align-items-center justify-content-center text-base">
                                        <div className="fw-semibold text-body-emphasis">Farshid Kashkoli</div>
                                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="mx-3 text-body-emphasis" fill="currentColor">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div className="text-body-secondary">Firmeninhaber</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="mx-auto max-w-4xl text-center">
                         
                            <figure className="m-0 mt-5">
                                <blockquote className="text-center fw-semibold text-body-emphasis text-2xl leading-9">
                                    <p className="m-0">                              
                                       Wir sind 24/7 erreichbar und bieten für jede Immobilie einen persönlichen Ansprechpartner. Flexibilität ist ein wichtiger Bestandteil im täglichen Alltag, deshalb passen wir uns Ihren individuellen Bedürfnissen optimal an.
                                    </p>
                                </blockquote>

                                <figcaption className="m-0 mt-5">

                                    <div className="mt-3 d-flex align-items-center justify-content-center text-base">
                                        <div className="fw-semibold text-body-emphasis">Farshid Kashkoli</div>
                                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="mx-3 text-body-emphasis">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div className="text-body-secondary">Firmeninhaber</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev d-none d-xl-inline" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon rtl-flip" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next d-none d-xl-inline" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon rtl-flip" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default testimonials