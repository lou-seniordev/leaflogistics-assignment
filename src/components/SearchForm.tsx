import React from "react";
import { AppContext } from "../contexts/AppProvider";
import endpoints from "../lib/endpoints";
import request from "../request";
import styles from "./SearchForm.module.css";

interface SearchFormProps {
	setResults: (data: any) => void;
	onSearch: (loading: boolean) => void
}

function SearchForm({ setResults, onSearch }: SearchFormProps) {
	const appCxt = React.useContext(AppContext);
	const [text, setText] = React.useState<string>("");
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleSubmit = async (query: string) => {
		onSearch(true)
		if (!query) {
			setResults([]);
			return;
		}
		const { data } = await request.get(endpoints.articles, {
			params: {
				country: appCxt?.country.label,
				q: text,
			},
		});
		onSearch(false)
		setResults(data.articles);
	};

	const handleChange = () => {
		if (!inputRef.current) return;
		setText(inputRef.current.value);
	};

	return (
		<form
			className={styles.searchForm}
			action=""
			onSubmit={(ev) => {
				ev.preventDefault();
				handleSubmit(text);
			}}
		>
			<input
				ref={inputRef}
				className={styles.searchInput}
				type="search"
				name=""
				placeholder="Find News"
				onChange={handleChange}
			/>
			<small>
				<i>Enter text and press enter/command button to fetch result</i>
			</small>
		</form>
	);
}

export default SearchForm;
