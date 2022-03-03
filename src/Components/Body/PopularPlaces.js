import React from 'react'
import { stockData2 } from './Data2'
import PopularPlace from './PopularPlace'
export default function PopularPlaces() {
    return (
        <>
            <section className="popular">
                <h1 className="d-inline-block">Popular places</h1>
                <a href="/popularplaces" className="readmore mt-3 view-all">VIEW ALL</a>
                <div className="container-fluid">
                    <div className="row">
                        {stockData2.map((data, idx) => {
                            const { title1, img1, content1, img2, img3 } = data
                            return (
                                <PopularPlace
                                    key={idx}
                                    title1={title1}
                                    img1={img1}
                                    content1={content1}
                                    img2={img2}
                                    img3={img3}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
