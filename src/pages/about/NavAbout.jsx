const NavAbout = ({ current }) => {
	return (
		<section className="my-20">
			<div className="mx-auto font-raleway font-medium max-w-[1140px] w-full tab:grid tab:justify-center tab:items-center tab:grid-cols-7">
				{navItems.map((item) => {
					return (
						<div
							key={item}
							className={`${
								item.toLowerCase() === current.toLowerCase()
									? "bg-pgreen text-white"
									: "bg-[#FFF000]"
							} tracking-widest p-3 text-[10px] tab:text-[16px] tab:px-0 tab:py-8 flex items-center justify-center text-center h-full`}
						>
							{item}
						</div>
					)
				})}
			</div>
		</section>
	)
}
export default NavAbout

const navItems = [
	"Our Story",
	"Vision",
	"Mission",
	"Philosphy of Change",
	"The lifecycle Approach",
	"How we work",
	"Why trust us?",
]
