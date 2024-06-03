import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
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

const Impact = () => {
	return (
		<section className="">
			<div className="max-w-[1140px] mx-auto pt-[60px] pb-[40px] px-2.5  text-center text-black font-bebas">
				<h2 className="text-[45px] tracking-[1px] font-semibold mb-8">
					Impact and Outcomes
				</h2>

				<Carousel
					className="p-2.5"
					// infinite={true}
					swipeable
					responsive={responsive}
					removeArrowOnDeviceType={["tablet", "desktop"]}
				>
					<div className="flex justify-center flex-col items-center">
						<div className="relative w-[350px] h-[400px] tab:h-[350px] lg:w-[250px]">
							<img
								src=""
								alt=""
								className="w-full h-full bg-black z-0 rounded-xl"
							/>
							<span className="text-left uppercase leading-10 absolute bottom-10 left-6  font-bebas font-bold tracking-wider text-[35px] text-white z-100">
								Increased <br />
								Awareness
							</span>
						</div>
						<div className="mt-4 relative w-[350px] lg:w-[250px] font-raleway text-[15px] text-left">
							<p className="pb-6 tracking-wide">
								Raised awareness of environmental issues among
								the youth and the general public.
							</p>
							<a className="text-pgreen" href="">
								know more &gt;
							</a>
						</div>
					</div>
					<div className="flex justify-center flex-col items-center">
						<div className="relative w-[350px] h-[400px] tab:h-[350px] lg:w-[250px]">
							<img
								src=""
								alt=""
								className="w-full h-full bg-black z-0 rounded-xl"
							/>
							<span className="uppercase text-left leading-10 absolute bottom-10 left-6  font-bebas font-bold tracking-wider text-[35px] text-white z-100">
								Behavioral <br />
								Changes
							</span>
						</div>
						<div className="mt-4 relative w-[350px] lg:w-[250px] font-raleway text-[15px] text-left">
							<p className="pb-6 tracking-wide">
								Fostered positive changes in behavior and the
								adoption of eco-friendly practices.
							</p>
							<a className="text-pgreen" href="">
								know more &gt;
							</a>
						</div>
					</div>
					<div className="flex justify-center flex-col items-center">
						<div className="relative w-[350px] h-[400px] tab:h-[350px] lg:w-[250px]">
							<img
								src=""
								alt=""
								className="w-full h-full bg-black z-0 rounded-xl"
							/>
							<span className="uppercase text-left leading-10 absolute bottom-10 left-6  font-bebas font-bold tracking-wider text-[35px] text-white z-100">
								Joint <br /> Effort
							</span>
						</div>
						<div className="mt-4 relative w-[350px] lg:w-[250px] font-raleway text-[15px] text-left">
							<p className="pb-6 tracking-wide">
								Partnered with governmental bodies, such as the
								Forest Department, to further conservation
								efforts.
							</p>
							<a className="text-pgreen" href="">
								know more &gt;
							</a>
						</div>
					</div>
					<div className="flex justify-center flex-col items-center">
						<div className="relative w-[350px] h-[400px] tab:h-[350px] lg:w-[250px]">
							<img
								src=""
								alt=""
								className="w-full h-full bg-black z-0 rounded-xl"
							/>
							<span className="uppercase text-left leading-10 absolute bottom-10 left-6  font-bebas font-bold tracking-wider text-[35px] text-white z-100">
								Global
								<br />
								Network
							</span>
						</div>
						<div className="mt-4 relative w-[350px] lg:w-[250px] font-raleway text-[15px] text-left">
							<p className="pb-6 tracking-wide">
								Built a global network of environmental
								enthusiasts through the International Cultural
								Exchange Programme.
							</p>
							<a className="text-pgreen" href="">
								know more &gt;
							</a>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	)
}
export default Impact
