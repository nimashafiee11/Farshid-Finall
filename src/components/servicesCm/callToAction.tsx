import React from 'react'
//import photo3 from '../img/clean/photo5.png'
// import photo4 from '../img/clean/photo3.png'
// import photo2 from '../../../public/images/photo6.png'
import '../../css/photoo.css'

function callToAction() {
  return (
   <React.Fragment>
    	{/* <!-- Call to action --> */}
	<div className="pb-9 pt-7">
		<div className="container">
			<div className="py-6 position-relative text-white rounded-3">   
                 <img src='/images/photo6.png' alt='meetingPic' 
				 id='photoo'
				  className='position-absolute z-n1 top-0 h-100 w-100 object-fit-cover rounded-3' />
				<div className="px-6">
					<div className="mx-auto max-w-2xl">
						<h2 className="m-0 tracking-tight text-4xl fw-bold text-center">
						Hier finden Sie Informationen über uns und unsere Leistungen. 
						</h2>
						<p className="m-0 mt-4 text-lg leading-8 text-center">
						Kontaktieren Sie uns für weitere Informationen
						</p>
						<div className="mt-4 pt-3 text-center">
							<a href="../CallUs" className="btn btn-lg btn-primary text-white text-sm fw-semibold">
							kontakt uns
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


   </React.Fragment>
  )
}

export default callToAction