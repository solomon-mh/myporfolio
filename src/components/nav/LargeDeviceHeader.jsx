/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import {
	faChalkboardUser,
	faContactBook,
	faHome,
	faLaptopCode, // Import the new icon
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lightLogoR from "../../assets/logo/lightLogoR.png";
import darkLogoR1 from "../../assets/logo/darkLogoR1.png";

const LargeDeviceHeader = ({ currentSection, scrollToSection }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		}
	}, []);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
	};

	return (
		<header className="hidden md:flex min-w-full left-0 fixed justify-between items-center z-50 bg-slate-200 dark:bg-headerColor text-white text-xl py-4 px-8 top-0">
			<div className={`relative w-64 h-20 overflow-hidden rounded-2xl`}>
				<img
					className="absolute inset-0 w-full h-full object-cover"
					src={isDarkMode ? darkLogoR1 : lightLogoR}
					alt="Logo"
				/>
			</div>

			<nav className="dark:text-white text-center text-slate-800 flex ml-auto xl:mr-20 space-x-6">
				<NavLink
					onClick={() => scrollToSection("home")}
					className={`navlinks ${
						currentSection === "home" ? "text-brightRed" : ""
					}`}
				>
					<FontAwesomeIcon icon={faHome} />
					<br />
					Home
				</NavLink>
				<NavLink
					onClick={() => scrollToSection("about")}
					className={`navlinks ${
						currentSection === "about" ? "text-brightRed" : ""
					}`}
				>
					<FontAwesomeIcon icon={faChalkboardUser} />
					<br />
					About
				</NavLink>
				<NavLink
					onClick={() => scrollToSection("services")}
					className={`navlinks ${
						currentSection === "services" ? "text-brightRed" : ""
					}`}
				>
					<FontAwesomeIcon icon={faLaptopCode} />
					<br />
					Services + Projects
				</NavLink>
				<NavLink
					onClick={() => scrollToSection("contact")}
					className={`navlinks ${
						currentSection === "contact" ? "text-brightRed" : ""
					}`}
				>
					<FontAwesomeIcon icon={faContactBook} />
					<br />
					Contact Me
				</NavLink>
				<button
					id="theme-toggle"
					onClick={toggleTheme}
					className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
				>
					{isDarkMode ? (
						<SunIcon className="w-6 h-6 text-yellow-500" />
					) : (
						<MoonIcon className="w-6 h-6 text-gray-800" />
					)}
				</button>
			</nav>
		</header>
	);
};

export default LargeDeviceHeader;
