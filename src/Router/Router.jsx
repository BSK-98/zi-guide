import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import App from "../App"

const Router = createBrowserRouter (
    createRoutesFromElements (
        <Route path="/" element={<App />}>
            {/* <Route /> */}
        </Route>
    )
)

export default Router