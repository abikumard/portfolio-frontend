import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Add / edit quick-fact rows here — the card re-renders automatically
const QUICK_FACTS = [
	{ label: "Name", value: "Abikumar Dharmaraj" },
	{ label: "Role", value: "Full Stack Developer" },
	{ label: "Location", value: "Chennai, India" },
	{ label: "Email", value: "abikumarr003@gmail.com" },
	{ label: "Phone", value: "+91 93457 94881" }
];

// Add / edit highlight stats here
const STATS = [
	{ label: "Months Professional Experience", value: 8 },
	{ label: "Certifications Earned", value: 2 },
	{ label: "Core Skills & Tools", value: 8 }
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
			<p className="text-4xl md:text-5xl font-extrabold text-[var(--accent-strong)]">
				{display}+
			</p>
			<p className="text-[var(--slate)] text-sm mt-2">{label}</p>
		</div>

	);
}

function About() {

	return (

		<section id="about" className="pb-24">

			<div className="container-custom grid lg:grid-cols-2 gap-20 items-center">

				<motion.div
					initial={{ opacity: 0, x: -60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>

					<p className="eyebrow mb-4">about</p>

					<h1 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--ink)]">
						About <span className="text-[var(--accent-strong)]">Me</span>
					</h1>

					<p className="text-[var(--slate)] text-lg leading-9">

						I'm <span className="text-[var(--ink)] font-semibold">Abikumar</span>,
						a motivated Full Stack Developer from Chennai with a strong foundation
						in Java and hands-on experience building REST APIs with Spring Boot.

						I completed my B.Tech in Information Technology at Kings Engineering College,
						and I'm currently working as an Associate Software Engineer, building and
						maintaining Spring Boot backends in a real-world team setting.

						I enjoy pairing solid backend fundamentals with clean, responsive front
						ends, and I'm always looking to learn new tools and contribute to
						meaningful projects.

					</p>

					<div className="grid grid-cols-3 gap-4 mt-12 border-t border-[var(--line)] pt-10">

						{STATS.map((stat) => (
							<StatCounter key={stat.label} value={stat.value} label={stat.label} />
						))}

					</div>

				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="card p-10 md:p-12"
				>

					<p
						className="text-xs text-[var(--slate-soft)] mb-6"
						style={{ fontFamily: "var(--mono)" }}
					>
						profile.json
					</p>

					<div className="space-y-5 text-base md:text-lg">

						{QUICK_FACTS.map((fact) => (

							<div key={fact.label} className="flex flex-wrap gap-x-3 border-b border-[var(--line)] pb-4 last:border-0 last:pb-0">
								<span className="text-[var(--accent-strong)] font-semibold min-w-[90px]">
									{fact.label}
								</span>
								<span className="text-[var(--slate)]">
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
