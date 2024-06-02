import { useEffect } from "react"
import { useState } from "react"

const Impact = () => {
	const [impact, setImpact] = useState({
		totalFamilies: 15,
		families: 0,
		totalVillages: 2000,
		villages: 0,
		totalProjects: 400,
		projects: 0,
		totalStates: 25,
		states: 0,
	})

	useEffect(() => {
		const duration = 3000 // Total duration for the counters to complete (in milliseconds)
		const totalSteps = 100 // Number of steps for the counter increments

		const intervalTimeFamilies = 130 || duration / totalSteps
		const intervalTimeVillages = 10 || duration / totalSteps
		const intervalTimeProjects = 10 || duration / totalSteps
		const intervalTimeStates = 80 || duration / totalSteps

		const incrementFamilies =
			1 || Math.ceil(impact.totalFamilies / totalSteps)
		const incrementVillages =
			10 || Math.ceil(impact.totalVillages / totalSteps)
		const incrementProjects =
			2 || Math.ceil(impact.totalProjects / totalSteps)
		const incrementStates = 1 || Math.ceil(impact.totalStates / totalSteps)

		const intervalFamilies = setInterval(() => {
			setImpact((prevImpact) => {
				if (prevImpact.families < prevImpact.totalFamilies) {
					return {
						...prevImpact,
						families: Math.min(
							prevImpact.families + incrementFamilies,
							prevImpact.totalFamilies
						),
					}
				} else {
					clearInterval(intervalFamilies)
					return prevImpact
				}
			})
		}, intervalTimeFamilies)

		const intervalVillages = setInterval(() => {
			setImpact((prevImpact) => {
				if (prevImpact.villages < prevImpact.totalVillages) {
					return {
						...prevImpact,
						villages: Math.min(
							prevImpact.villages + incrementVillages,
							prevImpact.totalVillages
						),
					}
				} else {
					clearInterval(intervalVillages)
					return prevImpact
				}
			})
		}, intervalTimeVillages)

		const intervalProjects = setInterval(() => {
			setImpact((prevImpact) => {
				if (prevImpact.projects < prevImpact.totalProjects) {
					return {
						...prevImpact,
						projects: Math.min(
							prevImpact.projects + incrementProjects,
							prevImpact.totalProjects
						),
					}
				} else {
					clearInterval(intervalProjects)
					return prevImpact
				}
			})
		}, intervalTimeProjects)

		const intervalStates = setInterval(() => {
			setImpact((prevImpact) => {
				if (prevImpact.states < prevImpact.totalStates) {
					return {
						...prevImpact,
						states: Math.min(
							prevImpact.states + incrementStates,
							prevImpact.totalStates
						),
					}
				} else {
					clearInterval(intervalStates)
					return prevImpact
				}
			})
		}, intervalTimeStates)

		return () => {
			clearInterval(intervalFamilies)
			clearInterval(intervalVillages)
			clearInterval(intervalProjects)
			clearInterval(intervalStates)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<section className="bg-[#F3F2F3]">
			<div className="max-w-[1140px] mx-auto py-[75px] text-center text-black font-bebas">
				<h2 className="text-[45px] tracking-[1px] p-2.5 font-semibold">
					OUR IMPACT
				</h2>
				<div className="grid grid-cols-2 gap-[18px] tab:grid-cols-4 p-2.5">
					<div>
						<div className="font-semibold text-pgreen h-fit">
							<span className="text-[60px] tab:text-[90px] leading-none">
								{impact.families}
							</span>
							<span className="text-[60px] tab:text-[90px] leading-none">
								+
							</span>
						</div>
						<div className="text-pgreen text-[30px] leading-[75px]">
							LAC
						</div>
						<div className="font-raleway text-[14px] leading-[18px] tracking-wider">
							children and <br /> their families are <br />
							impacted every year
						</div>
					</div>
					<div>
						<div className="font-semibold text-pgreen h-fit">
							<span className="text-[60px] tab:text-[90px] leading-none">
								{impact.villages}
							</span>
							<span className="text-[60px] tab:text-[90px] leading-none">
								+
							</span>
						</div>
						<div className="text-pgreen text-[30px] leading-[75px]">
							VILLAGES
						</div>
						<div className="font-raleway text-[14px] leading-[18px] tracking-wider">
							and slums <br /> are reached out <br />
							to across the country
						</div>
					</div>
					<div>
						<div className="font-semibold text-pgreen h-fit">
							<span className="text-[60px] tab:text-[90px] leading-none">
								{impact.projects}
							</span>
							<span className="text-[60px] tab:text-[90px] leading-none">
								+
							</span>
						</div>
						<div className="text-pgreen text-[30px] leading-[75px]">
							PROJECTS
						</div>
						<div className="font-raleway text-[14px] leading-[18px] tracking-wider">
							focused on <br /> education, healthcare,
							<br />
							and women <br />
							empowerment
						</div>
					</div>
					<div>
						<div className="font-semibold text-pgreen h-fit">
							<span className="text-[60px] tab:text-[90px] leading-none">
								{impact.states}
							</span>
							<span className="text-[60px] tab:text-[90px] leading-none">
								+
							</span>
						</div>
						<div className="text-pgreen text-[30px] leading-[75px]">
							STATES
						</div>
						<div className="font-raleway text-[14px] leading-[18px] tracking-wider">
							are reached <br /> including the <br />
							remotest areas
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Impact
