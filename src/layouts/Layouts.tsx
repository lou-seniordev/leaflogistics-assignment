import React from "react";
import Header from "./Header";
import styles from "./Layouts.module.css";

function Layouts({ children }: React.PropsWithChildren) {
	return (
		<div className={`container ${styles.layout}`}>
			<Header />
			<div className={styles.content}>{children}</div>
		</div>
	);
}

export default Layouts;
