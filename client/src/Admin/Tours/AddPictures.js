import React, { useState, useEffect } from 'react';
import { firestore, storage } from '../../Components/Firebase/config/firebaseConfig';

export default function AddPictures() {
    const [coverImage, setCoverImage] = useState(null)
    const [error, setError] = useState('')
    const [data, setData] = useState(null)
    const [url, setURL] = useState(null)

    useEffect(() => {
        firestore.collection('Tours')
            .orderBy('CreatedAt', 'desc')
            .limit(1)
            .get()
            // .then(v => console.log(v.docs[0]?.id))
            .then(v => setData(v.docs[0].id))
    }, [])

    const handleImage = (e) => {
        const fileSelected = e.target.files[0]
        const types = ['image/jpeg', 'image/jpg', 'image/png']

        if (fileSelected && types.includes(fileSelected.type)) {
            setCoverImage(fileSelected)
            setError('')
        } else {
            setCoverImage(null)
            setError('Please provide correct formate of image')
        }
    }
    const handleUpload = async (file) => {
        const storageRef = storage.ref('Tours/' + file.name)
        await storageRef.put(file).on('state_changed', async () => {
            const url = await storageRef.getDownloadURL()
            setURL(url)
        })
        await firestore.collection('Tours').doc(data).update({
            CoverImage: url
        })
        console.log(data, url);
    }
    return (
        <div className="container text-center">
            <h1>Add pic</h1>
            <div className="mb-3">
                <h5 className="mb-2">Cover Image :</h5>
                <input type="file" onChange={handleImage} className="form-control" />
            </div>

            {error && <h3 className="text-danger text-center">{error}</h3>}

            {coverImage && (
                (<div>
                    <img src={URL.createObjectURL(coverImage)} className="d-block my-4 w-100" height={300} width={300} alt="" />
                </div>)
            )}

            <button className="btn btn-primary my-3" onClick={() => {
                handleUpload(coverImage)
            }}>Upload</button>
        </div>
    )
}
