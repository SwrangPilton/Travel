import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import stockData from '../../../data/Tours'
import TourModal from './TourModal'
import axios from "axios";

export default function TourHome() {
    const [data, setData] = useState({})
    const [modalImg, setModalImg] = useState(null)
    const [modalShow, setModalShow] = useState(false)

    const { id } = useParams()
    useEffect(() => {
        stockData.filter(data => data.id === id).map(data => setData(data))
    }, [id])

    //! RAZOR PAY
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post("http://localhost:3000/payment/orders", {});

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_0Nl1kZ9by41ZjJ", //? Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:3000/payment/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    //! RAZOR PAY

    return (
        <div className="container my-4 py-3 shadow">
            <div className="row">
                <div key={id} className="col-lg-10 mx-auto popularPlaceHome">
                    {data && (<div>
                        <h1 className="text-uppercase">{data.title} | <span style={{ fontSize: '1.2rem', display: 'inline-block', color: 'white', backgroundColor: 'red', padding: '0.1rem' }}>tours</span></h1>
                        <img className="w-100 my-3" src={data.img1} alt="holiday pic" />
                            <h3>⚓ {data.location1}</h3>
                        <div className="p-3">
                            <h3>Package Price : ₹ {data.price}</h3>
                            <h3>Rating : {data.rating}</h3>

                            <h5 className="">{data.content}</h5>
                            <button className="btn my-2 bg-danger text-white" onClick={displayRazorpay}>Book Now</button>
                            <h2 className="text-uppercase">Gallery</h2>

                        </div>

                        <div className="d-flex flex-row flex-wrap mt-3">
                            <div className="col-lg-6 mb-3" style={{ height: '350px' }}>
                                <img className="w-100 h-100" onClick={() => {
                                    setModalShow(true)
                                    setModalImg(data.img2)
                                }} src={data.img2} alt="img" />
                            </div>
                            <div className="col-lg-6 mb-3" style={{ height: '350px' }}>
                                <img className="w-100 h-100" onClick={() => {
                                    setModalShow(true)
                                    setModalImg(data.img3)
                                }} src={data.img3} alt="img" />
                            </div>
                            <div className="col-lg-6 mb-3" style={{ height: '350px' }}>
                                <img className="w-100 h-100" onClick={() => {
                                    setModalShow(true)
                                    setModalImg(data.img4)
                                }} src={data.img4} alt="img" />
                            </div>
                            <div className="col-lg-6 mb-3" style={{ height: '350px' }}>
                                <img className="w-100 h-100" onClick={() => {
                                    setModalShow(true)
                                    setModalImg(data.img5)
                                }} src={data.img5} alt="img" />
                            </div>
                            {modalShow && <TourModal show={modalShow} ModalImg={modalImg}
                                onHide={() => setModalShow(false)} />}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}
