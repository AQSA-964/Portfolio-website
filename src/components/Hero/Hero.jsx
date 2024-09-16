import React from "react";
import "./Hero.css";
import img from "../../assets/jpeg/picture.jpeg";
import { heroData } from "../../Data/heroData";
const Hero = ({ contactRef }) => {
	const handleScroll = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<div className="container-fluid section-length">
				<div class="row g-0 text-center row-cols-1 row-cols-sm-1 row-cols-md-2 mt-md-5 mt-4">
					<div class="col d-flex align-items-end justify-content-center">
						<img src={img} class="round-image" alt="..." />
					</div>
					<div class="col mt-md-5 mt-sm-4 mt-5">
						<h3>I'm</h3>
						<h1 className="design">{heroData.name}</h1>
						<h3 className="mt-3">{heroData.title}</h3>
						<div className="mt-5">
							{heroData.resumePdf && (
								<a
									href={heroData.resumePdf}
									download="resume"
									target="_blank"
									rel="noreferrer"
								>
									<button className="btn btn2 btn3 mx-3 mb-4">
										Download CV
									</button>
								</a>
							)}

							<button
								className="btn btn2 btn4 mx-3 mb-4"
								onClick={() => handleScroll(contactRef)}
							>
								Contact me
							</button>
						</div>
						<div>
							<a
								style={{ color: "white" }}
								href="https://www.linkedin.com/in/aqsajabeen"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-linkedin display-6 mx-3 enlg"></i>
							</a>
							<a
								style={{ color: "white" }}
								href="https://github.com/AQSA-964"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-github display-6 mx-3 enlg"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
