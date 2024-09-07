import './HomeSec1.css';
import background from "../../Assets/Grass.png"
function HomSec1 ()
{
    return (
        <div className='overall'>
            <div className="main-content">
          <div className="left-half">
            <div className='flex space'>
            <h1><span className="orange">
            Ayush
            </span>
              -Veda
              </h1>
        </div>
            <div id='texty'>
            <p>For startups & innovators redefining </p>
            <p>the Ayush sector leveraging new</p>
              <p>technologies</p>
            </div>
            </div>
          <div className="right-half">
            <img src={background} alt="bgrnd" className='backrnd'/>
        </div>
      </div>
        </div>
    );
}

export default HomSec1;