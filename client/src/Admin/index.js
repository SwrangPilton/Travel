import React from 'react'

export default function index() {
    return (
        <div className="container text-center">
            <h1>ADMIN HOME</h1>
            <div className="row">
                <div className="col-lg-4">
                    <a href="/reviews">
                        <h3>Reviews</h3>
                    </a>
                </div>
                <div className="col-lg-4">
                    <a href="/places">
                        <h3>Places</h3>
                    </a>
                </div>
                <div className="col-lg-4">
                    <a href="/tours">
                        <h3>Tours</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}
