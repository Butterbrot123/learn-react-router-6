import React from "react"
import { Form, useActionData } from "react-router-dom"

async function fakeLoginUser(creds) {
    if (creds.email === "b@b.com" && creds.password === "p123") {
        return "User is logged in!"
    }
    throw new Error("Couldn't log the user in")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    return "Couldn't log in "
}

export default function Login() {
    const error = useActionData()
    console.log(error)
    return (
        <Form method="post" replace>
            <h2>Login</h2>
            {error && <h4 className="red">{error}</h4>}
            <input
                type="email"
                name="email"
                placeholder="Email address"
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Password"
            />
            <br />
            <button>Log in</button>
        </Form>
    )
}