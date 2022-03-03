import React from 'react'
//! HOME PAGE COMPONENT
import stockData from '../../../data/Tours'

export default function Tours() {
    return (
        <>
            <section className="tours">
                <h1 className="d-inline-block">Popular Tours</h1>
                <a href="#!">South</a>
                <a href="#!">Central</a>
                <a href="#!">West</a>
                <a href="#!">North</a>
                <a href="/populartours" className="readmore view-all mt-3">VIEW ALL</a>

                <div className="container-fluid">
                    <div className="row">
                        {stockData.map(data => {
                            return (
                                <div className="col-lg-4 d-flex" key={data.id}>
                                    <img className="w-100 h-100" src={`${data.img1}`} alt="" />
                                    <div className="w-100 ">
                                        <h2>{data.title}</h2>
                                        <h4>PRICE : ₹ {data.price}</h4>
                                        <p> ⭐⭐⭐⭐</p>
                                        <button onClick={() => {
                                            window.location.href = `/populartours/${data.id}`;
                                        }} className="btn btn-outline-light">VIEW TOUR</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
