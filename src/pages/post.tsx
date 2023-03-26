import React from "react";
import Layouts from "../layouts/Layouts";
import { useParams } from "react-router-dom";
import replaceChar from "../lib/replaceChar";
import request from "../request";
import PostContent from "../components/PostContent";
import endpoints from "../lib/endpoints";
import { AppContext } from "../contexts/AppProvider";

function Post() {
	const params = useParams();
	const appCxt = React.useContext(AppContext);

	const [item, setItem] = React.useState<Record<string, any>>({});

	const slug = replaceChar(params.slug, "-", " ");

	const fetchArticle = React.useCallback(async () => {
		const reqData = await (
			await request.get(endpoints.articles, {
				params: {
					country: appCxt?.country.label,
				},
			})
		).data;

		for (const article of reqData.articles) {
			let aTitle = replaceChar(article.title, "-", " ");
			if (aTitle === slug) {
				setItem((current) => (article.title ? article : current));
				break;
			}
		}
	}, [appCxt?.country.label, slug]);

	React.useEffect(() => {
		(async ()=>{
			await fetchArticle();
		})()
	}, [appCxt?.country.label, params.slug, fetchArticle]);

	return (
		<Layouts>
			{item.title && (
				<PostContent
					title={item.title}
					content={item.content}
					postId=""
					thumbnail={item.urlToImage}
					link=""
				/>
			)}
		</Layouts>
	);
}

export default Post;
