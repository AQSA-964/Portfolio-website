import React from "react";

const ExperienceCard = ({ id, company, job, startYear, endYear }) => {
	return (
		<div class="col-12 col-sm-12 col-md-12 edu-col rounded-4">
			<div class="p-3 p-sm-4 p-md-4 p-lg-4">
				<h6
					className="card-text date-txt"
					style={{ color: "rgb(222, 121, 138)" }}
				>
					{startYear} - {endYear}
				</h6>
				<h4 className="card-text course-txt">{job}</h4>
				<h5
					className="card-text instit-txt"
					style={{ color: "rgb(188, 181, 181)" }}
				>
					{company}
				</h5>
			</div>
		</div>
	);
};

export default ExperienceCard;
