import React from "react";
import { projectData } from "../../Data/projectData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
	return (
		<div
			className="container-fluid pt-3 margin pt-5"
			// style={{ border: "2px solid red" }}
		>
			<h1
				className="heading text-center pb-4"
				// style={{ border: "2px solid pink" }}
			>
				Projects
			</h1>
			<div
				class="row text-center gy-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 p-xs-5 p-sm-4 p-md-0 p-lg-0 mt-3"
				// style={{ border: "2px solid grey" }}
			>
				{projectData.map((project) => (
					<ProjectCard
						key={project.id}
						id={project.id}
						Name={project.projectName}
						tags={project.tags}
						code={project.code}
						demo={project.demo}
						img={project.imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
