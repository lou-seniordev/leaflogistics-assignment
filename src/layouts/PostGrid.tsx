import React from "react";
import styles from "./PostGrid.module.css";
import {Link} from 'react-router-dom'

interface PostGridProps {
	title: string;
	description: string;
	thumbnail: string;
	link: string;
	postId: string;
}

function PostGrid({
	title,
	description,
	thumbnail,
	link,
	postId,
}: PostGridProps) {
	return (
		<div className={`col-md-4 ${styles.card}`}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.thumbnail}>
				<img src={thumbnail} alt="" />
			</div>
			<p className={styles.description}>
				{ description}
			</p>
			<div>
				<Link to={link}>More</Link>
			</div>
		</div>
	);
}

export default PostGrid;
