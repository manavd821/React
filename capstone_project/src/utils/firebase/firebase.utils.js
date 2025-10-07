import { initializeApp } from 'firebase/app'
import {
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
    } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrPNBo0skOuyDRrrdEB3dn-BtRQOTBh8c",
    authDomain: "crown-clothing-db-3d0e2.firebaseapp.com",
    projectId: "crown-clothing-db-3d0e2",
    storageBucket: "crown-clothing-db-3d0e2.firebasestorage.app",
    messagingSenderId: "838139812379",
    appId: "1:838139812379:web:afd9da8c9c50302e9136be"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt : "select_account"
}
)
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider) 

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)
    console.log(userSnapShot)
    console.log(userSnapShot.exists())

    // if user data not exist
    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date()
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch (error){
            console.log("error creating the user: ", error)
        }
    }

    // if user data exist return back userDocRef
    return userDocRef;
    

}