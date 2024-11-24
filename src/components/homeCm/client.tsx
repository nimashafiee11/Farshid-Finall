import React from 'react'

function client() {
  return (
    <React.Fragment>
        {/* <!-- Client --> */}
	<div className="overflow-hidden py-6 py-sm-7 py-xl-8 bg-body-tertiary">
		<div className="container">
			<div className="max-w-2xl">
				<h2 className="m-0 text-primary-emphasis text-base leading-7 fw-semibold">
					Our Clients
				</h2>
				<div className="m-0 mt-2 text-body-emphasis text-4xl tracking-tight fw-bold">
					We`&apos;`re fortunate to have incredible clients.
				</div>
			</div>

			<div className="mt-4">
				<div className="glide glideHighLinear">
					<div className="glide__track" data-glide-el="track">
						<ul className="glide__slides align-items-center">
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo1.png" className="img-fluid" alt="clients"/>
								</div>
							</li>
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo2.png" className="img-fluid" alt="clients"/>
								</div>
							</li>
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo3.png" className="img-fluid" alt="clients"/>
								</div>
							</li>
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo4.png" className="img-fluid" alt="clients"/>
								</div>
							</li>
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo5.png" className="img-fluid" alt="clients"/>
								</div>
							</li>
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo6.png" className="img-fluid" alt="clients"/>
								</div>
							</li>
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo7.png" className="img-fluid" alt="clients"/>
								</div>
							</li>
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo8.png" className="img-fluid" alt="clients"/>
								</div>
							</li>
							<li className="glide__slide">
								<div className="p-5">
									<img src="./assets/img/clients/logo9.png" className="img-fluid" alt="clients"/>
								</div>
							</li>		
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
    </React.Fragment>
  )
}

export default client