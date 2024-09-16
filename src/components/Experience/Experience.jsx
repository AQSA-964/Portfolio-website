import React from "react";
import "./Experience.css";
import { experienceData } from "../../Data/experienceData";
import ExperienceCard from "./ExperienceCard";
import img from "../../assets/png/experience.png";

const Experience = () => {
	return (
		<div className="container-fluid margin ">
			<div class="row g-0 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 mt-3">
				<div className="col-lg-5 img2-set d-none d-lg-block">
					<img className="exp-img" src={img} alt="" />
				</div>
				<div className="col-lg-7 col-md-12 col-sm-12 col-12">
					<h1 className="heading text-lg-end text-md-center text-xs-center mb-5">
						Experience
					</h1>
					<div class="row gy-3 m-1">
						{experienceData.map((exp) => (
							<ExperienceCard
								key={exp.id}
								id={exp.id}
								company={exp.company}
								job={exp.job}
								startYear={exp.startYear}
								endYear={exp.endYear}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
