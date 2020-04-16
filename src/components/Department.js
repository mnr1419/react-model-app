import React from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import AddDepartMentModal from "./AddDepartMentModal";

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
  getDepartMentDetails = () => {
    this.setState({
      deptDetails: [
        {
          id: 4,
          name: "IT",
        },
        {
          id: 5,
          name: "Support",
        },
      ],
    });
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
                <tr key={details.id}>
                  <td>{details.id}</td>
                  <td>{details.name}</td>
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
