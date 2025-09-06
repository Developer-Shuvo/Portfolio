import image1 from "./clock.png";
import image2 from "./technology-zone.png";
import image3 from "./books-world.png";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";
import image8 from "./image8.jpg";
import image9 from "./image9.jpg";

const AnimationSlider = () => {
  return (
    <div id="myWork" className="lg:py-20 sm:mt-10 md:mt-20 lg:mt-0 banner">
      {/* Slider Section */}
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          {/* Image 1 */}
          <a target="_blank" href="https://special-clock.netlify.app/">
            <img src={image1} alt="" />
          </a>
        </div>

        {/* Image 2 */}
        <div className="item" style={{ "--position": 2 }}>
          <a
            target="_blank"
            href="https://technology-zone-by-shuvooo.netlify.app/"
          >
            <img src={image2} alt="" />
          </a>
        </div>
        {/* Image 3 */}
        <div className="item" style={{ "--position": 3 }}>
          <a href="https://book-workd-by-shuvo.netlify.app/">
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
        <h1 data-content="MY WORK">MY WORK</h1>

        <div className="model"></div>
      </div>
    </div>
  );
};

export default AnimationSlider;
