import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

class Profile extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/elon_musk.png")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    {/* <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button> */}
                    {/* <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button> */}
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        {/* <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div> */}
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Elon Musk
                      <span className="font-weight-light">, 45</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Gurgoan,India
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Founder-Musk India pvt limited
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Software engineering
                    </div>
                    <hr className="my-4" />
                    <p>
                      I'm passionate about revolutionazing the world of tech
                    </p>
                    {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                      Show more
                    </a> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My Company Profile</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      {/* <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button> */}
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Founder information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="musk.elon"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="elonmusk@hmail.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Elon"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name" 
                            >
                              Last name
                            </label>
                            <Input
                               className="form-control-alternative"
                               defaultValue="Musk"
                               id="input-first-name"
                               placeholder="First name"
                               type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Company Details
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Salarpuria tech point, The oasis center 5th Floor"
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Bengaluru"
                              id="input-city"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="India"
                              id="input-country"
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              defaultValue="560047"

                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">Company Profile</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Your company description"
                          rows="5"
                          defaultValue="OpenAI is an AI research and deployment company based in San Francisco, California. Our mission is to ensure that artificial general intelligence benefits all of humanity. The OpenAI Charter describes the principles that guide us as we execute on our mission."
                          type="textarea"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Company highlights</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Your company highlights"
                          rows="5"
                          defaultValue="People connect better with stories than they do with a list of facts. If you want people to actually remember the information from your company profile, take the Zappos approach and tell a story about your brand"
                          type="textarea"
                        />
                        <Input
                          className="form-control-alternative"
                          placeholder="Your company highlights"
                          rows="5"
                          defaultValue="This sounds easy, but when you consider how much Google has done and the hundreds of acquisitions and projects it has been involved in, it\'s hard to limit that to one page"
                          type="textarea"
                        />
                        <Input
                          className="form-control-alternative"
                          placeholder="Your company highlights"
                          rows="5"
                          defaultValue="'It\'s also important to note that the company keeps the page dynamic and up-to-date including highlights from Q4. Most company profiles are static and left to gather dust, but Philips updates its at least four times a year.'"
                          type="textarea"
                        />
                      </FormGroup>


                      <FormGroup>
                        <label>Team Story</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Your company story"
                          rows="5"
                          defaultValue="'I love this story on teamwork I heard the other day. I think you will agree it is powerful. Feel free to share with your teams. A team of about 35 employees had come together for a team building event. They were a young, bright and enthusiastic team.However, one big problem this team had was they wouldn’t share information or solutions with each other. The leader felt they were too focused on self and not enough on team.So she started off with a fun team activity that would allow her to teacH.
            
                          So she started off with a fun team activity that would allow her to teach the importance of each team member working together and sharing more.She brought the team into the cafeteria. All of the tables and chairs had been stacked and put away. Placed around the room were fun decorations and hundreds of different colored balloons.Everyone was excited, but not sure what it was all about. In the center of the room was a big box of balloons that had not been blown up yet.The team leader asked each p
                          The team leader asked each person to pick a balloon, blow it up and write their name on it. But they were instructed to be careful because the balloon could pop!A few balloons did indeed pop and those members of the team were given another chance, but were told that if the balloon popped again they were out of the game."
                          type="textarea"
                        />
                      </FormGroup>
                      <FormGroup>
                        
                        <input className="form-control-alternative" type="file" id="myFile" name="filename"/>
                       
                      </FormGroup>

                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm">
                        SAVE
                      </Button>

                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;