export default function Section({ children }: { children: React.ReactNode }) {
	return (
		<>
			<section className="container flex flex-col gap-3 mx-auto text-white xl:px-44 lg:flex-row">
				{children}
			</section>
		</>
	);
}
