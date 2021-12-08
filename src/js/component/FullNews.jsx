import React from "react";
import PropTypes from "prop-types";

// Resources

import "../../styles/FullNews.scss";

// Component

const FullNews = ({ title, author, date, shortContent, fullContent, photoURL }) => {
	function splitParagraphs(string) {
		return string.split(/\\n+/gm).map((paragraph, idx) => <p key={idx}>{paragraph}</p>);
	}

	return (
		<div className="container FullNews">
			<div className="row">
				<div className="col-12">
					<h2>{title}</h2>
					{splitParagraphs(shortContent)}
					<hr />
					<p>
						<span>{author}</span>
						<span>{date}</span>
					</p>
					<img src={photoURL} alt={title} />
					{splitParagraphs(fullContent)}
				</div>
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
