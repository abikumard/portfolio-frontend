import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import img1 from "../assets/project-1.svg";
import img2 from "../assets/project-2.svg";
import img3 from "../assets/project-3.svg";

const FALLBACK_IMAGES = [img1, img2, img3];

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};

function Projects() {

	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {

		loadProjects();

	}, []);

	const loadProjects = async () => {

		try {

			setLoading(true);

			const response = await axios.get(
				"http://localhost:8080/project/list"
			);

			setProjects(response.data);
			setError(false);

		} catch (error) {

			console.log(error);
			setError(true);

		} finally {

			setLoading(false);
		}
	};

	return (

		<section id="projects" className="py-20">

			<div className="container-custom">

				<motion.h1
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center text-5xl md:text-6xl font-bold mb-4"
				>
					My <span className="text-cyan-400">Projects</span>
				</motion.h1>

				<p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
					A selection of things I've built end to end — from database to UI.
				</p>

				{loading && (

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
						{Array.from({ length: 3 }).map((_, i) => (
							<div key={i} className="rounded-[35px] overflow-hidden border border-cyan-500/10">
								<div className="skeleton h-64" />
								<div className="p-8 space-y-4">
									<div className="skeleton h-6 w-2/3 rounded-full" />
									<div className="skeleton h-4 w-full rounded-full" />
									<div className="skeleton h-4 w-5/6 rounded-full" />
								</div>
							</div>
						))}
					</div>

				)}

				{!loading && error && (
					<p className="text-center text-gray-400">
						Couldn't load projects right now — please try again shortly.
					</p>
				)}

				{!loading && !error && projects.length === 0 && (
					<p className="text-center text-gray-400">
						Projects will show up here once they're added.
					</p>
				)}

				{!loading && !error && projects.length > 0 && (

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.15 }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
					>

						{
							projects.map((project, index) => (

								<motion.div
									key={project.id}
									variants={cardVariants}
									whileHover={{ y: -10 }}
									className="bg-slate-900/70 rounded-[35px] overflow-hidden border border-cyan-500/10 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30 duration-300 flex flex-col"
								>

									<div className="h-64 overflow-hidden rounded-t-[35px]">

										<img
											src={project.image || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]}
											alt={project.title}
											className="w-full h-full object-cover object-center block transition-transform duration-500 hover:scale-110"
											loading="lazy"
										/>

									</div>

									<div className="p-8 flex flex-col justify-between flex-1">

										<div>

											<h2 className="text-2xl font-bold mb-4">

												{project.title}

											</h2>

											<p className="text-gray-300 leading-7">

												{project.description}

											</p>

											{project.technologies && (

												<div className="flex flex-wrap gap-2 mt-5">

													{project.technologies.split(",").map((tech) => (

														<span
															key={tech}
															className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
														>
															{tech.trim()}
														</span>

													))}

												</div>

											)}

										</div>

										<div className="mt-8 flex items-center justify-end gap-4">

											{project.liveLink && (

												<a href={project.liveLink} target="_blank" rel="noreferrer">
													<button className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-cyan-400 duration-300">
														<FaExternalLinkAlt size={14} /> Live Demo
													</button>
												</a>

											)}

											{project.githubLink && (

												<a href={project.githubLink} target="_blank" rel="noreferrer">
													<button className="flex items-center gap-2 border border-cyan-400 px-5 py-3 rounded-xl hover:bg-cyan-500 duration-300 font-semibold">
														<FaGithub size={16} /> GitHub
													</button>
												</a>

											)}

										</div>

									</div>

								</motion.div>

							))
						}

					</motion.div>

				)}

			</div>

		</section>

	);
}

export default Projects;
