import React from "react";
// import img from "../../assets/png/p1.png";
const ProjectCard = ({ id, Name, tags, code, img, demo }) => {
	return (
		// <div class="col-12 col-sm-6 col-md-6 col-lg-4 edu-col rounded-4 mx-1">
		<div class="col-12 col-sm-6 col-md-6 col-lg-4 m-xs-5">
			{/* proj-design rounded-4 */}
			<div
				class="p-3 p-sm-4 p-md-4 p-lg-4 d-flex align-items-center justify-content-center"
				// style={{ border: "2px solid white" }}
			>
				<div class="card styl bg" style={{ width: "17rem" }}>
					<img
						src={img}
						class="card-img-top"
						alt="Project images"
						style={{ height: "150px" }}
					/>
					<div class="card-body">
						<h5 class="card-title">{Name}</h5>
						<p class="card-text tag-txt">{tags}</p>
						<a
							href={code}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary me-1"
						>
							<span> Code </span>
							<i className="fa-solid fa-code" style={{ color: "#e8e8e8" }}></i>
						</a>
						<a
							href={demo}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary ms-1"
						>
							<span> Demo </span>
							<i
								className="fa-regular fa-circle-play"
								style={{ color: "#e8e8e8" }}
							></i>
						</a>
					</div>
				</div>
				{/* <h5>{Name}</h5>
				<p className="desc-txt">{Desc}</p>
				<p className="tag-txt">{tags}</p>
				<p>{code}</p> */}
			</div>
		</div>
	);
};

export default ProjectCard;
