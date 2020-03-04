import React from "react"; //8k (gzipped: 3.3k)
import PropTypes from "prop-types"; //1.6k (gzipped: 838)
import "./LoadMoreBtn.css";

const LoadMoreBtn = ({ text, onClick }) => {
  return (
    <div className="rmdb-loadmorebtn" onClick={() => onClick(true)}>
      <p>{text}</p>
    </div>
  );

  LoadMoreBtn.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
  };
};

export default LoadMoreBtn;
