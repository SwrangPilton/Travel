import React from 'react'

export default function History() {
    return (
        <>
            <section className="history">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 small-pd-0">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1439362204303-f36d565c4186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" />
                                {/* <img className="" src="https://images.unsplash.com/photo-1544015759-237f87d55ef3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" /> */}
                            </div>
                        </div>
                        <div className="col-lg-6 flexCenter">
                            <article>
                                <header>
                                    <h1>Wonderful History of BTR, NorthEast India</h1>
                                </header>
                                <p>
                                   The Bodoland Territorial Council was established in 2003 under the Sixth Schedule to the Indian Constitution, following the signing of a Memorandum of Settlement on February 10, 2003, between the Government of India, the Government of Assam, and the Bodo Liberation Tigers, to fulfill economic, educational, and linguistic aspirations, as well as the preservation of land-rights, socio-cultural, and ethnic identity of the Bodos; and to accelerate infrastructure development in the BTC area.
                                </p>
//                                 <p className="mb-5">
//                                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                                     Voluptatem sunt ab culpa explicabo repudiandae corporis consectetur
//                                     enim sit magni accusamus exercitationem qui ratione, incidunt veniam laborum quae asperiores eum maxime.
//                                 </p>
                                <a href="/read" className="readmore">Read More</a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
