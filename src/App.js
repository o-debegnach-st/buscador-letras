import "./App.css";
import Header from "./components/Header/Header";
import LetraProvider from "./context/LetraContext";
import StateProvider from "./context/StateContext";
import AppLetras from "./components/AppLetras/AppLetras";

function App() {
	return (
		<div className="App">
			<LetraProvider>
				<StateProvider>
					<Header />
					<AppLetras />
				</StateProvider>
			</LetraProvider>
		</div>
	);
}

export default App;
