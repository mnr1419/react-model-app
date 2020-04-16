import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

class AddDepartMentModal extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Add department modal calling");
    this.state = {
      deptName: "",
    };
  }
  render() {
    return (
      <div>
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
              <form onSubmit={this.handleSumbit}>
                <label>Dept Name</label>
                <br />
                <br />
                <input
                  type="text"
                  name="deptName"
                  placeholder="Department Name"
                  value={this.state.deptName}
                ></input>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddDepartMentModal;
