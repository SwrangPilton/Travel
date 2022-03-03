import { GetUser } from "../Firebase/config/UserContext"
import { firestore, increment } from "../Firebase/config/firebaseConfig"
export default function Heart() {
    const { user } = GetUser()

    const handleClick = () => {
        firestore.collection('hearts')
            .doc(user.uid)
            .set({
                uid: user.uid,
            })

        alert('file added')
    }
    return (
        <div className="mx-auto my-4">
            <button onClick={handleClick} className="btn btn-primary">💖 Like</button>
        </div>
    )
}
