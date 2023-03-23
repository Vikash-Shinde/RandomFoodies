import React from 'react'
import { Link } from 'react-router-dom'
// import './Homestyle.css'

export default function Main() {



  return (
    <>
      {/* main view page */}
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Random Foodies</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Random Foodies is a restaurant, bar and coffee
            roastery located on London</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-warning btn-lg px-4 me-sm-3">Dinner</button>
            <button type="button" className="btn btn-outline-warning btn-lg px-4">Lunch</button>
            <button type="button" className="btn btn-outline-warning btn-lg px-4">Wine</button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
          <div className="container px-5">
            <img src="https://media.istockphoto.com/id/1125845166/photo/luxury-hotel-restaurant-table-and-chairs-setting.jpg?s=612x612&w=0&k=20&c=dOE7TMx6n6HmvAOHe8LB680wX8upaxgEZoWZES1szco=" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="800" height="600" loading="lazy" />
          </div>
        </div>
      </div>

      {/* knowing things */}
      <div id="WhyUs" className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h4 className="display-5 fw-bold  mb-3 text-warning">Why us</h4>
            <h1 className="display-5 fw-bold lh-1 mb-3">Serving you great time</h1>
            <p className="lead">Our mission is to give our customers a place to celebrate life’s special moments by offering the best food, service, and ambiance. The smile on our customers face has always been our first priority and we work hard to achieve that.
              Established in 1982, We aim to keep going forever and bring happiness to your life</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-warning btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>


      {/* knwo more about us */}
      <div id="explore" className="container">
        <div className="row mb-2">

          <h2 className="text-warning text-center">Explore</h2>
          <h1 className="text-dark text-center">Menu Features</h1>

        </div>
        <div className="row">
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: '540px;' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWludCUyMGxlYWZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-warning">Always Fresh</h5>
                    <p className="card-text">We focus on serving fresh food always. Fresh food is always best for your precious body and we keep that in mind and that's why we like to serve everything fresh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: '540px;' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://images.unsplash.com/photo-1614436164055-703ea06fc9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx0YXN0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-warning">Amazing Taste</h5>
                    <p className="card-text">Serving tasty food has always been our first priority and also to make sure the taste is constant everytime you consume, you will see no difference in taste</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: '540px;' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://images.unsplash.com/photo-1598259065881-8a65b97d50fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGFzdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-warning">Premium Ingredients</h5>
                    <p className="card-text">We know great ingredients are must to take the taste and health on next level so that's why we focus on using oragnic ingredients so you don't have to worry</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link  to="/menu">
            <button type="button" className="btn btn-warning btn-lg px-5 me-sm-3" >Menu</button>
            </Link>
           
          </div>
      </div>


      {/* client info... */}
      <div id="Ours"className="container">
        <div className="row mb-2 mt-5">
          <h2 className="text-warning text-center">Ours</h2>
          <h1 className="text-dark text-center">Clients</h1>
        </div>

        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <div style={{ textAlign: 'center', padding: "2rem" }}>
                  <i className="fas fa-quote-right  fa-4x"></i>
                </div>
                <p className="card-text">The food was absolutely wonderful, from preparation to presentation, very pleasing. We especially enjoyed the special bar drinks, the cucumber/cilantro infused vodka martini and the K&P was great.</p>
                <h5 className="card-title text-center text-warning pt-5">SELENA D</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">LAWYER</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <div style={{ textAlign: 'center', padding: "2rem" }}>
                  <i className="fas fa-quote-right  fa-4x" ></i>
                </div>
                <p className="card-text">Excellent eating experience.. from walking in the door and being greeted by employee, seated and drink order taken, was maybe 5 minutes. Meal was served hot and excellent taste. Server was very friendly.</p>
                <h5 className="card-title text-center text-warning pt-5">CYNTHIA</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">DENTIST</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <div style={{ textAlign: 'center', padding: "2rem" }}>
                  <i className="fas fa-quote-right  fa-4x"></i>
                </div>
                <p className="card-text">A very friendly welcoming place to spend time. All personnel were very well trained,helpful and all done with a smile. Everything was handled with efficiency and attention to every detail was given.</p>
                <h5 className="card-title text-center text-warning pt-5">RICHARD</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">ARCHITECT</h6>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* location us and timming */}
      {/* <div id="Findus"className="container py-4">
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
  <div className="row aline-center">
    <div className="col w-100 m-auto  ">
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
  </div> */}
    </>
  )
}
