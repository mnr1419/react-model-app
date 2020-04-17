import React from "react";
import { Modal, Button } from "react-bootstrap";
import ApiService from "../service/ApiService";
import Snakbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

class AddDepartMentModal extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Add department modal calling");
    this.state = {
      deptName: "",
      snakbarOpen: false,
      snakbarmessage: "",
    };
    this.hanldeInput = this.hanldeInput.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.snakbarClose = this.snakbarClose.bind(this);
  }
  hanldeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSumbit() {
    let departmentDetails = {
      deptName: this.state.deptName,
    };
    //ApiService.saveDepartment(departmentDetails);
    ApiService.saveDepartment(departmentDetails).then((response) =>
      this.setState({
        snakbarOpen: true,
        snakbarmessage: response.data,
      })
    );
    //this.props.history.push("/department");
  }
  snakbarClose() {
    this.setState({
      snakbarOpen: false,
    });
  }
  render() {
    return (
      <div>
        <Snakbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.snakbarOpen}
          onClose={this.snakbarClose}
          autoHideDuration={3000}
          message={<span>{this.state.snakbarmessage}</span>}
          // message="Record Successfully Added."
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={this.snakbarClose}
            >
              X
            </IconButton>,
          ]}
        />
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Department
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <form>
                <label>Dept Name</label>
                <br />
                <br />
                <input
                  type="text"
                  name="deptName"
                  placeholder="Department Name"
                  value={this.state.deptName}
                  onChange={this.hanldeInput}
                ></input>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSumbit}>Save</Button>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddDepartMentModal;
