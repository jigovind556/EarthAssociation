import { goals } from "../../assets/index"

const Goals = () => {
	return (
		<section className="hidden tab:block">
			<div className="max-w-[1140px] mx-auto pt-[60px] pb-[40px] px-2.5  text-center text-black font-bebas">
				<div className="text-[30px] uppercase tracking-[1px] font-semibold mb-4">
					<h3 className="uppercase">Towards achieving</h3>
					<h2 className="text-[45px] -mt-3 uppercase tracking-[1px] font-semibold">
						Sustainable Development Goals
					</h2>
				</div>
				<div className="grid grid-cols-6 gap-[18px] p-5">
					{Object.entries(goals).map((g, index) => (
						<img src={g[1]} key={index} />
					))}
				</div>
			</div>
		</section>
	)
}
export default Goals
