import image1 from "./clock.png";
import image2 from "./technology-zone.png";
import image3 from "./books-world.png";
import image4 from "./mobile-banking.png";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import image7 from "./image7.jpg";
import image8 from "./nexgen-innovators.png";
import image9 from "./image9.jpg";

const AnimationSlider = () => {
  return (
    <div id="myWork" className=" mt-6 md:mt-10 banner">
      {/* Slider Section */}
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          {/* Image 1 */}
          <a target="_blank" href="https://dynamic-clock-by-shuvo.netlify.app/">
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
        {/* Books world */}
        <div className="item" style={{ "--position": 3 }}>
          <a target="_blank" href="https://book-workd-by-shuvo.netlify.app/">
            <img src={image3} alt="" />
          </a>
        </div>

        {/* image 4 */}
        {/* Mobile banking */}
        <div className="item" style={{ "--position": 4 }}>
          <a
            target="_blank"
            href="https://mobile-banking-by-shuvo.netlify.app/"
          >
            <img src={image4} alt="" />
          </a>
        </div>

        {/* image 5 */}
        {/* Technology Zone */}
        <div className="item" style={{ "--position": 5 }}>
          <a
            target="_blank"
            href="https://next-js-nex-gen-innovators.vercel.app/"
          >
            <img src={image5} alt="" />
          </a>
        </div>
        {/* image 6 */}
        <div className="item" style={{ "--position": 6 }}>
          <a target="_blank" href="#">
            <img src={image6} alt="" />
          </a>
        </div>

        {/* image 7 */}
        <div className="item" style={{ "--position": 7 }}>
          <a target="_blank" href="#">
            <img src={image7} alt="" />
          </a>
        </div>
        {/* image 8 */}
        {/* Nexgen Innovators */}
        <div className="item" style={{ "--position": 8 }}>
          <a
            target="_blank"
            href="https://next-js-nex-gen-innovators.vercel.app/"
          >
            <img src={image8} alt="" />
          </a>
        </div>

        {/* image 9 */}
        <div className="item" style={{ "--position": 9 }}>
          <a target="_blank" href="#">
            <img src={image9} alt="" />
          </a>
        </div>
        {/* image 10 */}
        <div className="item" style={{ "--position": 10 }}>
          <a target="_blank" href="#">
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
