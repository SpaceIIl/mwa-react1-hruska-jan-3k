import './Box.css';
import logo from '../img/pepegas1.png';

function Box() {
  return (
    <div className="box">
        <img src={logo} alt="pepegas"/>
        <h3>Project title</h3>
        <p>pepegas Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
  );
}

export default Box;