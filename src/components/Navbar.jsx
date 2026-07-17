import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
	{ label: "about", id: "about" },
	{ label: "skills", id: "skills" },
	{ label: "projects", id: "projects" },
	{ label: "experience", id: "experience" },
	{ label: "contact", id: "contact" }
];

function Navbar() {

	const [activeSection, setActiveSection] = useState("home");
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {

		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		onScroll();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ rootMargin: "-40% 0px -50% 0px" }
		);

		["home", ...NAV_LINKS.map((l) => l.id)].forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => {
			window.removeEventListener("scroll", onScroll);
			observer.disconnect();
		};

	}, []);

	const handleNavClick = (id) => {
		setMenuOpen(false);
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};

	return (

		<nav
			className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
				scrolled
					? "bg-white/90 backdrop-blur-xl border-[var(--line)] py-3"
					: "bg-white/40 border-transparent py-5"
			}`}
		>

			<div className="container-custom flex justify-between items-center">

				<button
					onClick={() => handleNavClick("home")}
					className="flex items-center gap-2 group"
				>
					<span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] group-hover:animate-pulse"></span>
					<span
						className="text-lg md:text-xl font-semibold tracking-tight text-[var(--ink)]"
						style={{ fontFamily: "var(--mono)" }}
					>
						abikumar<span className="text-[var(--slate-soft)]">.dev</span>
					</span>
				</button>

				<ul className="hidden md:flex gap-2 text-sm font-medium">

					{NAV_LINKS.map((link) => (

						<li key={link.id}>
							<button
								onClick={() => handleNavClick(link.id)}
								className={`relative px-4 py-2 rounded-lg duration-200 cursor-pointer ${
									activeSection === link.id
										? "text-[var(--accent-strong)] bg-[var(--accent-soft)]"
										: "text-[var(--slate)] hover:text-[var(--ink)] hover:bg-[var(--paper-alt)]"
								}`}
								style={{ fontFamily: "var(--mono)" }}
							>
								{link.label}
							</button>
						</li>

					))}

				</ul>

				<button
					className="md:hidden text-[var(--ink)] text-3xl"
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-label="Toggle menu"
				>
					{menuOpen ? <HiX /> : <HiMenu />}
				</button>

			</div>

			<AnimatePresence>

				{menuOpen && (

					<motion.ul
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden flex flex-col items-center gap-6 py-8 bg-white/95 backdrop-blur-xl border-t border-[var(--line)] overflow-hidden"
					>

						{NAV_LINKS.map((link) => (

							<li key={link.id}>
								<button
									onClick={() => handleNavClick(link.id)}
									className={`text-lg font-medium ${
										activeSection === link.id ? "text-[var(--accent-strong)]" : "text-[var(--slate)]"
									}`}
									style={{ fontFamily: "var(--mono)" }}
								>
									{link.label}
								</button>
							</li>

						))}

					</motion.ul>

				)}

			</AnimatePresence>

		</nav>

	)
}

export default Navbar
