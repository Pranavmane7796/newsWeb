import React from "react";

const CoNews = (props) => {
  return (
    <div className="my-3">
      <div className="card my-1 p-2 mb-1 bg-dark text-light ">
        {" "}
        <img className="card-img-top" src={props.imgurl} alt="" />
        <div className="card-body">
          <h6 className="card-title ">
            <span
              className="position-absolute top-0 translate-middle badge  rounded-pill badge-danger bg-danger text-light"
              style={{ left: "85%", zIndex: "1" }}
            >
              {props.source}
              <span className="visually-hidden">unread messages</span>
            </span>
            {props.title}...
          </h6>
          <p className="card-text">{props.description}</p>
          <i className="time ">
            <p className="card-text ">
              <small className="text-light">
                {/*   {!this.props.author ? "" : `by ${this.props.author}`} */}{" "}
                Updated {new Date(props.date).getMinutes()} min ago
              </small>
            </p>
          </i>

          <a
            rel="noreferrer"
            href={props.descUrl}
            className="btn btn-sm btn-outline-light my-2"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default CoNews;
