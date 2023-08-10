import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src=" https://static.politico.com/10/8a/ae099e8b48888f975703acaf31f2/election-2023-constitutional-access-ohio-78294.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/newsitem" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
