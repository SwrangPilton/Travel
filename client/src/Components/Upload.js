import React, { useEffect, useState } from "react"
import { storage, firestore, timestamp } from '../Components/Firebase/config/firebaseConfig'

const Upload = ({ file, location, place, onUploadComplete, }) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        if (file && location && place) {
            upload()
        } else {
            console.log('Nothing to upload!') //
        }
    }, [])

    const upload = () => {
        const storageRef = storage.ref(`${location}/` + file.name)
        const collectionRef = firestore.collection(location)
        storageRef.put(file)
            .on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
                setProgress(percentage)
            }, (err) => {
                setError(err)
                onUploadError(err)
            }, async () => {
                const url = await storageRef.getDownloadURL()
                console.log('durl', location, url)
                const createdAt = timestamp
                await collectionRef.add({ url, createdAt, place })
                setUrl(url)
                onUploadComplete(url)
                // window.location.reload();
            })
    }

    return (<p>Render Progress {progress}% bar here (url = {url})</p>)
}
export default Upload