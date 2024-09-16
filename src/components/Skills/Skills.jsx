import React from "react";
import "./Skills.css";
// import SkillsBox from "./SkillsBox";
import { skillsData } from "../../Data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

const Skills = () => {
	return (
		<div className="container-fluid margin pt-5">
			<h1 className="text-center heading pb-4">Skills</h1>
			<div class="container text-center">
				<div class="row justify-content-center align-items-center row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 gy-5 p-md-5 mb-5">
					{skillsData.map((skill, id) => (
						<div class="col box mx-3">
							<img src={skillsImage(skill)} alt={skill} />
							<div class="p-3">{skill}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
