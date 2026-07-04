import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

// Add/remove social links here — icons render automatically
const SOCIAL_LINKS = [
	{ icon: <FaLinkedin />, href: "https://www.linkedin.com/in/abi-kumar-2a70272b3/", label: "LinkedIn" },
	{ icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
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

		<footer className="border-t border-gray-800 py-10 text-center text-gray-400 relative">

			<div className="container-custom flex flex-col items-center gap-6">

				<div className="flex gap-6 text-2xl text-gray-400">

					{SOCIAL_LINKS.map((social) => (

						<a
							key={social.label}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.label}
							className="hover:text-cyan-400 transition-colors duration-300"
						>
							{social.icon}
						</a>

					))}

				</div>

				<p>© {new Date().getFullYear()} Abikumar Portfolio. All Rights Reserved.</p>

				<button
					onClick={scrollToTop}
					aria-label="Back to top"
					className="absolute right-4 -top-6 md:right-10 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg shadow-cyan-500/30 hover:scale-110 transition-all duration-300"
				>
					<HiArrowUp size={18} />
				</button>

			</div>

		</footer>

	)
}

export default Footer
