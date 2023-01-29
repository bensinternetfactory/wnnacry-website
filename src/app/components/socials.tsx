import Link from "next/link";

export default function Socials(props: any) {
	return (
		<section className="container flex gap-2 mx-auto text-white xl:px-44 ">
			<Link
				href={props.social_1_link}
				className="p-3 text-center rounded-full basis-1/4 bg-[#18181a] hover:bg-cyan-500 ">
				{props.social_1}
			</Link>
			<Link
				href={props.social_2_link}
				className="p-3 text-center rounded-full basis-1/4 bg-[#18181a] hover:bg-cyan-500 ">
				{props.social_2}
			</Link>
			<Link
				href={props.social_1_link}
				className="p-3 text-center rounded-full basis-1/4 bg-[#18181a] hover:bg-cyan-500 ">
				{props.social_3}
			</Link>
			<Link
				href={props.social_4_link}
				className="p-3 text-center rounded-full basis-1/4 bg-[#18181a] hover:bg-cyan-500 ">
				{props.social_4}
			</Link>
		</section>
	);
}
