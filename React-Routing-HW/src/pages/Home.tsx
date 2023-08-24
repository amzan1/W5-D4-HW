import Navbar from '../components/Navbar'
import Books from '../components/Books'
import Footer from '../components/Footer'
import bg from '../assets/Frame 1.png'
function Home() {
  return (
    <>
      <Navbar/>
      <img src={bg} alt="" />
        
        <Books/>
        <Footer/>
    </>
  )
}

export default Home