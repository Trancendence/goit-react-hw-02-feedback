import css from "./Statistic.module.css";
// import PropTypes from "prop-types";

export default function Statistic({}) {
    return (
      <div className={css.statistic}>
        <h1 className={css.stattext}>Statistics</h1>

        <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span></span>
        </li>
        <li>
          <span>Views</span>
          <span></span>
        </li>
        <li>
          <span>Likes</span>
          <span></span>
        </li>
      </ul>
      </div>
    );
  }
  
//   User.propTypes = {
//     stats: PropTypes.objectOf(PropTypes.number),
//   };