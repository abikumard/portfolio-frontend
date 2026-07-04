import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Experience.css";

function Experience() {

	const [experienceData, setExperienceData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {

		loadExperience();

	}, []);

	const loadExperience = async () => {

		try {

			setLoading(true);

			const response = await axios.get(
				"http://localhost:8080/experience/list"
			);

			setExperienceData(response.data);
			setError(false);

		} catch (error) {

			console.log(error);
			setError(true);

		} finally {

			setLoading(false);
		}

	};

	return (

		<section id="experience" className="experience-section">

			<div className="experience-container">

				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="experience-title"
				>

					My <span>Experience</span>

				</motion.h1>

				<p className="experience-subtitle">
					A quick timeline of the roles that shaped how I build software.
				</p>

				{loading && (

					<div className="experience-timeline">
						{Array.from({ length: 2 }).map((_, i) => (
							<div key={i} className="experience-row">
								<div className="experience-dot-col">
									<div className="experience-dot" />
									<div className="experience-line" />
								</div>
								<div className="skeleton" style={{ height: 140, borderRadius: 24, flex: 1, marginBottom: 40 }} />
							</div>
						))}
					</div>

				)}

				{!loading && error && (
					<p className="experience-empty">
						Couldn't load experience right now — please try again shortly.
					</p>
				)}

				{!loading && !error && experienceData.length === 0 && (
					<p className="experience-empty">
						Experience timeline will show up here once entries are added.
					</p>
				)}

				{!loading && !error && experienceData.length > 0 && (

					<div className="experience-timeline">

						{
							experienceData.map((item, index) => (

								<motion.div
									key={item.id}
									initial={{ opacity: 0, y: 60 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="experience-row"
								>

									<div className="experience-dot-col">
										<span className="experience-dot" />
										{index !== experienceData.length - 1 && (
											<span className="experience-line" />
										)}
									</div>

									<motion.div
										whileHover={{ y: -6 }}
										className="experience-card"
									>

										<div className="experience-top">

											<h2>{item.designation}</h2>

											<span className="duration">

												{item.duration}

											</span>

										</div>

										<p className="company-name">

											{item.company}

										</p>

										<p className="experience-description">

											{item.description}

										</p>

									</motion.div>

								</motion.div>

							))
						}

					</div>

				)}

			</div>

		</section>

	);

}

export default Experience;
