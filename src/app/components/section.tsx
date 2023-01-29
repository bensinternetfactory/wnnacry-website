export default function Section({ children }) {
	return (
		<>
			<section className="container flex flex-col gap-2 mx-auto text-white xl:px-44 lg:flex-row">
				{children}
			</section>
		</>
	);
}
