import { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImage from "./MyImage";
import Typewriter from "../utils/TypeWriter";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { TechStack } from "../components";
import { styles } from "../styles";
import Section from "./Section";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { BackgroundCircles } from "./design/Hero";
import { ShootingStarsAndStarsBackground } from "./ShootingStarsAndStarsBackground";

const Hero = () => {
	const topRef = useRef(null);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {}, []);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		}
		ScrollReveal().reveal(topRef.current, {
			origin: "top",
			distance: "250px",
			duration: 2300,
			delay: 350,
			easing: "ease",
			reset: true,
		});
	}, []);
	const textToShow =
		"Passionate developer based in Ethiopia, dedicated to providing quality work in a timely manner.";

	return (
		<Section
			className="realtive pt-28 flex flex-col justify-center md:pt-44"
			crosses
			crossesOffset="lg:translate-y-[5.25rem]"
			customPaddings
			id="hero"
		>
			<ShootingStarsAndStarsBackground />
			<article
				ref={topRef}
				className="flex z-0 gap-2 md:gap-16 flex-col-reverse md:flex-row justify-between items-center w-9/10  mx-auto"
				id="home"
			>
				<section className="z-30 md:w-3/4 mx-6 md:mx-16 px-6 text-center md:text-left">
					<h1 className={`${styles.heroHeadText}`}>
						𝓗𝓲, 𝓘&apos;𝓶 <span className="text-[#915EFF]"> 𝕾𝖔𝖑𝖔𝖒𝖔𝖓</span>
					</h1>
					<p
						className={`${styles.heroSubText} text-xl font-extrabold inline-block text-lime-500 mb-4`}
					>
						𝕱𝖚𝖑𝖑𝕾𝖙𝖆𝖈𝖐 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗
					</p>
					<div className="font-serif my-4 md:mb-8 hidden sm:block">
						<Typewriter text={textToShow} />
					</div>
					<div className="flex justify-center mb-4 md:justify-start gap-4">
						<a
							href="https://www.linkedin.com/in/solomonmuhye"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className={`${styles.shimmeringBtnLdn}`}>
								<i className="pr-2">
									<FontAwesomeIcon icon={faLinkedinIn} />
								</i>
								LinkedIn
							</button>
						</a>
						<a
							href="https://github.com/solomon-mh"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className={`${styles.shimmeringBtnGit}`}>
								<i className="pr-2">
									<FontAwesomeIcon icon={faGithub} />
								</i>
								GitHub
							</button>
						</a>
					</div>
				</section>
				<section className="md:w-1/4 md:mb-0">
					<MyImage />
				</section>
			</article>
			<div className="z-20 m-12 md:w-4/5 flex flex-col md:mx-auto text-[10px] md:text-base justify-center items-center sm:gap-6 sm:flex-row">
				<p className="text-xs md:text-lg font-semibold">My Tech Stack</p>
				<TechStack />
			</div>

			{isDarkMode && (
				<>
					<ScrollParallax isAbsolutelyPositioned>
						<MouseParallax>
							<BackgroundCircles />
						</MouseParallax>
					</ScrollParallax>
				</>
			)}
		</Section>
	);
};

export default Hero;
