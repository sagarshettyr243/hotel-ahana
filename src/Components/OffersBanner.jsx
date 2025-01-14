import React from 'react'
import './OfferBanner.css'
import banner2 from'../Photos/Banner2.png'
import banner1 from'../Photos/Banner1.png'
import banner3 from'../Photos/Banner3.png'
import banner4 from'../Photos/Banner4.png'


function OffersBanner() {
    return (
        <div className=' d-flex justify-content-center align-items-center mt-5 flex-column'>
            <div className='w-75 '>
                <h4 className='fw-bolder'>Fish Fry:)</h4>
                <div id='banner-img' className='d-flex align-items-center ' style={{overflowY:"scroll",gap:"20px"}}>
                    <img width={'250px'} src={banner2} alt="Offer" />
                    <img width={'250px'} src={banner1} alt="Offer" />
                    <img width={'250px'} src={banner3} alt="Offer" />
                    <img width={'250px'} src={banner4} alt="Offer" />
                </div>
            </div>

            <div className='w-75 mt-5'>
                
                <h4 className='fw-bolder'>What's on your mind Today, Sagar Shetty?</h4>
                <div className='d-flex align-items-center' style={{overflowY:"scroll",gap:"19px"}}>
                    <img className='img-fluid' width={'140px'} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" alt="Biriyani" />
                    <img className='img-fluid' width={'140px'} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" alt="South Indian" />
                    <img className='img-fluid' width={'140px'} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" alt="Chinease" />
                    <img className='img-fluid' width={'140px'} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png" alt="North Indian" />
                    <img className='img-fluid' width={'140px'} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png" alt="Pure Veg" />
                    <img className='img-fluid' width={'140px'} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png" alt="Kebabs" />
                    
                </div>
                <hr />
            </div>
        </div>
    )
}

export default OffersBanner
