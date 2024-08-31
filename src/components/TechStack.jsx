import { FloatingDock } from "./ui/floatin-dock";

import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaPython,
	FaLaravel,
} from "react-icons/fa";
import { SiNextdotjs, SiNestjs } from "react-icons/si";

export default function TechStack() {
	const skills = [
		{ icon: FaHtml5, title: "HTML5" },
		{ icon: FaCss3Alt, title: "CSS3" },
		{ icon: FaJsSquare, title: "JavaScript" },
		{ icon: FaPython, title: "Python" },
		{ icon: FaReact, title: "React" },
		{ icon: SiNextdotjs, title: "Next.js" },
		{ icon: FaNodeJs, title: "Node.js" },
		{ icon: SiNestjs, title: "NestJS" },
		{ icon: FaLaravel, title: "Laravel" },
	];

	return (
		<div className="flex my-5 items-center justify-center h-[2rem] md:w-4/5">
			<FloatingDock items={skills} />
		</div>
	);
}
