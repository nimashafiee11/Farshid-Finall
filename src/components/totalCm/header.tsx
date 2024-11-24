 'use client'
import React from 'react'
// import Services  from '../../app/ServicesPage/page'
import Link from 'next/link'
import '../../css/photoo.css'
import { useEffect } from 'react'
function Header() {
 
	 useEffect(()=>{
        require('bootstrap/dist/js/bootstrap')
	 },[])

  return (
     <React.Fragment>
        {/* <!-- header top --> */}
	<header className="navigation position-fixed z-3 w-100 bg-body-tertiary shadow-lg border-bottom border-light border-opacity-10 rounded-bottom-3 rounded-bottom-sm-4">
	    <nav className="navbar navbar-expand-xl" aria-label="Offcanvas navbar large">
	        <div className="container py-1">
	            <a href="#" className="navbar-brand">
	             <img src='/images/photoLogo.jpg' alt='feroservice' className='position-absolute h-75  top-0 mt-2 rounded object-fit-cover' />
	            </a>

	            <div className="dropdown ms-3 order-last">
	                <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
	                    <symbol id="check2" viewBox="0 0 16 16">
	                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
	                    </symbol>
	                    <symbol id="circle-half" viewBox="0 0 16 16">
	                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
	                    </symbol>
	                    <symbol id="moon-stars-fill" viewBox="0 0 16 16">
	                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
	                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
	                    </symbol>
	                    <symbol id="sun-fill" viewBox="0 0 16 16">
	                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
	                    </symbol>
	                </svg>

	                <button className="btn btn-info text-white btn-sm rounded  d-flex align-items-center"
	                    id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown"
	                    aria-label="Toggle theme (auto)">
	                    <svg fill="currentColor" className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
	                    <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
	                </button>

	                <ul className="p-1 dropdown-menu dropdown-menu-end  end-0 rounded-3 shadow bg-body-tertiary"
	                    aria-labelledby="bd-theme-text">

	                    <li>
	                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
	                            className="mt-n1 d-inline-block  position-absolute top-0 end-0 translate-middle" viewBox="0 0 16 16">
	                            <path className="carret-dropdown-path" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
	                        </svg>
	                    </li>

	                    <li>
	                        <button type="button" className="dropdown-item d-flex align-items-center rounded-1" data-bs-theme-value="light" aria-pressed="false">
	                            <svg fill="currentColor" className="bi me-2 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
	                            Light
	                            <svg fill="currentColor" className="bi ms-auto d-none active-check" width="1em" height="1em"><use href="#check2"></use></svg>
	                        </button>
	                    </li>

	                    <li>
	                        <button type="button" className="my-1 dropdown-item d-flex align-items-center rounded-1" data-bs-theme-value="dark" aria-pressed="false">
	                            <svg fill="currentColor" className="bi me-2 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
	                            Dark
	                            <svg fill="currentColor" className="bi ms-auto d-none active-check" width="1em" height="1em"><use href="#check2"></use></svg>
	                        </button>
	                    </li>

	                    <li>
	                        <button type="button" className="dropdown-item d-flex align-items-center rounded-1 active" data-bs-theme-value="auto" aria-pressed="true">
	                            <svg fill="currentColor" className="bi me-2 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
	                            Auto
	                            <svg fill="currentColor" className="bi ms-auto d-none active-check" width="1em" height="1em"><use href="#check2"></use></svg>
	                        </button>
	                    </li>
	                </ul>
	            </div>

	            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
	                <span className="navbar-toggler-icon"></span>
	            </button>

	            <div className="offcanvas offcanvas-end border-0  rounded-start-0 rounded-start-sm-4" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
	                <div className="offcanvas-header">
	                    <h5 className="offcanvas-title m-0" id="offcanvasNavbar2Label">
	                        <a className="navbar-brand" href="javascript:;">
	                            <img src='/images/photoLogo.jpg' id='logoo' alt='LogoPic' className='' />
								<span>FroService</span>
	                        </a>
	                    </h5>
	                    <button type="button" className="btn-close text-body-emphasis" data-bs-dismiss="offcanvas" aria-label="Close"></button>
	                </div>

	                <div className="offcanvas-body  ">
	                    <ul className="navbar-nav align-items-xl-center flex-grow-1 column-gap-4 row-gap-4 row-gap-xl-2">
	                        <li className="nav-item ms-xl-auto">
	                          <Link href='/' className='px-3  text-body-emphasis bg-body-secondary-hover nav-link rounded-3 text-base leading-6 fw-semibold' > Startseite</Link>
	                        </li>

	                        <li className="nav-item">
							<Link href='/ServicesPage' className='px-3  text-body-emphasis bg-body-secondary-hover nav-link rounded-3 text-base leading-6 fw-semibold' >Dienstleistungen</Link>
	                        </li>

	                        <li className="nav-item">
							<Link href='/AboutUs' className='px-3  text-body-emphasis bg-body-secondary-hover nav-link rounded-3 text-base leading-6 fw-semibold' >Über uns</Link>
	                        </li>

							<li className="nav-item ">
							<Link href='/CallUs' className='px-3  text-body-emphasis bg-body-secondary-hover nav-link rounded-3 text-base leading-6 fw-semibold' >Kontakt</Link>
	                        </li>

	                        <li className="nav-item ms-xl-auto">
	                            <a href="#" className="px-3 text-body-emphasis bg-body-secondary-hover border nav-link rounded-3 text-base leading-6 fw-semibold text-center">
	                                Blog
	                            </a>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </nav>
	</header>

     </React.Fragment>
  )
}

export default Header