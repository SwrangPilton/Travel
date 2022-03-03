/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import useStorage from '../../customHooks/useStorage'

export default function ProgressBar({ file, setFile, location, place, setPlace, setCoverImageURL }) {
    const { progress, url } = useStorage(file, location, place, setCoverImageURL)
    // console.log(progress, url, place)
    console.log('ONE : ' + url)

    const sub = () => {
        if (url) {
            setCoverImageURL(url)
            console.log(setCoverImageURL)
            setFile(null)
            if (setPlace) {
                setPlace('')
            }
        }
    }

    useEffect(() => {
        sub()
    }, [])

    return (
        <div>
            <div style={{ height: '5px', width: progress + '%', backgroundColor: 'red' }}></div>
        </div>
    )
}
