import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ refs }) => {
	const { homeRef, aboutRef, projectRef, contactRef } = refs;
	const [activeTab, setActiveTab] = useState("home");
	const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

	const navigate = useNavigate();

	const handleScroll = (ref, tabName) => {
		navigate(`#${tabName}`); // Update URL
		setActiveTab(tabName);
		ref.current.scrollIntoView({ behavior: "smooth" });
		if (!isNavbarCollapsed) setIsNavbarCollapsed(true); // Collapse navbar after clicking
	};

	const toggleNavbar = () => {
		setIsNavbarCollapsed(!isNavbarCollapsed); // Toggle navbar collapse
	};

	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand font">AJ</a>
					<button
						className="navbar-toggler"
						type="button"
						aria-controls="navbarTogglerDemo02"
						aria-expanded={!isNavbarCollapsed}
						aria-label="Toggle navigation"
						onClick={toggleNavbar}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className={`collapse navbar-collapse navitem-ml ${
							isNavbarCollapsed ? "" : "show"
						}`}
						id="navbarTogglerDemo02"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li
								className={`nav-item ${activeTab === "home" ? "active1" : ""}`}
							>
								<NavLink
									to="/"
									className="nav-link"
									onClick={() => handleScroll(homeRef, "home")}
								>
									Home
								</NavLink>
							</li>
							<li
								className={`nav-item ${activeTab === "about" ? "active1" : ""}`}
							>
								<NavLink
									to="#about"
									className="nav-link"
									onClick={() => handleScroll(aboutRef, "about")}
								>
									About Me
								</NavLink>
							</li>
							<li
								className={`nav-item ${
									activeTab === "projects" ? "active1" : ""
								}`}
							>
								<NavLink
									to="#projects"
									className="nav-link"
									onClick={() => handleScroll(projectRef, "projects")}
								>
									Projects
								</NavLink>
							</li>
							<li
								className={`nav-item ${
									activeTab === "contact" ? "active1" : ""
								}`}
							>
								<NavLink
									to="#contact"
									className="nav-link"
									onClick={() => handleScroll(contactRef, "contact")}
								>
									Contact
								</NavLink>
							</li>
						</ul>
						<button
							className="btn btn1"
							onClick={() => handleScroll(contactRef, "contact")}
						>
							Connect with me
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
