import { useState } from "react"

const ProgrammeCard = ({ title, points, color, isExpanded, onClick }) => {
	return (
		<div
			className={`rounded-md overflow-clip flex-1 min-w-[200px] sm:min-w-[350px] tab:min-w-[500px] lg:min-w-[450px] `}
		>
			<div>
				<div
					className={`text-black  ${color} p-2.5 font-bold tracking-wider text-start text-[20px] tab:text-[25px]  cursor-pointer flex items-center`}
					onClick={onClick}
				>
					<span
						className={`mr-2 transform transition-transform duration-300 ${
							isExpanded ? "rotate-90" : ""
						}`}
					>
						▶
					</span>
					{title}
				</div>
				<div
					className={`font-raleway text-[16px] text-start leading-normal tracking-wider overflow-hidden transition-max-height duration-500 ease-in-out ${
						isExpanded ? "max-h-[1000px]" : "max-h-0"
					}`}
				>
					<ul className="list-disc pl-12 mt-4">
						{points.map((point, index) => (
							<li key={index}>{point}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

const Programmes = () => {
	const [expandedIndex, setExpandedIndex] = useState(null)

	const programmes = [
		{
			title: "School and College Engagement",
			points: [
				"Poster Making Competitions",
				"Face Painting Sessions",
				"Debate Competitions",
				"Environmental Workshops",
				"Green Campus Projects",
			],
			color: "bg-yellow-100",
		},
		{
			title: "Environment Fest",
			points: [
				"Workshops on Sustainability",
				"Guest Lectures by Experts",
				"Tree Planting Drives",
				"Art Exhibitions",
				"Film Screenings",
			],
			color: "bg-purple-100",
		},
		{
			title: "Wildlife Week Celebration",
			points: [
				"Nature Walks",
				"Bird-Watching Expeditions",
				"Informative Talks",
				"Photography Contests",
				"Wildlife Workshops",
			],
			color: "bg-teal-100",
		},
		{
			title: "E20 Project",
			points: [
				"Interactive Sessions",
				"Field Trips",
				"Community Projects",
				"Student Ambassadors",
				"Resource Materials",
			],
			color: "bg-orange-100",
		},
		{
			title: "Awareness Programs",
			points: [
				"Environmental Campaigns",
				"Wildlife Campaigns",
				"Public Service Announcements",
				"Community Clean-Up Drives",
				"Recycling Programs",
			],
			color: "bg-green-100",
		},
		{
			title: "International Cultural Exchange Programme",
			points: [
				"Cultural Programs",
				"Workshops",
				"Discussions",
				"Exchange Visits",
				"Joint Projects",
			],
			color: "bg-red-100",
		},
	]

	const handleCardClick = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index)
	}

	return (
		<section>
			<div className="max-w-[1140px] mx-auto pt-[60px] pb-[40px] px-2.5 text-center text-black font-bebas">
				<h2 className="text-[45px] tracking-[1px] font-bold mb-8">
					OUR INITIATIVES
				</h2>
				<div className="flex flex-wrap gap-[18px] p-5">
					{programmes.map((programme, index) => (
						<ProgrammeCard
							key={index}
							title={programme.title}
							points={programme.points}
							color={programme.color}
							isExpanded={expandedIndex === index}
							onClick={() => handleCardClick(index)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Programmes
