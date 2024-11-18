import './styles.css';
import "regenerator-runtime/runtime";
import {StorePage} from "./pages/StorePage/StorePage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StorePage/>,
        errorElement: <ErrorPage/>
    },
]);

const App = () => {

    return (
        <div className='page'>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
