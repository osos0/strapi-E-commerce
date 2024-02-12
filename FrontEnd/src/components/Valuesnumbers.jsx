import {
  faAward,
  faBolt,
  faClock,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Valuesnumbers = () => {
  return (
    <div className="valueNumber">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 valueNumberChild">
            <FontAwesomeIcon icon={faBolt} />
            <div>
              <h4>Fast Direction</h4>
              <div>Start from 1$</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 valueNumberChild">
            <FontAwesomeIcon icon={faAward} />
            <div>
              <h4>Fast Direction</h4>
              <div>Start from 1$</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 valueNumberChild">
            <FontAwesomeIcon icon={faClock} />{" "}
            <div>
              <h4>Fast Direction</h4>
              <div>Start from 1$</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 valueNumberChild">
            <FontAwesomeIcon icon={faCreditCard} />{" "}
            <div>
              <h4>Fast Direction</h4>
              <div>Start from 1$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valuesnumbers;
