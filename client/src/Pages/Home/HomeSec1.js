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
            <div>
            <p style={ { color: "green",fontSize:"24px",fontWeight:"700"  }}>For startups & innovators redefining </p>
            <p style={ { color: "green",fontSize:"24px",fontWeight:"700" }}>the Ayush sector leveraging new</p>
              <p style={ { color: "green",fontSize:"24px",fontWeight:"700" }}>technologies</p>
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