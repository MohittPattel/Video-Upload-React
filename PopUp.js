import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="upload_popup_container">
        <div className="container_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <div class="header">
          <h3>Uploads Videos</h3>
          <hr/>
          </div>
          <form>
            <input  type="file" />
            <p id="id1">or<br/>Drag and Drop</p>
            <div class="center">
              <input type="submit" value="Upload" />
            </div>
          </form>
          <p>
            By submitting your videos to UWGT, you acknowledge that you agree
            to UGWT's <a href="#">Terms of Service</a> and <a href="#">Community Guidelines.</a>
            <br/>
            {" "}
            Please make sure that you do not violate others' copyright or
            privacy rights.
            <a href="#">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}
