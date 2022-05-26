import "./loading.css";

const LoadScreen = () => {

	return (
		<div className="load-screen__container">
			<div className="load-screen__spinner">
				<div className="sk-chase">
					<div className="sk-chase-dot"></div>
					<div className="sk-chase-dot"></div>
					<div className="sk-chase-dot"></div>
					<div className="sk-chase-dot"></div>
					<div className="sk-chase-dot"></div>
					<div className="sk-chase-dot"></div>
				</div>
			</div>
		</div>
	);
};

export default LoadScreen;
