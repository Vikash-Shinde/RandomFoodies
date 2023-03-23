import React from 'react'

export default function Locations() {
  return (
  <>
  <div id="Findus"className="container py-4">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-warning rounded-3">
              <h2>HOURS</h2>
              <p>DINNER: Monday - Sunday 5-10:30 pm</p>
              <br />
              <p>LUNCH: Saturday & Sunday 11 am-3 pm</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-white border  rounded-3">
              <h2 className='text-warning'>Find us</h2>
              <i className="fas fa-location-dot fa-3x"></i>
              <pre>Beverly Hills, Opp Ring Road
                California, 669969</pre>
            </div>
          </div>
        </div>
          </div>
<div className="container  ">
  <div className="row aline-center mt-5">
    <div className="col-6 w-50 m-auto  ">
          <form>
    <h1 className="h3 mb-3 fw-normal">STAY UPDATED WITH DEALS</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
      <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Get notification
      </label>
    </div>
    <button className="btn mx-5 px-5 btn-lg btn-warning" type="submit">Submit</button>
   
  </form>
  </div>
  </div>
  </div>
  
  </>
  )
}
