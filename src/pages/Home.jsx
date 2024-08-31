import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import {
	AboutMe,
	NavBar,
	Hero,
	Footer,
	// MyProjects,
	ScrollToTop,
	Services,
	MyProjects,
} from "../components";
import Section from "../components/Section";
const Home = () => {
	const rightRef = useRef(null);

	useEffect(() => {
		ScrollReveal().reveal(rightRef.current, {
			origin: "right",
			distance: "400px",
			duration: 2000,
			delay: 200,
			rotate: { y: 90 },
			easing: "ease",
			reset: true,
		});
	}, []);
	return (
		<div className="w-full overflow-x-hidden">
			<NavBar />
			<main className="m-auto md:mt-12">
				<Hero />
				<AboutMe />
				<div className="hidden md:block">
					<Services />
				</div>
				<div className="block md:hidden">
					<MyProjects />
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
			<Section
				crosses
				crossesOffset="lg:translate-y-[5.25rem]"
				customPaddings
			/>
			<aside>
				<ScrollToTop />
			</aside>
		</div>
	);
};

export default Home;
