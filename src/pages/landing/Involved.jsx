import { images } from "../../assets/index"
import donate from "../../assets/donate.png"
import spread from "../../assets/spread.png"
import participate from "../../assets/participate.png"
import volunteering from "../../assets/volunteering.png"

const Involved = () => {
	return (
		<section className="">
			<div className="max-w-[1140px] mx-auto pt-[60px] pb-[40px] px-2.5  text-center text-black font-bebas">
				<h2 className="text-[45px] uppercase tracking-[1px] font-bold mb-8">
					Get involved
				</h2>
				<div className="grid grid-cols-1  tab:grid-cols-2 gap-0 p-5">
					{involvedContent.map((i, index) => {
						return (
							<InvolvedCard
								key={index}
								content={i.content}
								title={i.title}
								icon={i.icon}
								color={i.color}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
export default Involved

// eslint-disable-next-line react/prop-types
const InvolvedCard = ({ icon, title, content, color }) => {
	return (
		<div className={`flex flex-col ${color}  items-center p-4 `}>
			<div className="w-[156px] h-[65px] tab:w-[120px] tab:h-[80px] flex justify-center tab:justify-start  mb-[10px] overflow-clip ">
				<img
					src={icon}
					alt=""
					className="w-full h-full object-contain"
				/>
			</div>
			<div>
				<div className="uppercase font-bold tracking-wider  text-[30px] tab:text-[40px] mb-2.5">
					{title}
				</div>
				<div className="font-raleway text-[16px] leading-normal tracking-wider">
					{content}
				</div>
			</div>
		</div>
	)
}

const involvedContent = [
	{
		icon: participate,
		title: "Participate in our events",
		content:
			"Attend our workshops, festivals, and other events to learn more about environmental conservation and how you can make a difference.",
		color: "bg-yellow-100",
	},
	{
		icon: volunteering,
		title: "Volunteer",
		content:
			"Offer your time and skills to help with our initiatives and projects.",
		color: "bg-purple-100",
	},
	{
		icon: donate,
		title: "Donate",
		content:
			"Support our cause by making a donation. Your contribution will help us continue our work in promoting environmental awareness and conservation.",
		color: "bg-red-100",
	},
	{
		icon: spread,
		title: "Spread the Word",
		content:
			"Share our mission and activities with your friends and family. Help us raise awareness about the importance of environmental conservation.",
		color: "bg-teal-100",
	},
]
