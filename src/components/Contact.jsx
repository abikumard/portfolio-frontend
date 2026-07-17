import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

function Contact() {

	return (

		<section id="contact" className="section-alt">

			<div className="container-custom">

				<div className="grid md:grid-cols-2 gap-10 items-center">

					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="min-h-[320px] flex flex-col justify-center"
					>

						<p className="eyebrow mb-4">contact</p>

						<h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--ink)]">
							Let's <span className="text-[var(--accent-strong)]">Work Together</span>
						</h1>

						<p className="text-[var(--slate)] text-lg leading-8 max-w-lg">
							I'm open to new opportunities and collaborations. If you have a
							job opportunity, freelance project, or would like to discuss a
							software development role, feel free to get in touch.
						</p>

					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="min-h-[320px] max-w-md mx-auto w-full card p-8 flex flex-col justify-center"
					>

						<h2 className="text-2xl font-bold text-[var(--ink)]">

							Abikumar Dharmaraj

						</h2>

						<p className="mt-2 text-[var(--slate)]">

							Full Stack Developer

						</p>

						<div className="mt-8 flex flex-col gap-4">

							<a
								href="mailto:abikumarr003@gmail.com"
								className="flex items-center gap-3 text-[var(--accent-strong)] hover:underline"
							>
								<HiOutlineMail size={20} />
								abikumarr003@gmail.com
							</a>

							<a
								href="tel:+919345794881"
								className="flex items-center gap-3 text-[var(--accent-strong)] hover:underline"
							>
								<HiOutlinePhone size={20} />
								+91 93457 94881
							</a>

							<p className="flex items-center gap-3 text-[var(--slate)]">
								<HiOutlineLocationMarker size={20} className="text-[var(--accent-strong)]" />
								Chennai, Tamil Nadu
							</p>

							<a
								href="https://www.linkedin.com/in/abi-kumar-2a70272b3/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-[var(--accent-strong)] hover:underline"
							>
								<FaLinkedin size={20} />
								ABI KUMAR
							</a>

						</div>

					</motion.div>

				</div>

			</div>

		</section>

	)

}

export default Contact;
