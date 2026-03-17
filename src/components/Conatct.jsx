
import { Mail, Github, Linkedin, Facebook, MapPin, Send } from "lucide-react";

const ContactPage = () => {
	return (
		<div className="min-h-[90vh] bg-white flex items-center justify-center p-6 mt-10">
			<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
				{/* Left Side: Text & Info */}
				<div className="space-y-8">
					<div>
						<h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
							Get in Touch
						</h2>
						<h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
							Let's talk about <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
								your next project.
							</span>
						</h1>
						<p className="text-lg text-slate-600 max-w-md">
							Have a question or a proposal, or just want to say hi? Go
							ahead and drop a message. I'm always open to discussing new
							projects and creative ideas.
						</p>
					</div>

					<div className="space-y-6">
						<div className="flex items-center gap-4 text-slate-700">
							<div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
								<Mail size={24} />
							</div>
							<div>
								<p className="text-sm text-slate-500 font-medium">
									Email me at
								</p>
								<p className="font-bold">worldNothing192@gamil.com</p>
							</div>
						</div>
						<div className="flex items-center gap-4 text-slate-700">
							<div className="p-3 bg-purple-50 rounded-lg text-purple-600">
								<MapPin size={24} />
							</div>
							<div>
								<p className="text-sm text-slate-500 font-medium">
									Location
								</p>
								<p className="font-bold">Kathmandu, Nepal (Remote)</p>
							</div>
						</div>
					</div>
					<div className="flex gap-4 pt-4">
						<a
							href="#"
							className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition text-slate-600">
							<Github size={20} />
						</a>
						<a
							href="#"
							className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition text-slate-600">
							<Facebook size={20} />
						</a>
						<a
							href="#"
							className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition text-slate-600">
							<Linkedin size={20} />
						</a>
					</div>
				</div>
				<div className="relative group">

					<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>

					<form className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<label className="text-sm font-semibold text-slate-700">
									Your Name
								</label>
								<input
									type="text"
									placeholder="John Doe"
									className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-semibold text-slate-700">
									Email Address
								</label>
								<input
									type="email"
									placeholder="john@example.com"
									className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-semibold text-slate-700">
								Subject
							</label>
							<input
								type="text"
								placeholder="How can I help you?"
								className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
							/>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-semibold text-slate-700">
								Message
							</label>
							<textarea
								rows="4"
								placeholder="Type your message here..."
								className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-none"></textarea>
						</div>

						<button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg">
							Send Message
							<Send size={18} />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
