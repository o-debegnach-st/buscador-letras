import React from "react";
import "./card.css";

const Card = (props) => {
	return (
		<div className="card">
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
				{props.children}
			</div>
		</div>
	);
};

export default Card;
