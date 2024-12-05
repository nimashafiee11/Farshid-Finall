'use client'
import React from 'react'
import Link from 'next/link';

function footer() {

 const handleSubmit = ()=>{
	window.open('https://www.instagram.com/nima._.shafiee', '_blank');
 }
  


  return (
    <React.Fragment>
             {/* <--footer--> */}
   
	<footer className="overflow-hidden py-6 py-sm-7 py-xl-8 bg-body-tertiary ">
	    <div className="container">
	        <div className="row gy-5">
	            <div className="col-12 col-xl-6">
	                <div className="pb-3 max-w-lg position-relative">
	                    <form method="post" target="_blank" noValidate className="mc-embedded-subscribe-form">

	                        <h2 className="text-body-emphasis leading-6 text-4xl lh-sm tracking-tight fw-bold">
							Abonnieren Sie unseren Newsletter.
	                        </h2>
	                        <p className="m-0 mt-3 text-body-secondary text-lg leading-8"> 
                             Erleben Sie die einfache Codebereitstellung mit nur einem Klick. Vereinfachen Sie Ihre Entwicklungsaufgaben und steigern Sie die Produktivität.
	                        </p>

	                        <div className="mt-4 mb-2 d-flex flex-column flex-sm-row w-100 gap-2 js-form-inputs">
	                            <label htmlFor="emailSubscribe1" className="visually-hidden">Email address</label>
	                            <input type="email" name="EMAIL" id="emailSubscribe1" value="" className="form-control leading-6 text-sm max-w-xl" placeholder="Enter your email"/>
	                            <button type="submit" name="subscribe" className="btn btn-primary text-white fw-semibold text-sm">Subscribe</button>
	                        </div>

	                        {/* <!-- This div is related to Mailchimp integration and handled by a function in our scripts.js file, so no need to worry about it. --> */}
	                        <div>
	                            <input type="text" className="js-validate-robot form-control" name="b_a4752870f583bb49a02427b3c_143fa46c21"  value=""/>
	                        </div>

	                        {/* <!-- response --> */}
	                        <div className="js-subscribe-response"></div>

	                    </form>
	                </div>
	            </div>

	            <div className="col-12 col-xl-6">
	                <div className="row row-cols-1 row-cols-sm-2 gx-3 gy-5">
	                    <div className="d-flex flex-column align-items-start">
						<div className="p-4 text-white bg-primary rounded-circle  ">
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
							</svg>
						    </div>
	                        <div className="m-0 mt-3 text-body-emphasis fw-semibold">
							    unsere Adresse
	                        </div>
	                        <div className="m-0 mt-2 text-body-secondary leading-7">
						      	Besuchen Sie uns jederzeit
                              Mainzer Landstraße 314 60326 Frankfurt
                                 am Main
	                        </div>
	                    </div>

	                    <div className="d-flex flex-column align-items-start">
						<div className="p-4 text-white bg-primary rounded-circle">
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
								<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
							</svg>
						</div>
	                        <div className="m-0 mt-3 text-body-emphasis fw-semibold">
							Call Center
	                        </div>
	                        <div className="m-0 mt-2 text-body-secondary leading-7">
							+491629087721
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>

	    

	    <div className="container ">
	    	<hr className="my-6 text-dark opacity-10 "/>

	        <div className="d-flex flex-column flex-xl-row gap-5 justify-content-between align-items-xl-center ">
	            <div className="order-first order-xl-last">
	                <ul className="nav row gy-4 gx-sm-4 row-cols-2 row-cols-sm-auto">
	                    <li className="nav-item">
							<Link href='/' className="p-0 text-dark nav-link leading-6 text-sm" >Startseite</Link>
	                    </li>
	                    <li className="nav-item">
							<Link href="/Services"  className="p-0 text-dark nav-link leading-6 text-sm"  >Dienstleistungen</Link>
	                    </li>
	                    <li className="nav-item">
							<Link href="/AboutUs" className="p-0 text-dark nav-link leading-6 text-sm">Über uns</Link>
	                    </li>
	                    <li className="nav-item">
							<Link href="/CallUs" className="p-0 text-body-secondary nav-link leading-6 text-sm">Kontakt</Link>
	                    </li>
	                </ul>
	            </div>

	            <div className="bi bi-house-check-fill icon">
                <button className='btn' onClick={handleSubmit}  > web designer <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-building float-right " viewBox="0 0 16 16">
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
</svg></button>
              
	            </div>

	            <div className="order-last order-xl-first  ">
	                <p className="mb-0 text-dark leading-6 text-xl  ">
	                   FeroService 
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill  " viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>
	                </p>
	            </div>
	        </div>
	    </div>  
	</footer>

    </React.Fragment>
  )
}

export default footer