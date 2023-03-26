import React from "react";
import PostGrid from "../layouts/PostGrid";
import generateSlug from "../lib/generateSlug";
import styles from "./SearchResults.module.css";

interface SearchResultsProps {
	results: any[];
}

function SearchResults({ results }: SearchResultsProps) {
	return (
		<div className={`row ${styles.searchResults}`}>
			{results.length <= 1 ? (
				<div className={styles.noFound}>
					<i>No match found</i>
				</div>
			) : (
				<div className={`row ${styles.searchList}`}>
					{results.map((post, key) => (
						<PostGrid
							key={key}
							postId={post.source.id}
							link={generateSlug({ parent: "/news/", title: post.title })}
							thumbnail={post.urlToImage}
							description={post.description}
							title={post.title}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default SearchResults;
