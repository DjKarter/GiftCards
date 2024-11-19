import { useRouteError } from "react-router-dom";
import './styles.css';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="error-message">
            <h1>Oops!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
