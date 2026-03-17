import {
	Facebook,
	Github,
	Home,
	Linkedin,
	Mail,
	User,
} from "lucide-react";
import { Link  } from "react-router";

export default function Header() {
	return (
		<header className="sticky flex justify-between top-0 z-50 w-full bg-background/80 backdrop-blur">
			<div className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
				<Link
					to="/"
					className="text-xl font-bold tracking-tight">
					<span className="rounded-mde px-2 py-1">
						Sonu
						<span className="text-green-500">Shah</span>
					</span>
				</Link>
				<div className="flex items-center gap-4 sm:gap-6">
					<nav className="flex gap-4 sm:gap-6">
						<Link
							to="/portfolio"
							className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex flex-col items-center">
							<Home className="size-5" />
							Home
						</Link>
						<Link
							to="/portfolio/about"
							className="text-sm  flex flex-col items-center font-medium text-muted-foreground transition-colors hover:text-foreground">
							<User className="size-5" />
							Blog
						</Link>
						<Link
							to="/portfolio/contact"
							className="text-sm  flex flex-col items-center font-medium text-muted-foreground transition-colors hover:text-foreground">
							<Mail className="size-5" />
							Contact
						</Link>
					</nav>
				</div>
				<div className="flex gap-3 text-sm font-medium text-muted-foreground items-center justify-center">
					<Github></Github>
					<Facebook></Facebook>
					<Linkedin></Linkedin>
					<></>
				</div>
			</div>
		</header>
	);
}
