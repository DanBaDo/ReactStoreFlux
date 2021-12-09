import React from "react";
import PropTypes from "prop-types";

// Resources

import "../../styles/HighLigthNews.scss";

// Component

const FullNews = ({ title, author, date, shortContent, photoURL }) => {
	function splitParagraphs(string) {
		return string.split(/\\n+/gm).map((paragraph, idx) => <p key={idx}>{paragraph}</p>);
	}

	return (
		<div className="container HighLigthNews">
			<div className="row">
				<div className="col-12 col-lg-5">
					<h2>{title}</h2>
					<p>
						<span>{author}</span>
						<span>{date}</span>
					</p>
					{splitParagraphs(shortContent)}
				</div>
				<div className="col-12 col-lg-7">
					<img src={photoURL} alt={title} />
				</div>
				<hr />
			</div>
		</div>
	);
};

export default FullNews;

FullNews.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	shortContent: PropTypes.string.isRequired,
	fullContent: PropTypes.string.isRequired,
	photoURL: PropTypes.string.isRequired
};
