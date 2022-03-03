import React, { useState, useEffect } from 'react'
import stockData2 from './Data'
import PopularPlace from './PopularPlace'
export default function PopularPlaces() {
    const [data, setData] = useState({})
    useEffect(() => {
        setData(stockData2[0])
    }, [])
    return (
        <>
            <section className="popular">
                <h1 className="d-inline-block">Popular Places</h1>
                <a href="/popularplaces" className="readmore mt-3 view-all">VIEW ALL</a>
                <div className="container-fluid">
                    <div className="row">
                        {data && (<>
                            <div className="col-lg-6 col-md-6 col-sm-6 marginBottom">
                                <img className="p-img" src={data.img1} alt="Pic" />
                            </div>
                            <div className="marginBottom padding-y col-lg-6 col-md-6 col-sm-6 
                            d-flex flex-column justify-content-between">
                                <h3 className="text-uppercase">{data.title}</h3>
                                <p className="">{data.content}</p>
                                <a href={`/popularplaces/1`} className="readmore pop-r">Read more</a>
                            </div>
                        </>)}

                        {/* {stockData2.map((data, idx) => {
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
                        })} */}
                    </div>
                </div>
            </section>
        </>
    )
}
