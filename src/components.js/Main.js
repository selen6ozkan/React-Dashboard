import React from "react";
import { Container, Row, Col } from "reactstrap";

const Main = () => {
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
                          <td></td>
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
                  <div className="customer">
                    <div className="user">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        width="60px"
                        height="60px"
                        alt=""
                      />
                      <div>
                        <h5>Lewis Cunningham</h5>
                      </div>
                      <div className="icon">
                        <i className="lar la-circle"></i>
                        <i className="lar la-comment"></i>
                        <i className="las la-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="user">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        width="60px"
                        height="60px"
                        alt=""
                      />
                      <div>
                        <h5>Lewis Cunningham</h5>
                      </div>
                      <div className="icon">
                        <i className="lar la-circle"></i>
                        <i className="lar la-comment"></i>
                        <i className="las la-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="user">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        width="60px"
                        height="60px"
                        alt=""
                      />
                      <div>
                        <h5>Lewis Cunningham</h5>
                      </div>
                      <div className="icon">
                        <i className="lar la-circle"></i>
                        <i className="lar la-comment"></i>
                        <i className="las la-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="user">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        width="60px"
                        height="60px"
                        alt=""
                      />
                      <div>
                        <h5>Lewis Cunningham</h5>
                      </div>
                      <div className="icon">
                        <i className="lar la-circle"></i>
                        <i className="lar la-comment"></i>
                        <i className="las la-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="user">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        width="60px"
                        height="60px"
                        alt=""
                      />
                      <div>
                        <h5>Lewis Cunningham</h5>
                      </div>
                      <div className="icon">
                        <i className="lar la-circle"></i>
                        <i className="lar la-comment"></i>
                        <i className="las la-phone"></i>
                      </div>
                    </div>
                  </div>
                  <div className="customer">
                    <div className="user">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width="60px" height="60px" alt="" />
                      <div>
                        <h5>Lewis Cunningham</h5>
                      </div>
                      <div className="icon">
                        <i className="lar la-circle"></i>
                        <i className="lar la-comment"></i>
                        <i className="las la-phone"></i>
                      </div>
                    </div>
                  </div>
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
