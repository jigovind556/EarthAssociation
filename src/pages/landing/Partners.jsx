// import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
// import times from "lodash/times";
import Marquee from "react-fast-marquee"
import philips from "../../assets/philips.png"

const Partners = () => {
	return (
		<section className="">
			<div className="max-w-[1140px] mx-auto pt-[60px] pb-[40px] px-2.5  text-center text-black font-bebas">
				<h2 className="text-[45px] tracking-[1px] font-semibold mb-8">
					OUR PARTNERS IN CHANGE
				</h2>
				<div className="bg-[#B2D3D1] flex gap-4 justify-evenly">
					<Marquee
						direction="up"
						style={{
							width: "200px",
							height: "240px",
							overflow: "clip",
							display: "flex",
						}}
					>
						<div className="w-[200px] flex flex-col gap-6 ">
							<img
								src={philips}
								className="w-[200px] h-auto shadow-md"
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
						</div>
					</Marquee>
					<Marquee
						direction="up"
						style={{
							width: "200px",
							height: "240px",

							overflow: "clip",
							display: "flex",
						}}
						speed={40}
					>
						<div className="w-[200px] flex flex-col gap-6 ">
							<img
								src={philips}
								className="w-[200px] h-auto shadow-md"
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
						</div>
					</Marquee>
					<Marquee
						direction="up"
						style={{
							width: "200px",
							height: "240px",

							overflow: "clip",
							display: "flex",
						}}
					>
						<div className="w-[200px] flex flex-col gap-6 ">
							<img
								src={philips}
								className="w-[200px] h-auto shadow-md"
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
						</div>
					</Marquee>
					<Marquee
						direction="up"
						style={{
							width: "200px",
							height: "240px",

							overflow: "clip",
							display: "flex",
						}}
						speed={40}
					>
						<div className="w-[200px] flex flex-col gap-6 ">
							<img
								src={philips}
								className="w-[200px] h-auto shadow-md"
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
						</div>
					</Marquee>
					<Marquee
						direction="up"
						style={{
							width: "200px",
							height: "240px",

							overflow: "clip",
							display: "flex",
						}}
					>
						<div className="w-[200px] flex flex-col gap-6 ">
							<img
								src={philips}
								className="w-[200px] h-auto shadow-md"
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
							<img
								src={philips}
								className="w-[200px]  h-auto shadow-md "
								alt=""
							/>
						</div>
					</Marquee>
				</div>
			</div>
		</section>
	)
}
export default Partners
