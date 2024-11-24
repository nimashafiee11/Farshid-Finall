import React from 'react'

function bigImg() {
  return (
    <React.Fragment>
        {/* <!-- big centered image --> */}
	<div className="overflow-hidden py-6 py-sm-7 py-xl-8">
		<div className="container">
            <div className="ratio ratio-16x9">
                <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" className="object-fit-cover rounded-3" alt="presentation" loading="lazy"/>
            </div>
		</div>
	</div>
    </React.Fragment>
  )
}

export default bigImg