const Desc = ({ content }) => {
	return (
		<section>
			<div className="max-w-[1140px] mx-auto p-5  text-[18px] text-justify sm:text-center text-black font-raleway">
				<div className="mb-5">
					<p className="mb-[18px] leading-7 tracking-wider">
						{content}
					</p>
				</div>
				{/* <div>
					<p className="mb-[18px] hidden tab:block leading-7 tracking-wider">
						Smile foundation works as a catalyst in the cycle of
						change, complementing and supplementing government
						efforts to achieve Sustainable Development Goals. We
						sensitize and partner with like-minded institutions and
						individuals to implement high-impact programmes that
						enables access, enhance quality and help bring long term
						behavioural change at the grassroots.
					</p>
					<a className="mb-[18px] text-pgreen" href="">
						read more &gt;
					</a>
				</div> */}
			</div>
		</section>
	)
}
export default Desc
