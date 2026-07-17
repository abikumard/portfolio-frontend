import { motion } from "framer-motion";
import "./Experience.css";

// Straight from the resume's EXPERIENCE section.
const EXPERIENCE_DATA = [
	{
		id: 1,
		designation: "Associate Software Engineer (Spring Boot)",
		company: "Cognitive Mobiles Technology",
		duration: "8 Months",
		description:
			"Worked on Spring Boot–based backend development, building and maintaining REST APIs. Contributed to real-world projects, strengthening skills in Java, Spring Boot, and MySQL. Collaborated with a development team on feature implementation and issue resolution."
	}
];

function Experience() {

	return (

		<section id="experience" className="experience-section">

			<div className="experience-container">

				<p className="eyebrow experience-eyebrow">experience</p>

				<motion.h1
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="experience-title"
				>

					My <span>Experience</span>

				</motion.h1>

				<p className="experience-subtitle">
					A quick timeline of the roles that shaped how I build software.
				</p>

				<div className="experience-timeline">

					{
						EXPERIENCE_DATA.map((item, index) => (

							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="experience-row"
							>

								<div className="experience-dot-col">
									<span className="experience-dot" />
									{index !== EXPERIENCE_DATA.length - 1 && (
										<span className="experience-line" />
									)}
								</div>

								<motion.div
									whileHover={{ y: -4 }}
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

			</div>

		</section>

	);

}

export default Experience;
