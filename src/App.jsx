import './styles.css';
import "regenerator-runtime/runtime";
import {StorePage} from "./pages/StorePage/StorePage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {PaymentPage} from "./pages/PaymentPage/PaymentPage";
import {FormPage} from "./pages/FormPage/FormPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StorePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/payment",
        element: <PaymentPage/>,
    },
    {
        path: "/form",
        element: <FormPage/>,
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
