import React, { useContext } from "react";
import styles from "./search.module.css"
import Layouts from "../layouts/Layouts";
import SearchResults from "../components/SearchResults";
import { AppContext } from "../contexts/AppProvider";
import SearchForm from "../components/SearchForm";

function Search() {
	const appCxt = useContext(AppContext)
	const [results, setResults] =  React.useState<any[]>([])
	const [isLoading, setIsLoading] = React.useState(false)
	
	const onSearch = (loading: boolean) => {
		setIsLoading(loading)
	}
	
	return (
		<Layouts>
			<h3 className={styles.searchText}>Search top news from {appCxt?.country.name} by term </h3>
			<SearchForm onSearch={onSearch} setResults={setResults}/>
			<section>
				<SearchResults results={results} />
				{isLoading && "Loading..."}
			</section>
		</Layouts>
	);
}

export default Search;
