import { auth } from "../config/firebaseConfig";
import { GetUser } from "../config/UserContext"

export default function Account() {
    const { user } = GetUser()
    if (user) {
        return (
            <div className="container my-5 myaccount">
                <div className="row">
                    <div className="col my-5">
                        <h1 className="text-center welcomeAccount">Welcome to your Account</h1>
                        <div className="accountProfilePic">
                            <img className="accountProfilePic"
                                src={user.photoUrl ? user.photoUrl :
                                    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}
                                alt="profile pic" />
                        </div>
                        <div className="text-left">
                            <h2>Name : {user.displayName ? user.displayName : 'You did not add display name'}</h2>
                            <h2>Email : {user.email ? user.email : 'You did not add email address'}</h2>
                            <h2>Phone No. : {user.phoneNumber ? user.phoneNumber : 'You did not add phone number '}</h2>
                        </div>
                        <button onClick={() => auth.signOut().then(() => {
                            alert('You have logged out')
                        })} className="btn btn-primary btn-lg shadow mt-5">log out</button>

                        <button onClick={() => auth.currentUser.delete()
                            .then(() => {
                                alert('You have deleted your account')
                            })
                        } className="btn btn-danger btn-lg shadow ml-3 mt-5">Delete Account
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    else return (
        <div className="container my-5">
            <div className="row">
                <div className="col my-5">
                    <center>
                        <h1>&nbsp;</h1>
                        <h1>Please Sign In to view your account</h1>
                        <a href="/signup" className="btn btn-primary btn-lg mb-5">Sign In</a>
                    </center>
                </div>
            </div>
        </div>
    )

}
