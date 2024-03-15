import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Ops, page is not found. Try again! Or not.</h1>
      <Link to='/'>Go Home</Link>
    </div>
  );
};
export default NotFoundPage;