import Link from "next/link";

export default function Credits(props) {
	return (
		<>
			<div className="bg-[#18181a] basis-1/3 rounded-md p-10 gap-4 text-5xl text-white">
				<h4>featured discography:</h4>
			</div>
			<div className="bg-[#18181a] basis-1/3 rounded-md p-10 flex flex-col gap-8 justify-center items-center text-center">
				<div>
					<svg
						width="66"
						height="65"
						viewBox="0 0 66 65"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_112_2233)">
							<path
								d="M31.1588 0.00264852H12.3465C5.55592 0.00264852 0 5.48509 0 12.1858V30.7493C0 37.4501 5.55592 42.9325 12.3465 42.9325H31.1588C37.9493 42.9325 43.5052 37.4501 43.5052 30.7493V12.1832C43.5052 5.48244 37.9493 0 31.1588 0V0.00264852ZM34.7876 21.6861C24.3199 22.5495 22.849 24.0009 21.9741 34.3301C21.9526 34.595 21.5553 34.595 21.5339 34.3301C20.6589 24.0009 19.188 22.5495 8.72037 21.6861C8.45197 21.6649 8.45197 21.2729 8.72037 21.2517C19.188 20.3883 20.6589 18.9369 21.5339 8.60769C21.5553 8.34284 21.9526 8.34284 21.9741 8.60769C22.849 18.9369 24.3199 20.3883 34.7876 21.2517C35.056 21.2729 35.056 21.6649 34.7876 21.6861Z"
								fill="#06B6D4"
							/>
							<path
								d="M58.4982 38.9147H47.067C42.9416 38.9147 39.5651 42.2465 39.5651 46.3173V57.5974C39.5651 61.6681 42.9416 65 47.067 65H58.4982C62.6235 65 66 61.6681 66 57.5974V46.3173C66 42.2465 62.6235 38.9147 58.4982 38.9147ZM60.7018 52.0884C54.3406 52.6129 53.4469 53.4948 52.9154 59.7718C52.902 59.9334 52.6604 59.9334 52.647 59.7718C52.1156 53.4948 51.2218 52.6129 44.8607 52.0884C44.697 52.0752 44.697 51.8368 44.8607 51.8236C51.2218 51.2992 52.1156 50.4172 52.647 44.1402C52.6604 43.9787 52.902 43.9787 52.9154 44.1402C53.4469 50.4172 54.3406 51.2992 60.7018 51.8236C60.8655 51.8368 60.8655 52.0752 60.7018 52.0884Z"
								fill="#06B6D4"
							/>
						</g>
						<defs>
							<clipPath id="clip0_112_2233">
								<rect width="66" height="65" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				<h2 className="text-5xl text-white">
					in boston? book a studio session with me.
				</h2>
				<Link
					className="p-5 text-xl rounded-full bg-cyan-500"
					href="benfranzoso38@gmail.com">
					1wnnacry@gmail.com
				</Link>
			</div>
			<div className="bg-[#18181a] basis-1/3 rounded-md p-10 gap-4 text-5xl flex flex-col text-white">
				<h4>credits:</h4>
				<ul className="flex flex-wrap gap-2 text-2xl">
					<li>lil tjay,</li>
					<li>millyz,</li>
					<li>bali,</li>
					<li>3am,</li>
					<li>jcutt</li>
					<li>lil tjay,</li>
					<li>millyz,</li>
					<li>bali,</li>
					<li>3am,</li>
					<li>jcutt</li>
				</ul>
			</div>
		</>
	);
}
