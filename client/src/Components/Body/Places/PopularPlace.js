export default function PopularPlace({ title1, img1, content1, img2, img3 }) {
    return (
        <>
            <div className="col-lg-6 col-md-6 col-sm-6
                marginBottom">
                <img className="p-img" src={img1} alt="Pic" />
            </div>
            <div className="marginBottom padding-y col-lg-6 col-md-6 col-sm-6 
                d-flex flex-column justify-content-between">
                <h3 className="text-uppercase">{title1}</h3>
                <p className="">{content1}</p>
                <a href={`/popularplaces`} className="readmore pop-r">Read more</a>
            </div>
        </>
    )
}