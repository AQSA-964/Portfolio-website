import React from "react";
import "./About.css";
import img from "../../assets/png/student.png";
import { aboutData } from "../../Data/aboutData";

const About = () => {
	return (
		<div className="container-fluid margin">
			<div className="line">
				<hr className="custom-line1" />
			</div>
			<div class="row g-5 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 mt-md-4 mt-3">
				<div className="col-lg-6  order-2 order-lg-1">
					<h1 className="heading mb-4 mt-3 mt-md-0">{aboutData.title}</h1>
					<p className="display-7">{aboutData.para1}</p>
					<p className="display-7">{aboutData.para2}</p>
				</div>
				<div className="col-lg-6 imgs-set order-1 order-lg-2">
					<img className="about-img" src={img} alt="" />
				</div>
			</div>
		</div>
	);
};

export default About;
