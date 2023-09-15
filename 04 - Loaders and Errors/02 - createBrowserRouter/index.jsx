import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

function HomePage() {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<HomePage />} />)
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
