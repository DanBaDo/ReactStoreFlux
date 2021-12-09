import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

// Components
import "../component/FullNews.jsx";
import FullNews from "../component/FullNews.jsx";
import HighLigthNews from "../component/HighLigthNews.jsx";

export const Home = () => (
	<div className="mt-5">
		<h1>Tests</h1>
		<h2>FullNews component</h2>
		<FullNews
			title="This is the title"
			author="Author Name"
			date="29/12/2021"
			shortContent="The news hash.\nWith one or more paragraphs."
			fullContent="It suposed to be larger than short content.\nThis is a second paragraph for the full content."
			photoURL="https://picsum.photos/1024/800?random=1"
		/>
		<h2>HighLigthNews component</h2>
		<HighLigthNews
			title="This is the title"
			author="Author Name"
			date="29/12/2021"
			shortContent="The news hash.\nWith one or more paragraphs."
			photoURL="https://picsum.photos/1024/800?random=1"
			fullNewsURL="/full/news/url/1"
		/>
		<h2>News view</h2>
		<Link to="/news/3">Ir a noticia</Link>
	</div>
);
