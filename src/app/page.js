import CourseCard from "./components/courses"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className="max-w-[100%] overflow-x-hidden m-0 p-0">
      <Navbar />
      <Hero />
      <CourseCard />
      <Footer />
    </main>
  )
}
