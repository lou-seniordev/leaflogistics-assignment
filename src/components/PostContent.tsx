import React from "react";
import styles from "./PostContent.module.css";

interface PostContentProps {
	title: string;
	content: string;
	thumbnail: string;
	link: string;
	postId: string;
}

function PostContent({
	title,
	content,
	thumbnail,
	link,
	postId,
}: PostContentProps) {
	return (
		<div className={`container ${styles.card}`}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.thumbnail}>
				<img src={thumbnail} alt="" />
			</div>
			<p className={styles.content}>{content}</p>
			<div >
				<a  className={styles.backLink} href={"/news"}>Back to List</a>
			</div>
		</div>
	);
}

export default PostContent;
