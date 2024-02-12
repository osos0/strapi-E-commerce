// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  // faBluetooth,
} from "@fortawesome/free-brands-svg-icons";
const Header1 = () => {
  return (
    <div className="navbar1">
      <div className="container">
        <div className="row conOfChild">
          <div className="col-lg-4 col-md-5 col-sm-6  navbar1childOne">
            <div className="hot">Hot</div>
            <div> Free Express Shipping</div>
          </div>
          <div className="col-lg-4 col-md-2 col-sm-0 d-none d-lg-block"></div>
          <div className="col-lg-4 col-md-5 col-sm-6 navbar1childThree">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lan
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    EN
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    AR
                  </button>
                </li>
              </ul>
            </div>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
