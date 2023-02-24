import css from "../Feedback/Feedback.module.css";
// import PropTypes from "prop-types";

export default function Feedback() {
    return (
      <div className={css.feedback}>
        {/* Feed h1 */}
          <h1 className={css.feedtext}>Please leave feedback</h1>
          {/* Button list */}
        <ul className={css.feedlist}>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
      </div>
    );
  }
  
//   User.propTypes = {
//     stats: PropTypes.objectOf(PropTypes.number),
//   };