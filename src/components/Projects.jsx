import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import img1 from "../assets/project-1.svg";

// Straight from the resume's PROJECT section — edit here to add more later.
const PROJECTS = [
	{
		id: 1,
		title: "Coffee Premium",
		subtitle: "Coffee Shop Website · Team Size: 1",
		description:
			"A full-stack coffee shop website that lets customers explore products, place reservations, and interact with a modern, responsive interface. Frontend built with React.js, Vite, and Tailwind CSS; backend built with Spring Boot, integrated with a MySQL database through REST APIs.",
		technologies: ["React.js", "Spring Boot", "MySQL", "Tailwind CSS", "Vite", "REST API"],
		liveLink: "https://coffee-premium-frontend.vercel.app",
		image: img1
	}
];

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

function Projects() {

	return (

		<section id="projects">

			<div className="container-custom">

				<p className="eyebrow mb-4 justify-center flex">projects</p>

				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center text-4xl md:text-5xl font-bold mb-4 text-[var(--ink)]"
				>
					My <span className="text-[var(--accent-strong)]">Projects</span>
				</motion.h1>

				<p className="text-center text-[var(--slate)] mb-16 max-w-xl mx-auto">
					Something I've built end to end — from database to UI.
				</p>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.15 }}
					className="grid md:grid-cols-1 max-w-3xl mx-auto gap-12"
				>

					{
						PROJECTS.map((project) => (

							<motion.div
								key={project.id}
								variants={cardVariants}
								whileHover={{ y: -6 }}
								className="card overflow-hidden hover:shadow-xl hover:shadow-black/5 duration-300 flex flex-col md:flex-row"
							>

								<div className="md:w-2/5 h-56 md:h-auto overflow-hidden">

									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover object-center block"
										loading="lazy"
									/>

								</div>

								<div className="p-8 flex flex-col justify-between flex-1">

									<div>

										<h2 className="text-2xl font-bold mb-1 text-[var(--ink)]">
											{project.title}
										</h2>

										<p
											className="text-sm text-[var(--slate-soft)] mb-4"
											style={{ fontFamily: "var(--mono)" }}
										>
											{project.subtitle}
										</p>

										<p className="text-[var(--slate)] leading-7">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2 mt-5">

											{project.technologies.map((tech) => (

												<span
													key={tech}
													className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--accent-soft-2)]"
												>
													{tech}
												</span>

											))}

										</div>

									</div>

									<div className="mt-8 flex items-center justify-end">

										<a href={project.liveLink} target="_blank" rel="noreferrer">
											<button className="flex items-center gap-2 btn-primary px-5 py-3 rounded-xl font-semibold hover:scale-[1.02] duration-300">
												<FaExternalLinkAlt size={14} /> Live Demo
											</button>
										</a>

									</div>

								</div>

							</motion.div>

						))
					}

				</motion.div>

			</div>

		</section>

	);
}

export default Projects;
