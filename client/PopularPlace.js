import React, { useState } from 'react'

export default function PopularPlace({ title1, img1, content1, img2, img3 }) {
    const [img, setImg] = useState()

    const handleClick = () => {
        setImg(img)
    }
    const handleClick2 = () => {
        setImg(img)
    }
    return (
        <>
            <div className="col-lg-5 col-md-6 col-sm-6
                marginBottom">
                <img className="p-img" src={img1} alt="Pic" />
            </div>
            <div className="marginBottom padding-y col-lg-3 col-md-6 col-sm-6 
                d-flex flex-column justify-content-between">
                <h3 className="text-uppercase">{title1}</h3>
                <p className="">{content1}</p>
                <a href="/" className="readmore pop-r">Read more</a>
            </div>

            <div className="marginBottom col-lg-2 display-none">
                <img className="w-100 h-100" onClick={handleClick} src={img2} alt="" />
            </div>
            <div className="marginBottom col-lg-2 display-none">
                <img className="w-100 h-100" onClick={handleClick2} src={img3} alt="" />
            </div>
        </>
    )
}
