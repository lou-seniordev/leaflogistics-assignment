import React from "react";
import { NavLink as PageLink } from "react-router-dom";
import styles from "./NavLink.module.css";

interface NavLinkProps {
	href: string;
	title: string;
}

function NavLink({ title, href }: NavLinkProps) {
	return (
		<PageLink
			to={href}
			className={({ isActive }) => (isActive ? styles.activeTab : styles.tab)}
		>
			{title}
		</PageLink>
	);
}

export default NavLink;
