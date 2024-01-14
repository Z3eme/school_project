import CourseCard from "./components/courses"
import Hero from "./components/hero"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className='max-w-[100vw]'>
      <Navbar />
      <Hero />
      <CourseCard />
    </main>
  )
}
