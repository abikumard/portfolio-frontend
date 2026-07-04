import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

// Add / remove roles here — the typewriter picks them up automatically
const ROLES = [
	"Java Full Stack Developer",
	"React.js Developer",
	"Spring Boot Developer"
];

// Add / remove floating tech badges here
const TECH_BADGES = [
	{ icon: <FaJava />, label: "Java" },
	{ icon: <FaReact />, label: "React" },
	{ icon: <SiSpringboot />, label: "Spring Boot" },
	{ icon: <SiMysql />, label: "MySQL" }
];

function Hero() {

	const [roleIndex, setRoleIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {

		const currentRole = ROLES[roleIndex % ROLES.length];
		let timeout;

		if (!deleting && displayText.length < currentRole.length) {
			timeout = setTimeout(() => {
				setDisplayText(currentRole.slice(0, displayText.length + 1));
			}, 60);
		} else if (!deleting && displayText.length === currentRole.length) {
			timeout = setTimeout(() => setDeleting(true), 1400);
		} else if (deleting && displayText.length > 0) {
			timeout = setTimeout(() => {
				setDisplayText(currentRole.slice(0, displayText.length - 1));
			}, 30);
		} else if (deleting && displayText.length === 0) {
			setDeleting(false);
			setRoleIndex((prev) => prev + 1);
		}

		return () => clearTimeout(timeout);

	}, [displayText, deleting, roleIndex]);

	const downloadResume = () => {
		window.open(
			"http://localhost:8080/resume/download",
			"_blank"
		);
	};

	const scrollToProjects = () => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	};

	return (

		<section id="home" className="min-h-screen flex justify-center items-center relative overflow-hidden bg-grid">

			<div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl animate-blob"></div>
			<div className="absolute right-10 bottom-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>

			{/* floating tech badges — decorative, hidden on small screens */}
			<div className="hidden lg:block absolute inset-0 pointer-events-none">

				{TECH_BADGES.map((badge, i) => (

					<motion.div
						key={badge.label}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.8 + i * 0.15, duration: 0.6 }}
						className="animate-float absolute flex items-center gap-2 bg-slate-900/70 border border-cyan-500/20 rounded-full px-4 py-2 backdrop-blur-xl text-cyan-300 text-sm font-medium shadow-lg"
						style={{
							top: ["18%", "70%", "28%", "68%"][i],
							left: ["8%", "12%", "84%", "80%"][i],
							animationDelay: `${i * 0.7}s`
						}}
					>
						<span className="text-lg">{badge.icon}</span>
						{badge.label}
					</motion.div>

				))}

			</div>

			<div className="container-custom text-center z-10">

				<motion.p
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold mb-6"
				>
					Welcome to my portfolio
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-5xl md:text-7xl font-extrabold"
				>
					Hi, I'm
					<span className="text-cyan-400"> Abikumar</span>
				</motion.h1>

				<div className="mt-6 h-9 flex items-center justify-center">
					<span className="text-xl md:text-2xl text-gray-300 font-medium">
						{displayText}
						<span className="inline-block w-[2px] h-6 bg-cyan-400 ml-1 align-middle animate-pulse"></span>
					</span>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.4 }}
					className="mt-10 flex justify-center gap-6 flex-wrap"
				>

					<button
						onClick={scrollToProjects}
						className="w-[220px] bg-cyan-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 hover:bg-cyan-400 duration-300 shadow-lg shadow-cyan-500/30"
					>
						View Projects
					</button>

					<button
						onClick={downloadResume}
						className="w-[220px] border border-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-500 duration-300 font-semibold"
					>
						Download Resume
					</button>

				</motion.div>

			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [0, 8, 0] }}
				transition={{ opacity: { delay: 2 }, y: { duration: 1.8, repeat: Infinity } }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/70 text-2xl"
			>
				↓
			</motion.div>

		</section>

	);
}

export default Hero;
