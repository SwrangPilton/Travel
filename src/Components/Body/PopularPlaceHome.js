import { stockData } from "./Data"
export default function PopularPlaceHome() {
    return (
        <>
            <div className="container my-5">
                <h1>Popular Places</h1>
                <div className="row">
                    {stockData.map(data => (
                        <div key={data.id} className="col-lg-4 popularPlaceHome">
                            <img className="popularplace-home-img"  src={data.img1} alt="holiday pic" />
                            <h2 className="text-uppercase">{data.title}</h2>
                            <p>{data.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
