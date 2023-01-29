import Image from "next/image";
import drakeStudio from "/public/drakestudio.webp";
import Link from "next/link";
import Section from "./components/section";
import Bio from "./components/bio";
import Socials from "./components/socials";
import About from "./components/about";
import StudioImage from "./components/studioimage";
import Credits from "./components/credits";

//  border-2 border-lime-500

export default function Home() {
	return (
		<main className="flex flex-col gap-2 p-5 bg-black lg:p-10">
			<Section>
				<Bio
					bio="max lighthall is wnnacry. artist, producer, mix-engineer"
					studio="phoenix down"
					ad="need help with your mix?"
					cta="1wnnacry@gmail.com"></Bio>
			</Section>
			<Socials
				social_1_link="/"
				social_1="Beatstars"
				social_2_link="/"
				social_2="YouTube"
				social_3_link="/"
				social_3="Instagram"
				social_4_link="/"
				social_4="Twitter"></Socials>
			<Section>
				<About
					city="boston"
					country="USA"
					timezone="EST"
					white_text="bullshit here bullshit here bullshit here bullshit here bullshit here."
					gray_text="more bullshit here bullshit here bullshit here bullshit here. more
          bullshit here bullshit here."></About>
			</Section>
			<StudioImage></StudioImage>
			<Section>
				<Credits></Credits>
			</Section>
		</main>
	);
}
