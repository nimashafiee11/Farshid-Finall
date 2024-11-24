import React from 'react'

function lndScapImg() {
  return (
   <React.Fragment>
    {/* <!-- 2 landscap images --> */}
 	<div className="overflow-hidden pt-6 pt-sm-7 pt-xl-8 pb-7 pb-sm-8 pb-xl-9">
		<div className="container">
			<div className="row gx-lg-4 row-cols-1 row-cols-lg-2">
				<div className="col">
                    <div className="ratio ratio-1x1" data-aos-delay="0" data-aos="fade" data-aos-duration="1000">
                    <img src="/images/photo2.png" alt='photoo' className='object-fit-cover rounded-3' loading='lazy'/>
                    </div>
				</div>

				<div className="col d-none d-lg-block">
                    <div className="ratio ratio-1x1" data-aos-delay="100" data-aos="fade" data-aos-duration="1000">
                        <img src='/images/photo4.png' alt='photoo' className='object-fit-cover rounded-3' loading='lazy' />
                    </div>
				</div>
			</div>
		</div>
	</div>


   </React.Fragment>
  )
}

export default lndScapImg