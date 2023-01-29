import drakeStudio from "/public/drakestudio.webp";
import Image from "next/image";

export default function StudioImage() {
	return (
		<div className="container relative mx-auto xl:px-44 ">
			<div className="flex-1 rounded-md">
				<Image
					src={drakeStudio}
					className="rounded-md"
					alt="Wnnacry"
					placeholder="blur"
				/>
			</div>
		</div>
	);
}
