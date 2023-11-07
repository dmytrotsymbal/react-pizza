import { Link } from "react-router-dom";
import styles from "../scss/pages/NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>
        <span>😕</span>
        <br />
        Oops, page not found
      </h1>

      <p>Unfortunately the page you are looking for does not exist</p>

      <div className={styles.linkBlock}>
        <p className={styles.linkBlockText}>
          To get back to the main page click the button below
        </p>

        <Link to="/">
          <button className="button button--black">
            <span>Main Page</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
