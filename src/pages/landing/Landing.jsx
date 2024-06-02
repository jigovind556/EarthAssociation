import Desc from "./Desc"
import Impact from "./Impact"
import Programmes from "./Programmes"
import Goals from "./Goals"
import Cause from "./Cause"
import Partners from "./Partners"
import Accreditations from "./Accreditations"
import Involved from "./Involved"
import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"

const Landing = () => {
	return (
		<main className="mt-[65px]">
			<Header />
			<Hero />
			<Desc />
			<Accreditations />
			{/* <Impact /> */}
			<Programmes />
			<Goals />
			<Cause />
			<Involved />
			<Footer />
			{/* <Partners /> */}
		</main>
	)
}
export default Landing
