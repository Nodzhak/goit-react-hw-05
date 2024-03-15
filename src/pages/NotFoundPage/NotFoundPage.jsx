import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2>Oops... nothing found...</h2>
      <Link to="/">Back to home</Link>
    </div>
  );
};
export default NotFoundPage;