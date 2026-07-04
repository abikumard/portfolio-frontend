import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
	{ label: "Home", id: "home" },
	{ label: "About", id: "about" },
	{ label: "Skills", id: "skills" },
	{ label: "Projects", id: "projects" },
	{ label: "Experience", id: "experience" },
	{ label: "Contact", id: "contact" }
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

		NAV_LINKS.forEach(({ id }) => {
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
					? "bg-[#020617]/90 backdrop-blur-xl border-cyan-500/10 py-3"
					: "bg-transparent border-transparent py-5"
			}`}
		>

			<div className="container-custom flex justify-between items-center">

				<button
					onClick={() => handleNavClick("home")}
					className="text-3xl md:text-4xl font-extrabold tracking-wide text-cyan-400 hover:opacity-80 transition"
				>
					Abikumar<span className="text-white">.</span>
				</button>

				<ul className="hidden md:flex gap-10 text-base font-medium text-gray-300">

					{NAV_LINKS.map((link) => (

						<li key={link.id}>
							<button
								onClick={() => handleNavClick(link.id)}
								className={`relative py-1 duration-300 cursor-pointer ${
									activeSection === link.id ? "text-cyan-400" : "hover:text-cyan-400"
								}`}
							>
								{link.label}
								{activeSection === link.id && (
									<motion.span
										layoutId="nav-underline"
										className="absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 rounded-full"
									/>
								)}
							</button>
						</li>

					))}

				</ul>

				<button
					className="md:hidden text-cyan-400 text-3xl"
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
						className="md:hidden flex flex-col items-center gap-6 py-8 bg-[#020617]/95 backdrop-blur-xl border-t border-cyan-500/10 overflow-hidden"
					>

						{NAV_LINKS.map((link) => (

							<li key={link.id}>
								<button
									onClick={() => handleNavClick(link.id)}
									className={`text-lg font-medium ${
										activeSection === link.id ? "text-cyan-400" : "text-gray-300"
									}`}
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
