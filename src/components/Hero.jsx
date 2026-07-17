import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api";

// Add / remove roles here — the typewriter picks them up automatically
const ROLES = [
	"Full Stack Developer",
	"Java & Spring Boot Developer",
	"REST API Developer"
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
			`${API_BASE_URL}/resume/download`,
			"_blank"
		);
	};

	const scrollToProjects = () => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	};

	return (

		<section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-grid pt-28 pb-16">

			<div className="absolute -left-24 top-1/3 w-[26rem] h-[26rem] bg-[var(--accent-soft)] rounded-full blur-3xl animate-blob"></div>

			<div className="container-custom grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center relative z-10">

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="w-full max-w-2xl lg:justify-self-center"
				>

					<p className="eyebrow mb-6">welcome to my portfolio</p>

					<h1 className="text-5xl md:text-6xl font-bold leading-[1.05] text-[var(--ink)]">
						Hi, I'm <span className="text-[var(--accent-strong)]">Abikumar</span>
					</h1>

					<div className="mt-5 h-9 flex items-center">
						<span
							className="text-xl md:text-2xl text-[var(--slate)] font-medium"
							style={{ fontFamily: "var(--mono)" }}
						>
							{displayText}
							<span className="inline-block w-[2px] h-6 bg-[var(--accent)] ml-1 align-middle animate-blink"></span>
						</span>
					</div>

					<p className="mt-6 text-[var(--slate)] text-lg leading-8 max-w-lg">
						I build backend services with Java and Spring Boot, and pair them with
						clean, responsive front ends. Based in Chennai, and always looking to
						learn and ship real, working software.
					</p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="mt-10 flex gap-4 flex-wrap"
					>

						<button
							onClick={scrollToProjects}
							className="btn-primary px-8 py-4 rounded-xl font-semibold hover:scale-[1.02] duration-300 shadow-lg shadow-black/5"
						>
							View Projects
						</button>

						<button
							onClick={downloadResume}
							className="btn-outline px-8 py-4 rounded-xl font-semibold duration-300"
						>
							Download Resume
						</button>

					</motion.div>

				</motion.div>

				{/* signature element — a small "editor window" summarizing the profile as code */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative w-full max-w-xl lg:justify-self-center"
				>

					<div className="card shadow-xl shadow-black/5 overflow-hidden">

						<div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--line)] bg-[var(--paper-alt)]">
							<span className="w-2.5 h-2.5 rounded-full bg-[#e3625c]"></span>
							<span className="w-2.5 h-2.5 rounded-full bg-[#e8b23d]"></span>
							<span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]"></span>
							<span
								className="ml-3 text-xs text-[var(--slate)]"
								style={{ fontFamily: "var(--mono)" }}
							>
								Profile.java
							</span>
						</div>

						<div
							className="p-6 md:p-8 text-sm md:text-[15px] leading-8 overflow-x-auto"
							style={{ fontFamily: "var(--mono)" }}
						>
							<p><span className="text-[var(--accent-strong)]">public class</span> Abikumar {"{"}</p>
							<p className="pl-5">role <span className="text-[var(--slate-soft)]">=</span> <span className="text-[var(--accent)]">"Full Stack Developer"</span>;</p>
							<p className="pl-5">stack <span className="text-[var(--slate-soft)]">=</span> [<span className="text-[var(--accent)]">"Java"</span>, <span className="text-[var(--accent)]">"Spring Boot"</span>, <span className="text-[var(--accent)]">"MySQL"</span>, <span className="text-[var(--accent)]">"React"</span>];</p>
							<p className="pl-5">location <span className="text-[var(--slate-soft)]">=</span> <span className="text-[var(--accent)]">"Chennai, India"</span>;</p>
							<p className="pl-5">status <span className="text-[var(--slate-soft)]">=</span> <span className="text-[var(--accent)]">"Open to opportunities"</span>;</p>
							<p>{"}"}</p>
						</div>

					</div>

				</motion.div>

			</div>

		</section>

	);
}

export default Hero;
