import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <p className={css.info}>Oooppsss...</p>
      <div className={css.text_info}>
        The page are you looking for may have been moved, deleted or possibly
        never existed
      </div>
      <Link to={`/`} className={css.link_home}>
        Go HomePage 
      </Link>
    </div>
  );
};
export default NotFoundPage;