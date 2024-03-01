import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../App";
import ErrorPage from "../screens/ErrorPage";

const MainRouter = createBrowserRouter([
    {
        element: (
            <>
                <App />
            </ >
        ),
        errorElement: <ErrorPage />,
        // on declare les routes avec leurs vus
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default MainRouter