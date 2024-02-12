import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
// import man from "../images/2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetproducteByNameQuery } from "../redux-query/producte";
import { useState } from "react";

const Filterproducte = () => {
  const handecatagory = (newTypeOfData) => {
    setTypeOfData(newTypeOfData);
  };

  const allProductsAPI = "products?populate=*";
  const menProductsAPI =
    "products?populate=*&filters[product_catorary][$eq]=men";
  const womenProductsAPI =
    "products?populate=*&filters[product_catorary][$eq]=women";

  const [typeOfData, setTypeOfData] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetproducteByNameQuery(`${typeOfData}`);

  // console.log(data.data);
  if (isLoading) {
    return <h3 className="container">Loading . . . . . . . . . .</h3>;
  } else if (error) {
    return <div>{error.meesage}</div>;
  } else if (data) {
    return (
      <div className="fitertionCon">
        <div className="container Filterproducte">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 FilterproducteChildOne">
              <h4>Selected Products</h4>
              <div>All our new arriviels in exclusive brand section</div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 FilterproducteChildTwo">
              <button
                value={allProductsAPI}
                onClick={() => handecatagory(allProductsAPI)}
              >
                All Products
              </button>
              <button
                value={menProductsAPI}
                onClick={() => handecatagory(menProductsAPI)}
              >
                Men category
              </button>
              <button
                value={womenProductsAPI}
                onClick={() => handecatagory(womenProductsAPI)}
              >
                Women category
              </button>
            </div>
          </div>
        </div>
        <div className="container FilterCard">
          <div className="row FilterCardConMap">
            {data.data.map((pro) => {
              return (
                <div
                  key={pro.id}
                  className="col-lg-4 col-md-6 col-sm-12 FilterCardChild"
                >
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      // src={man}
                      src={`${import.meta.env.VITE_SOME_URL}${
                        pro.attributes.product_Image.data[0].attributes.url
                      }`}
                      className="card-img-top"
                      alt="..."
                    />

                    <div className="card-body">
                      <div className="cardTilteandPrice">
                        <h5 className="cardtitle">
                          {pro.attributes.product_title}
                        </h5>
                        <h5 className="cardPrice">
                          {pro.attributes.product_price}
                        </h5>
                      </div>
                      <p className="card-text">{pro.attributes.product_desc}</p>
                      <div className="cardTilteandPrice">
                        <div className="addToCart">
                          <FontAwesomeIcon icon={faCartArrowDown} />
                          <h6>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              demo
                            </button>
                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      {pro.attributes.product_title}
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    {pro.attributes.product_desc}
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Buy Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </h6>
                        </div>
                        <h5 className="">stars</h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Filterproducte;
