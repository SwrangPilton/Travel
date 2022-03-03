import React from 'react'

export default function Tours() {
    return (
        <>
            <section className="tours">
                <h1 className="d-inline-block">Popular tours</h1>
                <a href="#!">South</a>
                <a href="#!">Central</a>
                <a href="#!">West</a>
                <a href="#!">North</a>
                <a href="#!" className="readmore view-all mt-3">VIEW ALL</a>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 d-flex">
                            <img className="w-100 h-100" src="https://images.unsplash.com/photo-1543043204-3f4e66dc5c2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="" />
                            <div className="w-100 ">
                                <h2>Rock Mountain</h2>
                                <h4>PRICE : 250$</h4>
                                <p>5 ⭐⭐⭐⭐</p>
                                <button className="btn btn-outline-light">VIEW TOUR</button>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex">
                            <img className="w-100 h-100" src="https://images.unsplash.com/photo-1580889272861-dc2dbea5468d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80" alt="" />
                            <div className="w-100 ">
                                <h2>Rock Mountain</h2>
                                <h4>PRICE : 250$</h4>
                                <p>5 ⭐⭐⭐⭐</p>
                                <button className="btn btn-outline-light">VIEW TOUR</button>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex">
                            <img className="w-100 h-100" src="https://images.unsplash.com/photo-1515259387710-51e175f9ec6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80" alt="" />
                            <div className="w-100 ">
                                <h2>Rock Mountain</h2>
                                <h4>PRICE : 250$</h4>
                                <p>5 ⭐⭐⭐⭐</p>
                                <button className="btn btn-outline-light">VIEW TOUR</button>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 d-flex">
                            <img className="w-100 h-100" src="https://images.unsplash.com/photo-1580889272861-dc2dbea5468d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80" alt="" />
                            <div>
                                <h2>Rock Mountain</h2>
                                <h4>PRICE : 250$</h4>
                            </div>
                            <div className="div2">
                                <p>5 ⭐⭐⭐⭐</p>
                                <button className="btn btn-outline-light">VIEW TOUR</button>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex">
                            <img className="w-100 h-100" src="https://images.unsplash.com/photo-1515259387710-51e175f9ec6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80" alt="" />
                            <div>
                                <h2>Green Village</h2>
                                <h4>PRICE : 50$</h4>
                            </div>
                            <div className="div2">
                                <p>4.5 ⭐⭐⭐⭐</p>
                                <button className="btn btn-outline-light">VIEW TOUR</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
