import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews";
import Visitors from "./components/Visitors";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import './App.css';

// ReactDOM.render(
//   <h1>Commence Dashboard Creation!</h1>,
//   document.querySelector('main')
// );

export default function App() {
  return (
    <div className="app">
      <div className="navigation">
      <Navigation />
      </div>
      <div className="rectangles">
      <Reviews />
      <Rating />
      <Analysis />
      </div>
      <div className="footer">
      <Visitors />
      </div>
    </div>
  );
}
