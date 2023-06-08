import "./Collage.scss";
import Slider from "infinite-react-carousel";

const Collage = () => {
  return (
    <div>
      <div className="collage">
        <div className="container">
          <Slider slidesToShow={3} arrowsScroll={1}>
            <div className="bigContainer">
              <div className="smallContainer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/800px-Cat_August_2010-4.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <span className="desc">description</span>
                <span className="title">title</span>
              </div>
            </div>
            <div className="bigContainerTwo">
              <div className="smallerContainer first">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/800px-Cat_August_2010-4.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <span className="desc">description</span>
                <span className="title">title</span>
              </div>
              <div className="smallerContainer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/800px-Cat_August_2010-4.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <span className="desc">description</span>
                <span className="title">title</span>
              </div>
            </div>
            <div className="bigContainerTwo">
              <div className="smallerContainer first">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/800px-Cat_August_2010-4.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <span className="desc">description</span>
                <span className="title">title</span>
              </div>
              <div className="smallerContainer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/800px-Cat_August_2010-4.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <span className="desc">description</span>
                <span className="title">title</span>
              </div>
            </div>
            <div className="bigContainer">
              <div className="smallContainer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/800px-Cat_August_2010-4.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <span className="desc">description</span>
                <span className="title">title</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Collage;
