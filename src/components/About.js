import React from 'react'

export default function About() {
    return (
        <>
            <div className="px-4 pt-1 my-2 text-center border-bottom">
                <h1 className="display-4 fw-bold">WE</h1>
                <br />
                <h1 className="display-4 fw-bold">SERVE</h1>
                <br />
                <h1 className="display-4 fw-bold">EXCELLENCE</h1>
                <div className="col-lg-6 mx-auto">
                </div>
                <div className="overflow-hidden" style={{ maxHeight: '45vh' }}>
                    <div className="container px-5">
                        <img src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="900" loading="lazy" />
                    </div>
                </div>
            </div>

            {/* knowing things */}
            <div id="WhyUs" className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Bootstrap Themes" width="400" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h4 className="display-5 fw-bold  mb-3 text-warning">About</h4>
                        <h1 className="display-5 fw-bold lh-1 mb-3">Random</h1>
                        <p className="lead">Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live.</p>
                        <br />
                        <p>
                            Based in Beaverton, Oregon, NIKE, Inc. includes the Nike, Converse, and Jordan brands. We are best in what we do and you all know that.</p>

                    </div>
                </div>
            </div>
            <div id="WhyUs" className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                    <div className="col-lg-6">
                        <h4 className="display-5  mb-3 text-warning">INNOVATION</h4>
                        <h3 className="display-5  lh-1 mb-3">WE ARE HERE TO CREATE THE FUTURE</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, velit porro. Porro iusto quos vel nobis quasi ipsum ea similique recusandae iure minus, nihil suscipit excepturi, perferendis animi eaque officiis.</p>
                        <br />

                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Bootstrap Themes" width="400" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
            <div id="WhyUs" className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Bootstrap Themes" width="400" height="500" loading="lazy" />
                    </div>

                    <div className="col-lg-6">
                        <h4 className="display-5  mb-3 text-warning">VALUE</h4>
                        <h3 className="display-5  lh-1 mb-3">WE PROVIDE VALUE</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, velit porro. Porro iusto quos vel nobis quasi ipsum ea similique recusandae iure minus, nihil suscipit excepturi, perferendis animi eaque officiis.</p>
                        <br />
                    </div>
                </div>
            </div>


            
  

        </>
    )
}
