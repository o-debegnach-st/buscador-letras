import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);

  const values = [isLoading, setIsLoading]
	return (
		<StateContext.Provider value={values}>
			{children}
		</StateContext.Provider>
	);
};

export default StateProvider;
