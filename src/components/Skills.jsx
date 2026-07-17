import { motion } from "framer-motion";

import {
	FaJava,
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
	FaCode
} from "react-icons/fa";

import {
	SiSpringboot,
	SiMysql
} from "react-icons/si";

// Straight from the resume — add or edit a skill here and the grid updates automatically.
const SKILLS = [
	{ name: "Java", icon: <FaJava /> },
	{ name: "Spring Boot", icon: <SiSpringboot /> },
	{ name: "MySQL", icon: <SiMysql /> },
	{ name: "HTML", icon: <FaHtml5 /> },
	{ name: "CSS", icon: <FaCss3Alt /> },
	{ name: "Git & GitHub", icon: <FaGithub /> },
	{ name: "VS Code", icon: <FaCode /> },
	{ name: "Eclipse", icon: <FaCode /> }
];

const CERTIFICATIONS = [
	"Java Full Stack Development — SLA Institute",
	"MySQL — Udemy"
];

const containerVariants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.08 }
	}
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Skills() {

	return (

		<section id="skills" className="section-alt pt-24">

			<div className="container-custom">

				<p className="eyebrow mb-4 justify-center flex">skills</p>

				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center text-4xl md:text-5xl font-bold mb-4 text-[var(--ink)]"
				>
					Skills <span className="text-[var(--accent-strong)]">& Tools</span>
				</motion.h1>

				<p className="text-center text-[var(--slate)] mb-16 max-w-xl mx-auto">
					The languages, frameworks, and tools I use day to day.
				</p>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					className="grid grid-cols-2 md:grid-cols-4 gap-6"
				>

					{
						SKILLS.map((skill) => (

							<motion.div
								key={skill.name}
								variants={cardVariants}
								whileHover={{ y: -6 }}
								className="card group p-8 flex flex-col items-center justify-center text-center hover:border-[var(--accent)] hover:shadow-lg hover:shadow-black/5 duration-300"
							>

								<div className="text-5xl text-[var(--accent-strong)] mb-5 transition-transform duration-500 group-hover:scale-110">
									{skill.icon}
								</div>

								<h2 className="text-lg font-semibold text-[var(--ink)]">
									{skill.name}
								</h2>

							</motion.div>

						))
					}

				</motion.div>

				<div className="mt-14 flex flex-wrap justify-center gap-4">

					{CERTIFICATIONS.map((cert) => (

						<span
							key={cert}
							className="px-5 py-3 rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)] text-sm font-medium border border-[var(--accent-soft-2)]"
						>
							{cert}
						</span>

					))}

				</div>

			</div>

		</section>

	);
}

export default Skills;
