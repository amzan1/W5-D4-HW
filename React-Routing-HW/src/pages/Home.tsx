import Navbar from '../components/Navbar'
import Books from '../components/Books'
import Footer from '../components/Footer'
import bg from '../assets/Frame 1.png'
function Home() {
  return (
    <>
      
      <Navbar/>
      <div className='bg-gradient-to-t from-white to-[#CCF1FF]'>
        <div>
        <img src={bg} alt="" />
        </div>
        <Books/>
        </div>
        <Footer/>

    </>
  )
}

export default Home