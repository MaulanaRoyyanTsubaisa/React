import Counter from "../components/Counter";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const CounterPage = () => {
  return (
    <div>
      <Counter />
      <Link to="/whislist">ke halaman wihslist</Link>
      <Footer />
    </div>
  );
};

export default CounterPage;
