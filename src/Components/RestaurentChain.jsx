import React from 'react'
import './RestaurentChain.css'

function RestaurentChain() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='w-75'>
                <h4 className='fw-bolder'>Top restaurant chains in Brahmavara</h4>
                <div style={{gap:"50px",overflowY:"scroll"}} className='d-flex  align-items-center'>
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k2why61tsxk9sh0sl68d)`
                        }} className='Hotel-Card-img '>
                            <div className='Hotel-color'><h4 className='fw-bolder' >10% OFF UPTO ₹40</h4></div>
                        </div>
                        <h5 className='mt-3'>Biryani</h5>
                        <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4.4
                        <p style={{fontWeight:"300"}}>South indian <br />Brahmavara</p>
                    </div>

                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jys7zsopl1sjy2wwxadd)`
                        }} className='Hotel-Card-img '>
                            <div className='Hotel-color'><h4 className='fw-bolder' >Chicken Kabab</h4></div>
                        </div>
                        <h5 className='mt-3'>Ahana Restaurent</h5>
                        <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4.4
                        <p style={{fontWeight:"300"}}> Karavali Special <br />Brahmavara</p>
                    </div>

                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56b7222d3239a954d09b42c05347debf)`
                        }} className='Hotel-Card-img '>
                            <div className='Hotel-color'><h4 className='fw-bolder' >10% OFF UPTO ₹40</h4></div>
                        </div>
                        <h5 className='mt-3'>Kundapura Special</h5>
                        <i style={{color:"#20963a"}} className="fa-solid fa-star"></i>4.1
                        <p style={{fontWeight:"300"}}> Arabian Style <br />Brahmavara</p>
                    </div>
                    </div>
                </div>
                <hr style={{width:"100%",marginTop:"-50px"}} />
            </div>
        </div>
    )
}

export default RestaurentChain