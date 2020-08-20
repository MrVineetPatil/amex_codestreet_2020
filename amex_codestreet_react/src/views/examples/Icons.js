
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button
} from "reactstrap";
// core components
import Header2 from "components/Headers/Header2.js";

class Icons extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header2 />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Your products in store</h3>
                </CardHeader>
                <CardBody>
                  <Row className=" icon-examples">
                    <Col lg="6" md="10">
                      <CopyToClipboard
                        text={"active-40"}
                        onCopy={() =>
                          this.setState({ copiedText: "active-40" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          id="tooltip982655500"
                          type="button"
                        >
                          <div>
                            {/* <i className=" ni ni-active-40" /> */}
                            <img height="250px" width="300px" src="https://images-na.ssl-images-amazon.com/images/I/6125wngPaDL._UL1000_.jpg"></img>
                            <span><b>Blue bloom pouch</b><br/><br/>
                            <span><b>Price : </b>$50</span>

</span>

                          </div>

                          
                          <center>
                      
  <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Edit product
                </Button></center>
                        </button>
                      </CopyToClipboard>
                      {/* <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip982655500"
                      >
                        {this.state.copiedText === "active-40"
                          ? "Copied"
                          : "Copy To Clipboard"}
                      </UncontrolledTooltip> */}
                    </Col>


                    <Col lg="6" md="10">
                      <CopyToClipboard
                        text={"active-40"}
                        onCopy={() =>
                          this.setState({ copiedText: "active-40" })
                        }
                      >
                        <button
                          className=" btn-icon-clipboard"
                          id="tooltip982655500"
                          type="button"
                        >
                          <div>
                            {/* <i className=" ni ni-active-40" /> */}
                            <img height="250px" width="300px" src="https://images-na.ssl-images-amazon.com/images/I/61HrJ5bTHUL._SL1000_.jpg"></img>
                            <span><b>Pink Floral Messenger</b><br/><br/>
                            <span><b>Price : </b>$100</span>
                            
</span>


                          </div>

                          <center>
  <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Edit product
                </Button></center>

                        </button>
                      </CopyToClipboard>
                      {/* <UncontrolledTooltip
                        delay={0}
                        trigger="hover focus"
                        target="tooltip982655500"
                      >
                        {this.state.copiedText === "active-40"
                          ? "Copied"
                          : "Copy To Clipboard"}
                      </UncontrolledTooltip> */}
                    </Col>



                 
                 
                
                  
                
                   
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
