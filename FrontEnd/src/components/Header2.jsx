import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row header2">
          <div className="col-lg-2 col-md-2 col-sm-2 header2ChildOne setflex">
            <FontAwesomeIcon icon={faCartShopping} />
            <h5>E-commerce</h5>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 header2ChildTwo setflex">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <select
                aria-label=".form-select-lg example"
                defaultValue="option1"
              >
                {/* <option selected>All categories</option> */}
                <option value="option1">One</option>
                <option value="option2">Two</option>
                <option value="option3">Three</option>
              </select>
            </form>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 header2ChildTree setflex">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
