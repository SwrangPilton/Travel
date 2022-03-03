import { useState, useEffect } from 'react'
import { storage, firestore, timestamp } from '../Components/Firebase/config/firebaseConfig'

export default function useStorage(file, location, place) {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        if (!file || !location) return
        const storageRef = storage.ref(`${location}/` + file.name)
        const collectionRef = firestore.collection(location)
        storageRef.put(file)
            .on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
                setProgress(percentage)
            }, (err) => {
                setError(err)
            }, async () => {
                const url = await storageRef.getDownloadURL()
                const createdAt = timestamp
                await collectionRef.add({ url, createdAt, place })
                setUrl(url)
                // window.location.reload();
            })
    }, [file, location, place])

    return { progress, url, error }
}
