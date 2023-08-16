import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    const { title, description, img_url, url } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={img_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read Further
          </a>
        </div>
      </div>
    );
  }
}
