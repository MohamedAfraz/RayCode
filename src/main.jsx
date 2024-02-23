import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import DesktopOnlyComponent from "./desktop-only"
import Footer from "./footer.jsx"
import "./scrollbar.css"
import "./index.css"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DesktopOnlyComponent />
    <App />
    <Footer />
    <Toaster />
  </React.StrictMode>
)
