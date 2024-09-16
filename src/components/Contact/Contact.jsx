import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { contactsData } from "../../Data/contactData";

const Contact = () => {
	const form = useRef();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const sendEmail = (e) => {
		e.preventDefault();
		const { name, email, message } = formData;

		if (!name || !email || !message) {
			alert("Please fill out all fields.");
			return;
		}

		emailjs
			.sendForm(
				"service_l9dk31j", // Replace with your EmailJS service ID
				"template_9wfy7pi", // Replace with your EmailJS template ID
				form.current,
				"QY-l1mvFtlyBeYVvq" // Replace with your EmailJS public key
			)
			.then(
				() => {
					alert("Message sent successfully!");
					setFormData({ name: "", email: "", message: "" }); // Clear the form
				},
				(error) => {
					console.error("Failed to send message...", error.text);
					alert("Failed to send message. Please try again.");
				}
			);
	};

	return (
		<div className="container-fluid margin pt-4">
			<h1 className="heading">Get in touch</h1>
			<div className="row g-0 row-cols-1 row-cols-sm-1 row-cols-md-2 mt-5">
				<div className="col-md-6 col-sm-4  ">
					<form ref={form} onSubmit={sendEmail}>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="user_name"
								placeholder="Your Name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="user_email"
								placeholder="name@example.com"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="message" className="form-label">
								Message
							</label>
							<textarea
								className="form-control"
								id="message"
								name="message"
								rows="5"
								placeholder="Your Message"
								value={formData.message}
								onChange={handleChange}
								required
								style={{ resize: "none" }}
							></textarea>
						</div>
						<button type="submit" className="btn btn1">
							<span className="me-2">Send</span>
							<i
								className="fa-solid fa-paper-plane"
								style={{ color: "#f9fafb" }}
							></i>
						</button>
					</form>
				</div>
				<div className="col-md-6   icon icon-pad">
					<p>
						<i className="fas fa-envelope icon-size"></i>
						<span className="ps-3">{contactsData.email}</span>
					</p>
					<p>
						<i className="fas fa-phone-alt icon-size"></i>
						<span className="ps-3">{contactsData.phone}</span>
					</p>
					<p>
						<i className="fas fa-map-marker-alt icon-size"></i>
						<span className="ps-4">{contactsData.address}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
