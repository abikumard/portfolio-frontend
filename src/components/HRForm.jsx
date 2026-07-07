import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/api";

const FIELDS = [
	{ name: "hrName", label: "HR Name", type: "text", placeholder: "Enter HR Name" },
	{ name: "companyName", label: "Company Name", type: "text", placeholder: "Enter Company Name" },
	{ name: "email", label: "Email Address", type: "email", placeholder: "Enter Email Address" },
	{ name: "phone", label: "Phone Number", type: "text", placeholder: "Enter Phone Number" }
];

const INITIAL_STATE = {
	hrName: "",
	companyName: "",
	email: "",
	phone: "",
	requirementDetails: ""
};

function HRForm() {

	const [formData, setFormData] = useState(INITIAL_STATE);
	const [submitting, setSubmitting] = useState(false);
	const [status, setStatus] = useState(null); // { type: "success" | "error", message }

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const validate = () => {
		if (!formData.hrName.trim() || !formData.companyName.trim() || !formData.email.trim()) {
			return "Please fill in your name, company, and email.";
		}
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(formData.email)) {
			return "Please enter a valid email address.";
		}
		return null;
	};

	const handleSubmit = async () => {

		const validationError = validate();

		if (validationError) {
			setStatus({ type: "error", message: validationError });
			return;
		}

		try {

			setSubmitting(true);
			setStatus(null);

			await axios.post(
				`${API_BASE_URL}/hr/save`,
				formData
			);

			setStatus({ type: "success", message: "Thanks! Your details were submitted — I'll get back to you soon." });
			setFormData(INITIAL_STATE);

		} catch (error) {

			console.error(error);
			setStatus({ type: "error", message: "Something went wrong while saving your details. Please try again." });

		} finally {

			setSubmitting(false);
		}
	};

	return (

		<section id="hire" className="py-32 px-6 flex items-center justify-center relative overflow-hidden">

			<div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>

			<motion.div
				initial={{ opacity: 0, y: 80 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="w-full max-w-5xl bg-slate-900/70 border border-cyan-500/10 rounded-[40px] p-8 md:p-16 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 relative z-10"
			>

				<div className="text-center mb-10">

					<h1 className="text-4xl md:text-6xl font-bold leading-tight">
						Interested To
						<span className="text-cyan-400"> Hire Me?</span>
					</h1>

					<p className="text-gray-400 mt-4">
						Share a few details and I'll reach out to discuss the opportunity.
					</p>

				</div>

				<div className="grid md:grid-cols-2 gap-8">

					{FIELDS.map((field) => (

						<div key={field.name} className="flex flex-col gap-3">

							<label className="text-gray-300 text-lg">
								{field.label}
							</label>

							<input
								type={field.type}
								name={field.name}
								value={formData[field.name]}
								onChange={handleChange}
								placeholder={field.placeholder}
								className="bg-slate-800/80 border border-cyan-500/10 px-6 py-4 rounded-2xl outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
							/>

						</div>

					))}

				</div>

				<div className="mt-8 flex flex-col gap-3">

					<label className="text-gray-300 text-lg">
						Requirement Details
					</label>

					<textarea
						rows="5"
						name="requirementDetails"
						value={formData.requirementDetails}
						onChange={handleChange}
						placeholder="Describe your requirement..."
						className="w-full bg-slate-800/80 border border-cyan-500/10 px-6 py-4 rounded-2xl outline-none resize-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
					></textarea>

				</div>

				<AnimatePresence>

					{status && (

						<motion.p
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							className={`mt-6 text-center font-medium ${
								status.type === "success" ? "text-cyan-400" : "text-red-400"
							}`}
						>
							{status.message}
						</motion.p>

					)}

				</AnimatePresence>

				<button
					onClick={handleSubmit}
					disabled={submitting}
					className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed py-5 rounded-2xl text-xl font-semibold duration-300 flex items-center justify-center gap-3"
				>
					{submitting && (
						<span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
					)}
					{submitting ? "Submitting..." : "Submit Details"}
				</button>

			</motion.div>

		</section>

	)
}

export default HRForm
