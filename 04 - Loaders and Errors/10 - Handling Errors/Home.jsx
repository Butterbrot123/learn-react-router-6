import React from "react"
import { useLoaderData } from "react-router-dom"

export function loader() {
    throw new Error("This is an error")
}

export default function HomePage() {
  const data = useLoaderData()
  console.log(data)
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}
