import React, { createContext, useState } from "react";

export const letraContext = createContext();

const LetraProvider = ({ children }) => {
	const [letra, setLetra] = useState("");

	const value = [letra, setLetra];

	return <letraContext.Provider value={value}>{children}</letraContext.Provider>;
};

export default LetraProvider;
