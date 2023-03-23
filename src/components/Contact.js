import React from 'react'

export default function Contact() {
  return (
    <>

      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className=" text-warning fw-bold lead">NEED HELP</h1>
        <br />
        <h1 className="display-4 fw-bold">Contact Us</h1>
        <br />
        <div className="col-lg-6 mx-auto">
        </div>

      </div>


      <div className="container  ">
        <main className="form-signin w-100 m-auto">
          <div className="row aline-center">
            <div className="col w-100 m-auto  ">
              <form>
                <h1 className="h3 mb-3 fw-normal">STAY UPDATED WITH DEALS</h1>

                <div className="form-floating">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Get notification
                  </label>
                </div>
                <div className="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className=" my-3" >
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>

                <button className="btn my-3 btn-lg btn-warning" type="submit">Submit</button>

              </form>
            </div>
            <div className="col w-100 m-auto px-5">
              <h5 className="display-5 text-warning fw-bold ">CONTACT</h5>
              <i class="fa-solid fa-envelope fa-2x mx-3"></i>
              <h5 className='d-inline'>SUPPORT@GMAIL.COM</h5>
              <br />
              <i class="fa-solid fa-phone fa-2x mx-3 mt-4"></i>
              <h5 className='d-inline'>0000088888</h5>
              <br />
              <div className="my-3">
                <h5 className="display-5 text-warning fw-bold ">FOLLOW US</h5>

                <div className='my-3'> <i class="fa-brands fa-facebook fa-2x px-2"></i>
                  <i class="fa-brands fa-square-instagram fa-2x px-2"></i>
                  <i class="fa-brands fa-twitter fa-2x px-2"></i>
                  <i class="fa-brands fa-square-snapchat fa-2x px-2"></i>
                  <i class="fa-brands fa-youtube fa-2x px-2"></i>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>




    </>
  )
}
