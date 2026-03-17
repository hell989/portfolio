import React from "react";
import {  Palette, Cpu, Coffee, Globe, Globe2 } from "lucide-react";

const AboutPage = () => {
	const skills = [
		{
			name: "Frontend",
			items: ["HTML","CSS","Javascript"],
			icon: <Palette size={20} />,
		},
		
		{
			name: "Tools",
			items: ["Git","GitHub"],
			icon: <Cpu size={20} />,
		},
		{ name: "Other language",
		  items: ["C","Python" ],
		  icon:<Globe2></Globe2>
		},
	];

	return (
		<div className="min-h-screen bg-white py-20 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Top Section: Story */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
					<div>
						<h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">
							My Story
						</h2>
						<h1 className="text-5xl font-extrabold text-slate-900 mb-6">
							A developer with a <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
								passion for design.
							</span>
						</h1>
						<div className="space-y-4 text-slate-600 text-lg leading-relaxed">
							<p>
								I'm <strong>Sonu Shah</strong>, I am student learning about Software Engineering.
								 My journey started with curiosity for how things work on the internet, which
								quickly turned into a career in building complex web
								applications.
							</p>
							<p>
								I believe that code is not just about making things
								function—it's about creating seamless, intuitive
								experiences for real people. I bridge the gap between
								technical architecture and visual aesthetics.
							</p>
						</div>
					</div>

					{/* Stats/Fun Facts Box */}
					<div className="grid grid-cols-2 gap-4">
						<div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center">
							<span className="text-4xl font-black text-indigo-600 mb-1">
								1+
							</span>
							<span className="text-sm font-bold text-slate-500 uppercase tracking-tight">
								Years Exp.
							</span>
						</div>
						<div className="p-8 bg-indigo-600 rounded-3xl text-white flex flex-col items-center justify-center text-center shadow-xl shadow-indigo-200">
							<span className="text-4xl font-black mb-1">0</span>
							<span className="text-sm font-bold opacity-80 uppercase tracking-tight">
								Projects
							</span>
						</div>
						<div className="p-8 bg-slate-900 rounded-3xl text-white flex flex-col items-center justify-center text-center">
							<Coffee className="mb-2 text-purple-400" />
							<span className="text-sm font-bold uppercase tracking-tight">
								Fuelled by Ambition
							</span>
						</div> 
						<div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center">
							<Globe className="mb-2 text-indigo-600" />
							<span className="text-sm font-bold text-slate-500 uppercase tracking-tight">
								Remote Ready
							</span>
						</div>
					</div>
				</div>

				{/* Bottom Section: Skills Grid */}
				<div className="pt-16 border-t border-slate-100">
					<h3 className="text-2xl font-bold text-slate-900 mb-10 text-center md:text-left">
						Technical Toolkit
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{skills.map((skill, index) => (
							<div
								key={index}
								className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
								<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									{skill.icon}
								</div>
								<h4 className="text-xl font-bold text-slate-900 mb-4">
									{skill.name}
								</h4>
								<div className="flex flex-wrap gap-2">
									{skill.items.map((item, i) => (
										<span
											key={i}
											className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
