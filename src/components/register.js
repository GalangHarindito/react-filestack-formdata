import React from "react";
import axios from "axios";
import ReactFilestack from "filestack-react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
      phoneNumber: "",
      files: "",
      previewImage: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // ----- Use this if you handle bakcen using multer -----
    ///////////////////////////////////////////////////////////////

    // const formData = new FormData();

    // formData.append("files", this.state.files);
    // formData.append("name", this.state.name);
    // formData.append("email", this.state.email);
    // formData.append("password", this.state.password);
    // formData.append("phoneNumber", this.state.phoneNumber);

    ///////////////////////////////////////////////////////////////

    axios
      .post(`http://localhost:3909/user`, this.state)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleImage = event => {
    this.setState({
      files: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0])
    });
  };

  render() {
    return (
      <Container>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Input your name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label>
                <Input
                  type="text"
                  name="phoneNumber"
                  placeholder="Input your phone number"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleAddress2">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <ReactFilestack
                  apikey={`AJR4X9IqPStCNGRmzHLIwz`}
                  onSuccess={result => {
                    console.log(result);
                    this.setState({
                      files: result.filesUploaded
                    });
                  }}
                />
                {/* {this.state.previewImage !== "" ? (
                  <img
                    src={this.state.previewImage}
                    alt="user-avatar"
                    width="200"
                  />
                ) : (
                  <Input type="file" name="file" onChange={this.handleImage} />
                )} */}
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={this.handleSubmit}>Register</Button>
        </Form>
      </Container>
    );
  }
}

export default Register;
