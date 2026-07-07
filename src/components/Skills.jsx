import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/api";

import {
	FaJava,
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaCode
} from "react-icons/fa";

import {
	SiSpringboot,
	SiMysql,
	SiApachekafka,
	SiRedis,
	SiJavascript,
	SiTailwindcss,
	SiDocker,
	SiPostman
} from "react-icons/si";

// Add a new mapping here whenever a new skill name is added on the backend —
// everything else (grid, animation, cards) updates automatically.
const ICON_MAP = {
	java: <FaJava />,
	react: <FaReact />,
	"spring boot": <SiSpringboot />,
	mysql: <SiMysql />,
	kafka: <SiApachekafka />,
	redis: <SiRedis />,
	html: <FaHtml5 />,
	css: <FaCss3Alt />,
	git: <FaGitAlt />,
	javascript: <SiJavascript />,
	tailwind: <SiTailwindcss />,
	"tailwind css": <SiTailwindcss />,
	docker: <SiDocker />,
	postman: <SiPostman />
};

const getIcon = (skillName = "") => ICON_MAP[skillName.toLowerCase()] || <FaCode />;

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

	const [skills, setSkills] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {

		loadSkills();

	}, []);

	const loadSkills = async () => {

		try {

			setLoading(true);

			const response = await axios.get(
				`${API_BASE_URL}/skill/list`
			);

			setSkills(response.data);
			setError(false);

		} catch (error) {

			console.log(error);
			setError(true);

		} finally {

			setLoading(false);
		}
	};

	return (

		<section id="skills" className="py-20 mt-12">

			<div className="container-custom">

				<motion.h1
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center text-5xl md:text-6xl font-bold mb-4"
				>
					My <span className="text-cyan-400">Skills</span>
				</motion.h1>

				<p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
					Technologies and tools I use to design, build, and ship full stack applications.
				</p>

				{loading && (

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
						{Array.from({ length: 8 }).map((_, i) => (
							<div
								key={i}
								className="skeleton rounded-[35px] p-10 h-[180px] border border-cyan-500/10"
							/>
						))}
					</div>

				)}

				{!loading && error && (
					<p className="text-center text-gray-400">
						Couldn't load skills right now — please try again shortly.
					</p>
				)}

				{!loading && !error && skills.length === 0 && (
					<p className="text-center text-gray-400">
						Skills will show up here once they're added.
					</p>
				)}

				{!loading && !error && skills.length > 0 && (

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}
						className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
					>

						{
							skills.map((skill) => (

								<motion.div
									key={skill.id}
									variants={cardVariants}
									whileHover={{
										y: -10,
										scale: 1.03
									}}
									className="group bg-slate-900/70 border border-cyan-500/10 rounded-[35px] p-10 flex flex-col items-center justify-center backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/40 duration-300"
								>

									<div className="text-7xl text-cyan-400 mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">

										{getIcon(skill.skillName)}

									</div>

									<h2 className="text-2xl font-semibold">

										{skill.skillName}

									</h2>

								</motion.div>

							))
						}

					</motion.div>

				)}

			</div>

		</section>

	);
}

export default Skills;
