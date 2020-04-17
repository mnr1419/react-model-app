import React from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import AddDepartMentModal from "./AddDepartMentModal";
import ApiService from "../service/ApiService";

class Department extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deptDetails: [],
      addModalShow: false,
    };
    //this.getDepartMentDetails = this.getDepartMentDetails.bind(this);
    //this.addModalClose = this.addModalClose.bind(this);
  }
  componentDidMount() {
    this.getDepartMentDetails();
  }
  // addModalClose() {
  //   this.setState({
  //     addModalShow: false,
  //   });
  // }

  // compoenentDidUpdate method is used to get the updates , recently added dept details
  // componentDidUpdate() {
  //   this.getDepartMentDetails();
  // }
  getDepartMentDetails = () => {
    ApiService.getAllDepartments().then((response) =>
      this.setState({
        deptDetails: response.data,
      })
    );
    // this.setState({
    //   deptDetails: [
    //     {
    //       id: 4,
    //       name: "IT",
    //     },
    //     {
    //       id: 5,
    //       name: "Support",
    //     },
    //   ],
    // });
  };
  render() {
    let addModalClose = () =>
      this.setState({
        addModalShow: false,
      });

    return (
      <div>
        <h3>Department Details</h3>
        <br />
        <br />
        <div className="mt-5 d-flex justify-content-left">
          <Table>
            <thead>
              <tr>
                <th>Dept Id</th>
                <th>Dept Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.deptDetails.map((details) => (
                <tr key={details.deptId}>
                  <td>{details.deptId}</td>
                  <td>{details.deptName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <ButtonToolbar>
          <Button onClick={() => this.setState({ addModalShow: true })}>
            {" "}
            Add Department
          </Button>
          <AddDepartMentModal
            show={this.state.addModalShow}
            onHide={addModalClose}
          ></AddDepartMentModal>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Department;
