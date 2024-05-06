import { useRouteError, Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import logo from "../../../public/icons/appLogo.png";
const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorDiv}>
        <h1>Oh no! No book here.</h1>
        <img src={logo} className={styles.logo} alt="book-logo" />
        <p>That page cannot be found.</p>

        <div>
          Go back to the <Link to="/"> Homepage</Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
