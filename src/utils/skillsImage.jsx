import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import react from "../assets/svg/skills/react.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import wordpress from "../assets/svg/skills/wordpress.svg";
import nodejs from "../assets/svg/skills/nodejs.svg";
import expressjs from "../assets/svg/skills/expressjs.svg";

export const skillsImage = (skill) => {
	const skillID = skill.toLowerCase();
	switch (skillID) {
		case "html":
			return html;

		case "css":
			return css;

		case "javascript":
			return javascript;

		case "react":
			return react;

		case "bootstrap":
			return bootstrap;

		case "node":
			return nodejs;

		case "express":
			return expressjs;

		case "mongodb":
			return mongoDB;

		case "wordpress":
			return wordpress;

		default:
			break;
	}
};
