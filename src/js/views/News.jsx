import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Componets
import FullNews from "../component/FullNews.jsx";

export const News = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const news = store.news[parseInt(params.id)];
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Link to="/">Portada</Link>
					<FullNews
						title={news.title}
						author={news.author}
						date={news.date}
						shortContent={news.shortContent}
						fullContent={news.fullContent}
						photoURL={news.photoURL}
					/>
				</div>
			</div>
		</div>
	);
};
