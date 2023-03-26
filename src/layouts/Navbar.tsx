import React from "react";
import { NavLink as TabLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import navs from "../lib/navs";
import NavLink from "./NavLink";
import countries from "../lib/countries";
import { AppContext } from "../contexts/AppProvider";

function Navbar() {
	return (
		<nav className={styles.navigation}>
			{navs.map((nav, key) => (
				<NavLink key={key} title={nav.title} href={nav.href} />
			))}
			<CountryOfInterest />
		</nav>
	);
}

function CountryOfInterest() {
	const appCxt = React.useContext(AppContext);

	return (
		<div className={styles.countryTabs}>
			{countries.map((country: any, key) => (
				<TabLink key={key}
					to={"#"}
					onClick={(ev) => {
						ev.preventDefault();
						appCxt?.setCountry(country);
					}}
					className={() =>
						country.label === appCxt?.country.label
							? styles.activeCountryButton
							: styles.countryButton
					}
				>
					{country.label}
				</TabLink>
			))}
		</div>
	);
}

export default Navbar;
