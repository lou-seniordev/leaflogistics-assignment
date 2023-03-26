import React from "react";

interface CountryInterface {
	label: string;
	name: string;
}

interface AppContextInterface {
	country: CountryInterface;
	setCountry: (country: CountryInterface) => void;
}

export const AppContext = React.createContext<AppContextInterface | null>(null);
const { Provider } = AppContext;

function AppProvider({ children }: React.PropsWithChildren) {
	const [country, setCountry] = React.useState<CountryInterface>({
		label: "",
		name: "",
	});

	React.useEffect(() => {
		try {
			if (localStorage.country) {
				setCountry(()=>JSON.parse(localStorage.country));
			}
		} catch (error) {
			console.log("unanble to set retrieve");
		}
	}, []);

	React.useEffect(() => {
		if (country.name) {
			window.localStorage.setItem("country", JSON.stringify(country));
		}
	}, [country]);

	return <Provider value={{ setCountry, country }}>{children}</Provider>;
}

export default AppProvider;
