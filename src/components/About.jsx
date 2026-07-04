import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Add / edit quick-fact rows here — the card re-renders automatically
const QUICK_FACTS = [
	{ label: "Name", value: "Abikumar" },
	{ label: "Role", value: "Java Full Stack Developer" },
	{ label: "Location", value: "Chennai" },
	{ label: "Email", value: "abikumarr003@gmail.com" }
];

// Add / edit highlight stats here
const STATS = [
	{ label: "Years Learning & Building", value: 2 },
	{ label: "Projects Completed", value: 6 },
	{ label: "Core Technologies", value: 9 }
];

function StatCounter({ value, label }) {

	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-50px" });
	const [display, setDisplay] = useState(0);

	useEffect(() => {

		if (inView) {
			const controls = animate(0, value, {
				duration: 1.4,
				onUpdate: (v) => setDisplay(Math.round(v))
			});
			return () => controls.stop();
		}

	}, [inView, value]);

	return (

		<div ref={ref} className="text-center">
			<p className="text-4xl md:text-5xl font-extrabold text-cyan-400">
				{display}+
			</p>
			<p className="text-gray-400 text-sm mt-2">{label}</p>
		</div>

	);
}

function About() {

	return (

		<section id="about" className="py-20">

			<div className="container-custom grid lg:grid-cols-2 gap-24 items-center">

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.9 }}
				>

					<h1 className="text-5xl font-bold mb-8">
						About <span className="text-cyan-400">Me</span>
					</h1>

					<p className="text-gray-300 text-lg leading-9">

						I am <span className="text-cyan-400 font-semibold">Abikumar</span>,
						a passionate Java Full Stack Developer from Chennai.

						I completed my B.Tech Information Technology degree at
						Kings Engineering College.

						I specialize in building responsive and scalable web applications
						using React.js, Spring Boot, MySQL, Redis, and Kafka.

						I enjoy developing enterprise-level applications with
						clean architecture and modern UI design.

					</p>

					<div className="grid grid-cols-3 gap-4 mt-12 border-t border-cyan-500/10 pt-10">

						{STATS.map((stat) => (
							<StatCounter key={stat.label} value={stat.value} label={stat.label} />
						))}

					</div>

				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.9 }}
					className="bg-slate-900/80 border border-cyan-500/10 p-12 rounded-[40px] shadow-2xl backdrop-blur-xl"
				>

					<div className="space-y-6 text-lg">

						{QUICK_FACTS.map((fact) => (

							<div key={fact.label}>
								<span className="text-cyan-400 font-semibold">
									{fact.label} :
								</span>
								<span className="ml-3 text-gray-300">
									{fact.value}
								</span>
							</div>

						))}

					</div>

				</motion.div>

			</div>

		</section>

	)
}

export default About
