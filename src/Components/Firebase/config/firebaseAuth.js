import { useState,useEffect } from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { auth, firebaseAuthConfig } from "./firebaseConfig"

export default function FirebaseAuth() {
    const [renderedAuth, setRenderedAuth] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderedAuth(true)
        }
    }, [])
    return (
        <div>
            {renderedAuth ? <StyledFirebaseAuth
                uiConfig={firebaseAuthConfig}
                firebaseAuth={auth} /> : ''}
        </div>
    )
}
