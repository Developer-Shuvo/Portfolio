import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";
import image8 from "./image8.jpg";
import image9 from "./image9.jpg";

const AnimationSlider = () => {
  return (
    <div className="mt-10  lg:mt-20 banner">
      {/* Slider Section */}
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <a href="#">
            <img src={image1} alt="" />
          </a>
        </div>

        <div className="item" style={{ "--position": 2 }}>
          <a href="#">
            <img src={image2} alt="" />
          </a>
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <a href="#">
            <img src={image3} alt="" />
          </a>
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <a href="#">
            <img src={image4} alt="" />
          </a>
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <a href="#">
            <img src={image5} alt="" />
          </a>
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <a href="#">
            <img src={image6} alt="" />
          </a>
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <a href="#">
            <img src={image7} alt="" />
          </a>
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <a href="#">
            <img src={image8} alt="" />
          </a>
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <a href="#">
            <img src={image9} alt="" />
          </a>
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <a href="#">
            <img src={image4} alt="" />
          </a>
        </div>
      </div>

      {/* Text & image Section */}
      <div className="content">
        <h1 data-content="SHUVO">SHUVO</h1>
        <div className="author">
          <h2>FrontEnd Developer</h2>
          <p>
            
            <b>Here My Top Project</b>
          </p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default AnimationSlider;
