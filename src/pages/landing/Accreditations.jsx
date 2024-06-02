import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { images } from "../../assets/index"

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
	},
}

const Accreditations = () => {
	return (
		<section>
			<div className="max-w-[1140px] mx-auto p-2.5 text-[18px] text-center text-black font-raleway">
				<h2 className=" font-bebas text-[45px] tracking-[1px] font-bold mb-8">
					OUR PROGRAMMES
				</h2>
				<Carousel
					className="p-2.5"
					// infinite={true}
					swipeable
					responsive={responsive}
					removeArrowOnDeviceType={["tablet", "desktop"]}
				>
					{accreditationData.map((t, i) => {
						return (
							<AccreditationCard
								image={t.image}
								key={i}
								title={t.title}
								description={t.description}
							/>
						)
					})}
				</Carousel>
				{/* <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-3 gap-4"></div> */}
				<div className="mt-4">
					<a className="text-pgreen " href="">
						know more &gt;
					</a>
				</div>
			</div>
		</section>
	)
}
export default Accreditations

const AccreditationCard = ({ image, title, description }) => {
	return (
		<div className="text-start bg-[#f3f2f3] mx-3 rounded-b-lg overflow-clip">
			<div>
				<img
					src={image || ""}
					alt=""
					className="bg-black w-full h-[250px] shadow-md shadow-black/50"
				/>
			</div>
			<div className="px-[50px] pb-10 pt-4 flex flex-col gap-4">
				<div className="text-[17px] font-raleway font-bold tracking-wider">
					{title}
				</div>
				<div className="text-[14px] font-raleway">{description}</div>
			</div>
		</div>
	)
}

const accreditationData = [
	{
		image: "",
		title: "Environmental Education Program",
		description:
			"Our Environmental Education Program aims to integrate environmental studies into school curriculums. We work closely with educational institutions to develop and implement lesson plans that cover key environmental topics such as climate change, biodiversity, and sustainable practices.",
	},
	{
		image: "",
		title: "Community Outreach Program",
		description:
			"Through our Community Outreach Program, we aim to raise awareness and foster community involvement in environmental conservation. We conduct neighborhood clean-up drives, tree planting events, and recycling workshops to engage local residents in hands-on conservation activities.",
	},
	{
		image: "",
		title: "Conservation Research Program",
		description:
			"The Conservation Research Program focuses on conducting scientific research to support conservation efforts. We collaborate with local universities and research institutions to study local ecosystems, wildlife populations, and the impact of human activities on the environment.",
	},
]
