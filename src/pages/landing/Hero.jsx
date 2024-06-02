import hero from "../../assets/hero.jpeg"

const Hero = () => {
	return (
		<section className="relative w-full h-[500px] mb-8 md:h-[580px] p-8 flex items-end">
			<div className="absolute z-10 inset-0 bg-black opacity-40"></div>
			<img
				src={hero}
				alt="Hero Background"
				className="absolute inset-0 w-full h-full object-cover"
			/>
			<div className="max-w-[1140px] mx-auto w-full flex justify-start">
				<p className="tab:text-[60px] relative z-20 text-[40px] font-bebas tracking-wider font-bold text-white max-w-[20ch]">
					Empowering Communities for a Greener Tomorrow
				</p>
			</div>
		</section>
	)
}

export default Hero
