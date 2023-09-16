import React from "react";
import CoNews from "./CoNews";
import PropTypes from "prop-types";
import Spin from "./Spin";
import { useState, useEffect } from "react";

const News = (props) => {
  // static defaultProps = {
  //   pagesize: 20,
  //   country: "in",
  //   category: "general",
  // };
  // static propTypes = {
  //   pagesize: PropTypes.number,
  // };
  const [articles, setArticles] = useState(0);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //   };
  document.title = `${this.Capitalizer(props.category)} | Daily News`;
  // }

  /*   async componentDidMount() {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=12efbc6688404e74902cb9ca349654a0&page=1&pageSize=${props.pagesize}`;
    this.setState({ loading: true });
    props.setProgress(10);
    let data = await fetch(url);

    let parsedData = await data.json();
    props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    props.setProgress(100);
  } */

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=12efbc6688404e74902cb9ca349654a0&page=1&pageSize=${props.pagesize}`;
    // this.setState({ loading: true });
    setLoading(loading);
    props.setProgress(10);
    let data = fetch(url);

    let parsedData = data.json();
    props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    props.setProgress(100);
  });

  Capitalizer = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  handleNextClick = async () => {
    if (
      state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pagesize)
    ) {
    } else {
      props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=12efbc6688404e74902cb9ca349654a0&page=${
        state.page + 1
      }&pageSize=$props.pagesize}`;
      setState({ loading: true });
      props.setProgress(10);

      let data = await fetch(url);
      let parsedData = await data.json();
      props.setProgress(30);

      this.setState({
        page: state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
      props.setProgress(100);
    }
  };
  handlePrevClick = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=12efbc6688404e74902cb9ca349654a0&page=${
      state.page - 1
    }&pageSize=${props.pagesize}`;
    props.setProgress(10);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(30);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    props.setProgress(100);
  };
  return (
    <div className="p-3 mb-2  bg-dark text-white">
      <div className="container my-3 ">
        <div className="text-center">
          <h1>
            <b className="text-light">
              {props.category !== "general"
                ? Capitalizer(`${props.category} headlines`)
                : "Top headlines"}
            </b>
          </h1>
        </div>
        {state.loading && <Spin />}
        <div className="row">
          {!state.loading &&
            state.articles.map((element) => {
              console.log(element);
              return (
                <div className="col-md-3  my-2" key={element.url}>
                  <CoNews
                    title={element.title?.slice(0, 65)}
                    author={element.author}
                    date={element.publish}
                    source={element.source.name}
                    decription={element.description}
                    imgurl={
                      !element.urlToImage
                        ? "https://wallpaperaccess.com/full/2879095.jpg"
                        : element.urlToImage
                    }
                    descUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-sm btn-outline-light"
          onClick={handlePrevClick}
          disabled={state.page <= 1}
        >
          ← Previous
        </button>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={handleNextClick}
          disabled={
            state.page + 1 > Math.ceil(state.totalResults / props.pagesize)
          }
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default News;
