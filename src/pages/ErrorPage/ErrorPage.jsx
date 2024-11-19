import { useRouteError } from 'react-router-dom';
import './styles.css';

export default function ErrorPage() {

  return (
    <div id="error-page" className="error-message">
      <h1>Oops!</h1>
      <p>Page not found :(</p>
    </div>
  );
}
