import React from "react"
import {
    useLoaderData,
    useNavigate,
    Form,
    redirect, useActionData
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

/**
 * Challenge: Remove error handling from the component state
 * and and a try...catch to the action to better handle the
 * errors, just like we just practiced.
 */

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const user = await LoginUser({ email, password });
        localStorage.setItem("loggedin", true)
       return redirect("/host");
      } catch (err) {
        return err.message;
      }
    
}

export default function Login() {
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => {
                navigate("/host", { replace: true })
            })
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form 
                method="post" 
                className="login-form" 
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={status === "submitting"}
                >
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}
