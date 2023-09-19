import React from "react"
import { Outlet, Navigate, redirect } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = false
    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first")
    }
    return <Outlet />
}