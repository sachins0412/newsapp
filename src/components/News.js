import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
const API_KEY = require("./../apikey.json")["key"];

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      articles_length: 0,
      totalArticles: 0,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      articles_length: parsedData.articles.length,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }
  handleNextPage = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    const parsedData = await data.json();
    const new_articles_length =
      this.state.articles_length + parsedData.articles.length;
    if (new_articles_length === this.state.totalArticles) {
      document.getElementById("next-btn").disabled = true;
    }
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      articles_length: new_articles_length,
      loading: false,
    });
    setTimeout(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 0);
  };

  handlePrevPage = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    const parsedData = await data.json();
    const new_articles_length =
      this.state.articles_length - this.state.articles.length;
    document.getElementById("next-btn").disabled = false;
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      articles_length: new_articles_length,
      loading: false,
    });
    setTimeout(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 0);
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Trending now</h2>
          {console.log("spinner", this.state.loading)}
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((ele) => {
                return (
                  <div key={ele.url} className="col-md-4 mb-3 mt-2">
                    <Newsitem
                      title={
                        ele.title?.length > 35
                          ? ele.title.slice(0, 35) + "..."
                          : ele.title
                      }
                      description={
                        ele.description?.length > 100
                          ? ele.description.slice(0, 100) + "..."
                          : ele.description
                      }
                      img_url={ele.urlToImage}
                      url={ele.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark mb-5 ms-3"
            onClick={this.handlePrevPage}
          >
            &larr;Prev
          </button>
          <button
            id="next-btn"
            className="btn btn-dark mb-5 me-3"
            onClick={this.handleNextPage}
          >
            Next&rarr;
          </button>
        </div>
      </>
    );
  }
}
