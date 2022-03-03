import React, { useState, useEffect } from 'react'
import { firestore } from '../../Components/Firebase/config/firebaseConfig'

export default function Review() {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchReviews = () => {
        setLoading(true)
        firestore
            .collection('reviews')
            .get()
            .then(observer => {
                const items = []
                observer.forEach(doc => {
                    items.push(doc.data())
                })
                setReviews(items)
            })
        setLoading(false)
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    return (
        <div className="container my-3 text-center ">
            <h1>REVIEWS</h1>
            {loading && <h1>LOADING....</h1>}
            <div className="row ">
                {reviews === [] && <h1>There is no review in Database</h1>}
                {reviews && reviews.map((data, index) => {
                    return <div key={index} className="col-lg-4" style={{ height: '340px' }}>
                        <h3>{data.Name}</h3>
                        <p>{data.Review}</p>
                    </div>
                })}

            </div>
        </div>
    )
}
