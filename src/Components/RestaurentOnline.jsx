import React from 'react'
import './RestaurentOnline.css'

function RestaurentOnline() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='w-75'>
                <h4 className='fw-bold'>Restaurants with online food delivery in Brahmavara</h4>
                <div style={{ gap: "1" }} className='buttonsoffiltering'>
                    <button>Fast Delivery</button>
                    <button>Pure Veg</button>
                    <button>Offers</button>
                    <button>Rs.300 - Rs.600</button>
                </div>

                <div id='Card-section'>
                    <div className='d-flex justify-content-between mt-4'>
                    <div className='Online-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0b3356a88b6fc5966c452c4c9b1b5e4a)`
                        }} className='Online-Card-img '>
                            <div className='Online-color'><h4 className='fw-bolder' >40% OFF UPTO ₹80</h4></div>
                        </div>
                        <h5 className='mt-3'>Kudla Special</h5>
                        <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4
                        <p style={{fontWeight:"300"}}>Biriyani, North Indian<br />Brahmavara</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                    <div className='Online-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xxi1rb25fxm3le88weuo)`
                        }} className='Online-Card-img '>
                            <div className='Online-color'><h4 className='fw-bolder' >20% OFF UPTO ₹50</h4></div>
                        </div>
                        <h5 className='mt-3'>Kundapura Ghee Special</h5>
                        <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>3.9
                        <p style={{fontWeight:"300"}}>Kundapura<br />Brahmavara</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <div className='Online-card'>
                            <div style={{
                                backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k2why61tsxk9sh0sl68d)`
                            }} className='Online-Card-img'>
                                <div className='Online-color'><h4 className='fw-bolder' >10% OFF UPTO ₹40</h4></div>
                            </div>
                            <h5 className='mt-3'>Biryani</h5>
                            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.4
                            <p style={{ fontWeight: "300" }}>Hotel Ahana Special <br />Brahmavara</p>
                        </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default RestaurentOnline