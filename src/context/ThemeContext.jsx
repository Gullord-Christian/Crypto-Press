import React, { useState, useEffect, createContext } from "react";

const themeContext = () => {
	if (typeof window !== "undefined" && window.localStorage) {
		const storedWindow = window.localStorage.getItem("color-theme");
		if (typeof storedWindow == "string") {
			return storedWindow;
		}

		const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
		if (userMedia.matches) {
			return "dark";
		}
	}
	return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
	const [theme, setTheme] = useState(themeContext);

	const rawSetTheme = (theme) => {
		const root = window.document.documentElement;
		const isDark = theme === "dark";

		root.classList.remove(isDark ? "light" : "dark");
		root.classList.add(theme);

		localStorage.setItem("color-theme", theme);
	};

	if (initialTheme) {
		rawSetTheme(initialTheme);
	}

	useEffect(() => {
		rawSetTheme(theme);
	}, [theme]);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default themeContext;
