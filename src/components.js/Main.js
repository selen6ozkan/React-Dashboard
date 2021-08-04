import React from "react";
import { Container, Row, Col } from "reactstrap";
import customer from "../customer.json";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <main>
      <Container>
        <Row>
          <Col className="card-single" lg="3" md="6" sm="12">
            <div>
              <div className="inner">
                <div>
                  <h3>54</h3>
                  <b>Customers</b>
                </div>
                <div>
                  <i className="las la-users"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col className="card-single" lg="3" md="6" sm="12">
            <div>
              <div className="inner">
                <div>
                  <h3>79</h3>
                  <b>Projects</b>
                </div>
                <div>
                  <i className="las la-clipboard-list"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col className="card-single" lg="3" md="6" sm="12">
            <div>
              <div className="inner">
                <div>
                  <h3>124</h3>
                  <b>Orders</b>
                </div>
                <div>
                  <i className="las la-shopping-bag"></i>
                </div>
              </div>
            </div>
          </Col>
          <Col className="card-single" lg="3" md="6" sm="12">
            <div>
              <div className="inner" style={{ backgroundColor: "#DD2F6E" }}>
                <div style={{ color: "white" }}>
                  <h3>$6k</h3>
                  <b>Income</b>
                </div>
                <div>
                  <i
                    className="lab la-google-wallet"
                    style={{ color: "white" }}
                  ></i>
                </div>
              </div>
            </div>
          </Col>

          <Row>
            <Col lg="8" md="12" sm="12">
              <div className="projects">
                <div className="cardd">
                  <div className="card-top">
                    <h5>Recent Projects</h5>
                    <button>
                      See All <i className="las la-arrow-right"></i>
                    </button>
                  </div>

                  <div className="card-body">
                    <table style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <td>Project Title</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Web development</td>
                          <td>Frontend</td>
                          <td>
                            <span className="status"></span>in progress
                          </td>
                        </tr>
                        <tr>
                          <td>UI/UX Design</td>
                          <td>UI Team</td>
                          <td>
                            <span className="status"></span>review
                          </td>
                        </tr>
                        <tr>
                          <td>Web development</td>
                          <td>Frontend</td>
                          <td>
                            <span className="status"></span>in progress
                          </td>
                        </tr>

                        <tr>
                          <td>Ushop app</td>
                          <td>Mobile Team</td>
                          <td>
                            <span className="status"></span>pending
                          </td>
                        </tr>
                        <tr>
                          <td>Web development</td>
                          <td>Frontend</td>
                          <td>
                            <span className="status"></span>in progress
                          </td>
                        </tr>

                        <tr>
                          <td>UI/UX Design</td>
                          <td>UI Team</td>
                          <td>
                            <span className="status"></span>review
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="4" md="12" sm="12">
              <div className="carddd">
                <div className="card-top">
                  <h6>News customer</h6>
                  <button>
                    See All <i className="las la-arrow-right"></i>
                  </button>
                </div>

                <div className="card-body">
                  {customer &&
                    customer.result.length > 0 &&
                    customer.result.map((e) => (
                      <div className="customer">
                        <div className="user">
                          <div className="name">
                            <img src={e.avatar.url} alt="" />
                            <p className="text" style={{ fontSize: "18px" }}>
                              {" "}
                              {e.name} {e.lastname}{" "}
                            </p>
                          </div>

                          <div className="icon">
                            <Link to="">
                              <i className="lar la-circle"></i>
                            </Link>
                            <Link to="">
                              <i className="lar la-comment" title={e.email}></i>
                            </Link>

                            {e.phone ? (
                              <Link to="">
                                {" "}
                                <i
                                  className="las la-phone button"
                                  title={e.phone}
                                ></i>
                              </Link>
                            ) : (
                              "  "
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
