import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const TestDaniel = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1>Palabra: {params.palabra}</h1>
			<Link to="/">
				<p>Pa casa.</p>
			</Link>
			<h2>From store:</h2>
			<ul>
				{store.demo.map((item, idx) => (
					<li key={idx}>{item.title}</li>
				))}
			</ul>
			<button onClick={() => actions.addItemToDemo("THIRD", "pink", "pink")}>Add item</button>
		</div>
	);
};

TestDaniel.propTypes = {
	match: PropTypes.object
};
