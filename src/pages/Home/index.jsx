import css from "./index.module.css";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className={css.homePage}>
      <div
        className={css.imageWrapper}
        style={{
          backgroundImage: "url(" + process.env.PUBLIC_URL + "/hero.jpg" + ")",
        }}
      >
        <div className={css.combineTitle}>
          <span className={css.bigTitle}>Ukrainian</span>
          <span className={css.title}>campervans</span>
        </div>

        <Link className="navLink" to="/catalog">
          <span className={css.logo}> to find yours</span>
        </Link>
      </div>
    </div>
  );
}
