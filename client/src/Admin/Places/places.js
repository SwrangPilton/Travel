import React, { useState } from 'react'
import './button.css'
import ProgressBar from './ProgressBar'

export default function Places() {
    const [file, setFile] = useState(null)
    const types = ['image/jpeg', 'image/jpg', 'image/png']
    const [error, setError] = useState('')
    const [place, setPlace] = useState('')
    const [upload, setUpload] = useState(null)

    const handleChange = (e) => {
        let fileSelected = e.target.files[0]
        if (fileSelected && types.includes(fileSelected.type)) {
            setFile(fileSelected)
            setError('')
        } else {
            setFile(null)
            setError('Please provide a valid picture format')
        }
    }
    return (
        <div className="container my-3 text-center">
            <h1>PLACES</h1>
            <div className="row">
                <div className="col">
                    <form>
                        <label>
                            <input type="file" onChange={handleChange} />
                            <span>*</span>
                        </label>

                        <h5 className="mb-2 text-left">Name of place :</h5>
                        <input type="text" placeholder="Name of place"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)} className="d-block mx-auto form-control" />

                        {file && (<div>
                            <img src={URL.createObjectURL(file)} className="d-block my-4 w-100" height={300} width={300} alt="" />
                        </div>)}
                    </form>
                    {error && <h4 className="text-center text-danger">{error}</h4>}
                    {file && <h4 className="text-center">{file.name}</h4>}

                    <button className="btn d-block btn-primary mx-auto mt-4" onClick={() => setUpload(true)}>
                        upload
                    </button>
                    {upload && file && <ProgressBar file={file} setFile={setFile}
                        place={place} setPlace={setPlace} location={'Places'} />}
                </div>
            </div>
        </div>
    )
}
