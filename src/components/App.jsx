import data from "../data/statistic.json";
import Feedback from "./Feedback/Feedback";
import Statistic from "./Statistic/Statistic";


// export class App extends Component{

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   incrementValue = (e) => {

//       this.setState(prevState => {
//         return { [e] : prevState[e] + 1 };
//       });
    

//   }}

export function App() {
  return (
  <>
      <Feedback/>,
      <Statistic/>
  </>
  );
}