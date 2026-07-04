import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

function Contact() {

	return (

		<section id="contact" className="py-20">

			<div className="container-custom">

				<div className="grid md:grid-cols-2 gap-10 items-center">

					<motion.div
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="min-h-[320px] flex flex-col justify-center"
					>

						<h1 className="text-5xl font-bold mb-6 text-center md:text-left">

							Contact <span className="text-cyan-400">Me</span>

						</h1>

						<p className="text-gray-300 text-lg leading-8 max-w-2xl mx-auto md:mx-0">

							I'm open to new opportunities and collaborations. If you have a
							job opportunity, freelance project, or would like to discuss a
							software development role, feel free to get in touch.

						</p>

					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 60 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="min-h-[320px] max-w-md mx-auto w-full bg-slate-900 border border-cyan-500/20 rounded-3xl p-8 text-center flex flex-col justify-center"
					>

						<h2 className="text-2xl font-bold">

							Abikumar

						</h2>

						<p className="mt-2 text-gray-300">

							Java Full Stack Developer

						</p>

						<div className="mt-8 flex flex-col gap-4 items-center">

							<a
								href="mailto:abikumarr003@gmail.com"
								className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 hover:underline"
							>
								<HiOutlineMail size={20} />
								abikumarr003@gmail.com
							</a>

							<p className="flex items-center gap-3 text-gray-300">
								<HiOutlineLocationMarker size={20} className="text-cyan-400" />
								Chennai, Tamil Nadu
							</p>

							<a
								href="https://www.linkedin.com/in/abi-kumar-2a70272b3/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 hover:underline"
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
