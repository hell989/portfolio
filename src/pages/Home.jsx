import { Link } from "react-router";

const HomePage = () => {
	return (
		<div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
			<div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div className="order-2 md:order-1 text-center md:text-left">
					<h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
						Software Engineer & Designer
					</h2>
					<h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6">
						Hi, I'm{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
							Sonu Kumar Sah
						</span>
					</h1>
					<p className="text-lg text-slate-600 leading-relaxed mb-8">
						I craft web applications and beautiful user
						experiences. Currently focused on building accessible,
						human-centered products at the intersection of design and
						code.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
						<Link to="/about">
							<button className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition shadow-lg">
								Learn more
							</button>
						</Link>
						<Link to="/contact">
							<button className="px-8 py-3 border border-slate-300 text-slate-700 rounded-full font-medium hover:bg-white transition">
								Get in Touch
							</button>
						</Link>
					</div>
				</div>

				<div className="order-1 md:order-2 flex justify-center">
					<div className="relative group">
						<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
						<div className="relative bg-white p-2 rounded-2xl shadow-2xl">
							<img
								src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/502426446_686172314124189_4689082631989803588_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeE3NpwVD19lyFkwiOAmeu1qc0655TXRrTNzTrnlNdGtMxK1czhpKsgX0EyG2eOLAmMCeoa66M0GVRb_eVC7SxXI&_nc_ohc=BPFNAoCTurEQ7kNvwHzch46&_nc_oc=Adk0Wy8CAx7CGbkM5xnAYOfGGI9X1ZPbO_SCQryk8TizNaz9HMroMlD0Bx85h0SV3sTiAZM-KsxE1jA4XL-UJZYr&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=NwEok0UmZjq5Sc_JxG5H0A&_nc_ss=8&oh=00_AfyF5iegzVOPbnOTEAMoJxSYjbzC1QEezpZT0G6GgWeG0g&oe=69BEC45C"
								alt="Profile"
								className="rounded-xl w-full h-[400px] md:h-[500px] object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
