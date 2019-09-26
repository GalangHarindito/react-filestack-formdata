import React from "react";
import axios from "axios";

import Register from "./components/register";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3909/user`)
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="App">
          <h1>Upload via Multer</h1>
          <Register />
          user image
          <div>
            <img
              src={this.state.data[47].avatar[0].path}
              alt="useravatar"
              width="200"
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
