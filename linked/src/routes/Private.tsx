import { ReactNode, useState, useEffect } from 'react'
// import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

interface privateProps{
    children: ReactNode;
}

export function Private({ children }: privateProps): any {
    const [load, setLoad] = useState(true)
    const [sig, setSig] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }
                
                localStorage.setItem("@reactlinks", JSON.stringify(userData))
                setLoad(false)
                setSig(true)
            }
        })
        
        return() => {
            unsub();
        }
    }, [])

    if(load) {
        return <div></div>
    }

    if(!sig) {
        return <Navigate to="/login" />
    }
    return children;
}
