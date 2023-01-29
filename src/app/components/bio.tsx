import Image from "next/image";
import profilePic from "/public/wnnacry.png";
import Link from "next/link";

export default function Bio(props: any) {
	return (
		<>
			<div className="bg-[#18181a] basis-2/3 rounded-md p-10 flex flex-col gap-4">
				<div>
					<Image
						src={profilePic}
						className="w-24 h-24 rounded-full"
						alt="Wnnacry"
						placeholder="blur"
					/>
				</div>
				<div>
					<h1 className="text-3xl md:text-6xl">
						{props.bio}
						<span className="text-[#8A8A93]"> currenty at {props.studio}.</span>
					</h1>
				</div>
			</div>
			<div className="bg-[#18181a] basis-1/3 rounded-md p-10 flex flex-col gap-8 justify-center items-center text-center">
				<div>
					<svg
						width="50"
						height="50"
						viewBox="0 0 50 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_103_190)">
							<path
								d="M49.717 25.3465C34.3507 20.9689 30.4184 17.0469 26.0294 1.72065C25.9221 1.34499 25.3893 1.34499 25.282 1.72065C20.893 17.0469 16.9607 20.9689 1.5944 25.3465C1.21776 25.4535 1.21776 25.9849 1.5944 26.092C16.9607 30.4695 20.893 34.3915 25.282 49.7178C25.3893 50.0934 25.9221 50.0934 26.0294 49.7178C30.4184 34.3915 34.3507 30.4695 49.717 26.092C50.0937 25.9849 50.0937 25.4535 49.717 25.3465Z"
								fill="#06B6D4"
							/>
							<path
								d="M8.22958 16.5758C8.26666 16.7043 8.4501 16.7043 8.48523 16.5758C9.9918 11.3127 11.3423 9.96769 16.6192 8.46309C16.748 8.42611 16.748 8.24314 16.6192 8.20811C11.3423 6.70546 9.99376 5.36048 8.48718 0.0953719C8.4501 -0.0330927 8.26666 -0.0330927 8.23153 0.0953719C6.72495 5.36048 5.3745 6.70352 0.097577 8.21006C-0.0312236 8.24704 -0.0312236 8.43 0.097577 8.46504C5.3745 9.96769 6.723 11.3146 8.23153 16.5778L8.22958 16.5758Z"
								fill="#06B6D4"
							/>
						</g>
						<defs>
							<clipPath id="clip0_103_190">
								<rect width="50" height="50" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<h2 className="text-2xl text-white md:text-5xl">{props.ad}</h2>
				<Link
					className="p-5 text-xl rounded-full bg-cyan-500"
					href="benfranzoso38@gmail.com">
					{props.cta}
				</Link>
			</div>
		</>
	);
}
