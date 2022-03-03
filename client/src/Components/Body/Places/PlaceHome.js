import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import stockData from './Data'

export default function TourHome() {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        stockData.filter(data => data.id === id).map(data => setData(data))
    }, [id])

    return (
        <div className="container my-4 py-3 shadow">
            <div className="row">
                <div key={id} className="col-lg-10 mx-auto popularPlaceHome">
                    {data && (<div>
                        <h1 className="text-uppercase">{data.title} | <span 
                        style={{fontSize:'1.2rem', display:'inline-block', 
                        color:'white', backgroundColor:'red', padding:'0.1rem'}}
                        >places</span> </h1>
                        <img className="w-100 my-3" src={data.img1} alt="holiday pic" />
                        <h6 className="">{data.content}</h6>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
