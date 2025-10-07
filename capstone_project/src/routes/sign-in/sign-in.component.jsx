import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef)
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign with google popup
            </button>
        </div>
    )
}
export default SignIn