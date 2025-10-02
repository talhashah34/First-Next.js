import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TopNavbar from '@/components/TopNavbar'
import Category from '@/components/Category'

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Category />
      <Hero />
    </div>
  )
}