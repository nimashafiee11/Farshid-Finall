'use client'
import React from 'react'


    function addresCall() {

   const openTell = ()=>{
	window.open("https://t.me/" , '_blank')
   }
   const openWhatsApp = ()=>{
	window.open("https://wa.me/+491629087721" , '_blank')
   }
  
   const openInsta = ()=>{
	window.open("https://www.instagram.com/" , '_blank')
   }

  return (
    <React.Fragment>
       {/* <!-- address and call details --> */}
	<div className="overflow-hidden py-6">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 col-xl-4" data-aos-delay="0" data-aos="fade-left" data-aos-duration="3000">
					<div className="d-flex mt-4 mb-3 p-3 p-lg-4 align-items-center bg-body-tertiary shadow rounded-4">
						<div className="p-4 text-white bg-primary rounded-circle">
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
							</svg>
						</div>

						<div className="ps-3">
							<h3 className="text-body-emphasis tracking-tight leading-7 text-xl fw-semibold">
							Besuchen Sie uns jederzeit
							</h3>
							<div className="text-body leading-6 text-sm ">
							Mainzer Landstraße 314 
                            60326 Frankfurt  am Main 
							</div>
						</div>
					</div>
				</div>
                 
				<div className="col-12 col-md-6 col-xl-4" data-aos-delay="100" data-aos="fade-left" data-aos-duration="3000">
					<div className="d-flex mt-4 mb-3 p-3 p-lg-4 align-items-center bg-body-tertiary shadow rounded-4">
						<div className="p-4 text-white bg-primary rounded-circle">
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
							</svg>
						</div>
                           
						<div className="ps-3">
							<h3 className="text-body-emphasis tracking-tight leading-7 text-xl fw-semibold">
							Senden Sie eine E-Mail
							</h3>
							<div className="text-body leading-6 text-sm ">
							Kashkoolifarshid@yahoo.com
								<br/>
								feroservice8@gmail.com
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-xl-4" data-aos-delay="0" data-aos="fade-left" data-aos-duration="3000">
					<div className="d-flex mt-4 mb-3 p-3 p-lg-4 align-items-center bg-body-tertiary shadow rounded-4">
						<div  onClick={openTell} className="p-4 text-white bg-primary rounded-circle ">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" fill="currentColor"          className="bi  bi-telegram" viewBox="0 0 16 16">
                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                        </svg>
						</div>

						<div className="ps-3">
							<h3 className="text-body-emphasis tracking-tight leading-7 text-xl fw-semibold">
							Telegram
							</h3>
							<div className="text-body leading-6 text-sm ">
                              click on icon to open
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-xl-4" data-aos-delay="0" data-aos="fade-left" data-aos-duration="3000">
					<div className="d-flex mt-4 mb-3 p-3 p-lg-4 align-items-center bg-body-tertiary shadow rounded-4">
						<div onClick={openWhatsApp} className="p-4 text-white bg-primary rounded-circle ">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                         <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                         </svg>
						</div>

						<div className="ps-3">
							<h3 className="text-body-emphasis tracking-tight leading-7 text-xl fw-semibold">
							WhatsApp
							</h3>
							<div className="text-body leading-6 text-sm ">
							click on icon to open 
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 col-xl-4" data-aos-delay="0" data-aos="fade-left" data-aos-duration="3000">
					<div className="d-flex mt-4 mb-3 p-3 p-lg-4 align-items-center bg-body-tertiary shadow rounded-4">
						<div onClick={openInsta}  className="p-4 text-white bg-primary rounded-circle">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
						</div>

						<div className="ps-3">
							<h3 className="text-body-emphasis tracking-tight leading-7 text-xl fw-semibold">
							instagram
							</h3>
							<div className="text-body leading-6 text-sm ">
							click on icon to open 
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-6 col-xl-4" data-aos-delay="200" data-aos="fade-left" data-aos-duration="3000">
					<div className="d-flex mt-4 mb-3 p-3 p-lg-4 align-items-center bg-body-tertiary shadow rounded-4">
						<div className="p-4 text-white bg-primary rounded-circle">
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
								<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
							</svg>
						</div> 

						<div className="ps-3">
							<h3 className="text-body-emphasis tracking-tight leading-7 text-xl fw-semibold">
								Call Center
							</h3>
							<div className="text-body leading-6 text-sm ">
							    +491629087721
								<br/>
								+01629087721 
							</div>
						</div>
						<div>
							
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
    </React.Fragment>
  )
}

export default addresCall;