import React from 'react'

export default function About() {
    return (
        <>
            <section className="about" id="aboutus">
                <div className="container-fluid ">
                    <h1>About us</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="https://images.unsplash.com/photo-1558671440-cf07862e7b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
                            {/* <img src="https://images.unsplash.com/photo-1570524028297-fbeadbc2f587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" /> */}
                        </div>
                        <div className="col-lg-8">
                            <article className="about-paddingbtm">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptatum velit ratione dolorum fugit debitis saepe, officia, omnis,
                                totam tenetur eaque assumenda unde temporibus minus consectetur
                                magnam tempore atque voluptas sunt.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptatum velit ratione dolorum fugit debitis saepe, officia, omnis,
                                totam tenetur eaque assumenda unde temporibus minus consectetur
                                magnam tempore atque voluptas sunt.</p>
                                <div className="d-flex">
                                    <div className="mr-5">
                                        <span className="number">15</span>
                                        <h3>Years of service</h3>
                                    </div>
                                    <div className="">
                                        <span className="number">5000+</span>
                                        <h3>Visitors every season</h3>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
