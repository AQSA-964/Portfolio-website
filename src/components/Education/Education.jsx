import React from "react";
import "./Education.css";
import { educationData } from "../../Data/educationData";
import EducationCard from "./EducationCard";
import img from "../../assets/png/education.png";

const Education = () => {
	return (
		<div className="container-fluid margin">
			<div class="row g-0 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 mt-3">
				<div className="col-lg-6 col-md-12 col-sm-12 col-12">
					<h1 className="heading mb-5">Education</h1>
					<div class="row gy-4 m-1" s>
						{educationData.map((edu) => (
							<EducationCard
								key={edu.id}
								id={edu.id}
								institution={edu.institution}
								course={edu.course}
								startYear={edu.startYear}
								endYear={edu.endYear}
							/>
						))}
					</div>
				</div>
				<div className="col-lg-5 img1-set d-none d-lg-block">
					<img className="edu-img" src={img} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Education;
