import About from './Body/About'
import History from './Body/History'
import History2 from './Body/History2'
import Blogs from './Body/Blogs'
import ReviewGrid from './Body/ReviewGrid'
import PopularPlaces from './Body/PopularPlaces'
import Tours from './Body/Tours'
import Form from './Body/Form'
import Header from './Body/Header'
export default function Home() {
    return (
        <>
            <Header />
            <History />
            <Tours />
            <History2 />
            <PopularPlaces />
            <About />
            <ReviewGrid />
            <Blogs />
            <Form />
        </>
    )
}
