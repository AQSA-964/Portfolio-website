import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);

	// This effect triggers smooth scrolling when the URL changes
	const location = useLocation();

	useEffect(() => {
		const hash = location.hash.substring(1); // remove #
		if (hash === "home" && homeRef.current) {
			homeRef.current.scrollIntoView({ behavior: "smooth" });
		} else if (hash === "about" && aboutRef.current) {
			aboutRef.current.scrollIntoView({ behavior: "smooth" });
		} else if (hash === "projects" && projectRef.current) {
			projectRef.current.scrollIntoView({ behavior: "smooth" });
		} else if (hash === "contact" && contactRef.current) {
			contactRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

	return (
		<div>
			<Navbar refs={{ homeRef, aboutRef, projectRef, contactRef }} />
			<hr className="custom-line" />
			<section ref={homeRef} id="home">
				<Hero contactRef={contactRef} />
			</section>

			<section ref={aboutRef} id="about">
				<About />
				<Education />
				<Skills />
				<Experience />
			</section>
			<section ref={projectRef} id="projects">
				<Projects />
			</section>
			<section ref={contactRef} id="contact">
				<Contact />
			</section>
			<hr className="custom-line" />
			<Footer />
		</div>
	);
}
