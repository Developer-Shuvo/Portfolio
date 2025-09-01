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
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src={image1} alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={image2} alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={image3} alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={image4} alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={image5} alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={image6} alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src={image7} alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src={image8} alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src={image9} alt="" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AnimationSlider;
