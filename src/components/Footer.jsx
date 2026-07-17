import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

// Add/remove social links here — icons render automatically
const SOCIAL_LINKS = [
	{ icon: <FaLinkedin />, href: "https://www.linkedin.com/in/abi-kumar-2a70272b3/", label: "LinkedIn" },
	{
		icon: <FaEnvelope />,
		href: "mailto:abikumarr003@gmail.com?subject=Job%20Opportunity&body=Hi%20Abikumar,%0A%0AI%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.",
		label: "Email"
	}
];

function Footer() {

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (

		<footer className="bg-[var(--ink)] text-[#9aa5b5] py-6 relative">

			<div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">

				<p
					className="text-xs md:text-sm"
					style={{ fontFamily: "var(--mono)" }}
				>
					Java 17 · Spring Boot · MySQL &nbsp;—&nbsp; © {new Date().getFullYear()} Abikumar Dharmaraj
				</p>

				<div className="flex gap-6 text-xl">

					{SOCIAL_LINKS.map((social) => (

						<a
							key={social.label}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.label}
							className="hover:text-white transition-colors duration-300"
						>
							{social.icon}
						</a>

					))}

				</div>

				<button
					onClick={scrollToTop}
					aria-label="Back to top"
					className="absolute right-4 -top-6 md:right-10 bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-white p-3 rounded-full shadow-lg shadow-black/20 hover:scale-110 transition-all duration-300"
				>
					<HiArrowUp size={18} />
				</button>

			</div>

		</footer>

	)
}

export default Footer
