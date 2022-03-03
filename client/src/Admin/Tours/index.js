/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// import ProgressBar from '../Places/ProgressBar'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
// import useStorage from '../../customHooks/useStorage'
import { timestamp } from '../../Components/Firebase/config/firebaseConfig';

export default function Tour() {
    const [tour, setTour] = useState('')
    const [price, setPrice] = useState('')
    const [highlights, setHighlights] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [location, setLocation] = useState('')
    const [upload, setupload] = useState(false)
    // const { progress, url } = useStorage(null, null, null)
    // const [coverImageURL, setCoverImageURL] = useState(null)
    // const [images, setImages] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.firestore().collection('Tours')
            .add({
                Name: tour,
                Price: price,
                Highlights: highlights,
                Description: description,
                Duration: duration,
                Location: location,
                CreatedAt: timestamp,
                CoverImage: null
            })
        setupload(true)
    }

    return (
        <div className="container w-75 mx-auto px-0">
            <h1 className="text-center">Tours</h1>
            <form className="text-left ">
                <div className="mb-3 ">
                    <h5 className="mb-2">Tour Name :</h5>
                    <input type="text" value={tour} className="form-control"
                        onChange={(e) => setTour(e.target.value)} />
                </div>
                <div className="mb-3">
                    <h5 className="mb-2">Price :</h5>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3 ">
                    <h5 className="mb-2">Highlights :</h5>
                    <input type="text" value={highlights} onChange={e => setHighlights(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <h5 className="mb-2">Description :</h5>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3 ">
                    <h5 className="mb-2">Duration : </h5>
                    <input type="text" value={duration} onChange={e => setDuration(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3 ">
                    <h5 className="mb-2">Location :</h5>
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="form-control" />
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Next</button>
                <a href="/Addpic" disabled={true} className="btn btn-info "> Add Pictures</a>
            </form>
        </div>
    )
}
