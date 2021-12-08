import React from "react";
import PropTypes from "prop-types";

// Resources

import "../../styles/FullNews.scss"

// Component

const FullNews = ({title, author, date, shortContent, fullContent, photoURL}) => {

	function splitParagraph (string) {
		return string.split("\n").map(
			paragraph => {
				<p>{paragraph}</p>
			}
		)
	}

	return (
		<div className="container FullNews">
			<div className="row">
				<div className="col-12 col-lg-6">
					<Link to={newsURL}><h2>{title}</h2></Link>
					{splitParagraph(shortContent)}
					<br/>
					<p><span>{author}</span><span>{date}</span></p>
					<img src={photoURL} alt={title}/>
					{splitParagraph(fullContent)}
				</div>
			</div>
		</div>
	)
};

export default FullNews;

FullNews.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	shortContent: PropTypes.string.isRequired,
	photoURL: PropTypes.string.isRequired,

};