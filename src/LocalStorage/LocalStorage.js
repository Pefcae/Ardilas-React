import { useState } from "react";

const useLocalStorage = (key, initial) => {
	const [value, setValue] = useState(() => {
		return JSON.parse(window.localStorage.getItem(key)) || initial;
	});
	
	const setNewValue = (newValue) => {
		setValue(newValue);
		window.localStorage.setItem(key, JSON.stringify(newValue));
	};

	return [value, setNewValue];
};

export default useLocalStorage;
