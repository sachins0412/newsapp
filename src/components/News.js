import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Trending now</h2>
        <div className="row">
          <div className="col-md-4 mb-3 mt-2">
            <Newsitem />
          </div>

          <div className="col-md-4 mb-3 mt-2">
            <Newsitem />
          </div>
          <div className="col-md-4 mb-3 mt-2">
            <Newsitem />
          </div>
          <div className="col-md-4 mb-3 mt-2">
            <Newsitem />
          </div>
        </div>
      </div>
    );
  }
}
