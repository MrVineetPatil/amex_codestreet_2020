import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="justify-content-md-center">
            <Col className="mb-5 mb-xl-0" xl="10">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Amount Raised </h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Week</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="9">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Pitch Requests</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="/admin/tables"
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Investor name</th>
                      <th scope="col">Amount to Invest</th>
                      <th scope="col">Query </th>
                      <th scope="col">Schedule a meeting/ Chat </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Kruthika K</th>
                      <td>4000</td>
                      <td>Requesting meet to talk about investment </td>
                      <td>
                        <a href="/admin/calendar"> Meet </a> | <a href="/admin/chat"> Chat now </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Pooja Kumari</th>
                      <td>3,980</td>
                      <td>What is the major USP of your product? </td>
                      <td>
                        <a href="/admin/calendar"> Meet </a>| <a href="/admin/chat"> Chat now </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Vineet Patil</th>
                      <td>2,500</td>
                      <td>The targeted audience? </td>
                      <td>
                       <a href="/admin/calendar"> Meet </a> | <a href="/admin/chat"> Chat now </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Rekha Sinha</th>
                      <td>1,200</td>
                      <td>Interested in larger investment, need more details </td>
                      <td>
                        <a href="/admin/calendar"> Meet </a> | <a href="/admin/chat"> Chat now </a>
                      </td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col xl="3">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Social Media Profiles </h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Platform</th>
                      <th scope="col">View</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Facebook</th>
                      <td><a href="#"> Click here </a> </td>
                      
                    </tr>
                    
                    <tr>
                      <th scope="row">Google</th>
                      <td><a href="#"> Click here </a></td>
                      
                    </tr>
                    <tr>
                      <th scope="row">Instagram</th>
                      <td><a href="#"> Click here </a></td>
                      
                    </tr>
                    <tr>
                      <th scope="row">twitter</th>
                      <td><a href="#"> Not Linked. Link Now! </a></td>
                      
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
