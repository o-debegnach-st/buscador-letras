import React, { useContext, useEffect, useState } from "react";
import { letraContext } from "../../context/LetraContext";
import Card from "../Card/Card";

const Letra = () => {
	const [letra] = useContext(letraContext);

	const [lines, setLines] = useState([]);

	useEffect(() => {
		setLines(letra.split("\n"));
	}, [letra]);

	return (
		letra && (
			<Card title="Letra">
				{lines.map((line, i) => (
          line 
          ? <p key={`p-${i}`} className="letra-paragraph">{line}</p>
          : <br key={`br-${i}`}/>
				))}
			</Card>
		)
	);
};

export default Letra;
