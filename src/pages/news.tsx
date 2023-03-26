import React from "react";
import styles from "./news.module.css"
import { AppContext } from "../contexts/AppProvider";
import Layouts from "../layouts/Layouts";
import PostGrid from "../layouts/PostGrid";
import endpoints from "../lib/endpoints";
import generateSlug from "../lib/generateSlug";
import request from "../request";

function News() {
	const appCxt = React.useContext(AppContext);
	const [articles, setArticles] = React.useState<any[]>([]);

	const fetchData = React.useCallback(async () => {
		const reqData = (
			await request.get(endpoints.articles, {
				params: {
					country: appCxt?.country.label,
				},
			})
		).data;
		setArticles(reqData.articles);
	}, [appCxt?.country.label]);

	React.useEffect(() => {
		(async ()=>{
			await fetchData();
		})()
	}, [appCxt?.country.label, fetchData]);

	return (
		<Layouts>
			<section>
				<div>
					<h3 className={styles.pageText}> Top news from {appCxt?.country.name}</h3>
				</div>
				<div className="row ">
					{articles.map((post, key) => (
						<PostGrid
							key={key}
							postId={post.source.id}
							link={generateSlug({ parent: "/news/", title: post.title })}
							thumbnail={post.urlToImage}
							description={post.description}
							title={post.title}
						/>
					))}
					<div className="col-md-4"></div>
				</div>
			</section>
		</Layouts>
	);
}

export default News;
