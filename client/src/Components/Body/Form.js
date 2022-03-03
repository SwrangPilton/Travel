import React from 'react'

export default function Form() {
    return (
        <>
            <section className="forms mb-0">
                <div className="container-fluid mb-0">
                    <div className="row">
                        <div className="col-lg-6 left-form">
                            <h1>Discover Amazing places in BTR
                            with us</h1>
                        </div>
                        <div className="col-lg-6 formCol">
                            <form className="w-100">
                                <input type="text" name="example" list="exampleList" placeholder="Select tour"/>
                                    <datalist id="exampleList">
                                        <option value="LION ROCK" />
                                        <option value="BHAOKUNGRI HILL" />
                                        <option value="ZOMDUAR" />
                                    </datalist>
                                <input type="date" className="w-100" placeholder="Select a date" />
                                <input type="number" list="numberList" placeholder="Number of guests" />
                                <datalist id="numberList">
                                    <option value="1" />
                                    <option value="2" />
                                    <option value="4" />
                                </datalist>
                                <button className="btn btn-danger">BOOK TOUR</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
