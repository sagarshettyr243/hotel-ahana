import React from 'react'
import './BestRes.css'

function BestRest() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <div style={{width:"85%"}}>
            <h4 className='fw-bold'>Best Places to Eat Across Cities</h4>
            <div className='buttons-grp d-flex justify-content-between'>
                <button>Best Restaurent in Brahmavara</button>
                <button>Best Restaurent in Udupi</button>
                <button>Best Restaurent in Mangalore</button>
                <button>Best Restaurent in Kundapura</button>
            </div>

            <h4 style={{marginTop:"80px"}} className='fw-bold'>Explore Every Restaurants Near Me</h4>
            <div className='buttons-grps d-flex justify-content-between mt-3'>
                <button>Explore Restaurants Near Me</button>
                <button>Explore Top Rated Restaurants Near Me</button>
            </div>
        </div>
    </div>
  )
}

export default BestRest