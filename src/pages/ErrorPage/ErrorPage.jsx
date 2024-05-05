import { useRouteError, Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className={styles.errorPage}>
      <h1>Oh no! No book here.</h1>
      <p>That page cannot be found.</p>
      <p>
        <i>Error Message: {error.statusText || error.message}</i>
      </p>

      <div>
        Go back to the <Link to="/"> Homepage</Link>
      </div>
    </div>
  );
};
export default ErrorPage;
