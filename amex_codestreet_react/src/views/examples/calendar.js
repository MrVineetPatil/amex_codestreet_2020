import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Button,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header2 from "components/Headers/Header2.js";
import DateTimePicker from 'react-datetime-picker'

class Calendar2 extends React.Component {
    state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
  render() {
    return (
    <center>
      <div className="example-wrapper" >
                <Header2/>
                <DateTimePicker onChange={this.onChange}
          value={this.state.date} />
        <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    
                  </span>
                  <span className="btn-inner--text">Set Date and Time</span>
                </Button>
        </div>
    </center>
           
  
    );
  }
}

export default Calendar2;