import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyCS8TTbdYX8Xa_HIehqiSokUSmsGiItaE8",
    authDomain: "vanlife-134a5.firebaseapp.com",
    projectId: "vanlife-134a5",
    storageBucket: "vanlife-134a5.appspot.com",
    messagingSenderId: "997503592718",
    appId: "1:997503592718:web:d4c8fe24d90de9e0140f5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)




export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}