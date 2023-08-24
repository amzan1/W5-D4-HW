import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import book1 from '../assets/lf.webp'
import book2 from '../assets/lf (1).webp'
import book3 from '../assets/9780063114425_p0_v2_s600x595.jpeg'
import book4 from '../assets/lf (2).webp'
import book5 from '../assets/lf (3).webp'
import book6 from '../assets/lf (4).webp'
import Footer from "../components/Footer";

const BookDetail = ()=> {
    const { id } = useParams();
    if(id=='Nell Plants a Tree'){
return (
    <>
    <Navbar/>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-14 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img src={book1} alt="ecommerce" className=" h-1/6 object-cover object-center rounded border border-gray-200" />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">Anne Wynter</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">Nell Plants a Tree</h1>
                    <p className="leading-relaxed mt-5">This gorgeous picture book shows how one little girl’s careful tending of a pecan tree creates the living center of a loving, intergenerational Black family. For Earth Day and every day! Perfect for fans of Matt de la Peña and Oge Mora.</p>
                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900 mt-5">$10.00</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
)}
if(id=='Bitsy Bat, School Star'){
    return (
        <>
        <Navbar/>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className=" object-cover object-center rounded border border-gray-200" src={book2}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Kaz Windness</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">Bitsy Bat, School Star</h1>
                        <p className="leading-relaxed mt-5">A little bat struggles to fit in only to learn to celebrate differences in this “darling book for all children but especially those with autism” (Kirkus Reviews, starred review) about starting school, making friends, and seeing what makes each person special.</p>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900 mt-5">$10.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )    
}
if(id=='Leeva at Last'){
    return (
        <>
        <Navbar/>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className=" object-cover object-center rounded border border-gray-200" src={book3}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Sara Pennypacker</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">Leeva at Last</h1>
                        <p className="leading-relaxed mt-5">Award-winning, bestselling author Sara Pennypacker and illustrator Matthew Cordell come together in this hilarious absurdist tale about a precocious girl who transforms her community in surprising ways.</p>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900 mt-5">$10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
        </>
    )   
}
if(id=="Charlotte's Web"){
    return (
        <>
        <Navbar/>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className=" object-cover object-center rounded border border-gray-200" src={book4}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">E. B. White, Kate DiCamillo</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">Charlotte's Web</h1>
                        <p className="leading-relaxed mt-5">This beloved book by E. B. White, author of Stuart Little and The Trumpet of the Swan, is a classic of children's literature that is "just about perfect." This paperback edition includes a foreword by two-time Newbery-winning author Kate DiCamillo.</p>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900 mt-5">$10.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
        </>
    )}
    if(id=='The Together Tree'){
        return (
            <>
            <Navbar/>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className=" object-cover object-center rounded border border-gray-200" src={book5}/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Aisha Saeed</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">The Together Tree</h1>
                            <p className="leading-relaxed mt-5"> All Are Welcome meets Be Kind in this poignant and accessible picture book about the power every bystander—no matter how small—has to extend kindness and stand up in the face of intolerance.</p>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900 mt-5">$10.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
            </>
        )    
    }
    if(id=='You Matter'){
        return (
            <>
            <Navbar/>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className=" object-cover object-center rounded border border-gray-200" src={book6}/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Christian Robinson</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-5">You Matter</h1>
                            <p className="leading-relaxed mt-5">In this full, bright, and beautiful picture book, many different perspectives around the world are deftly and empathetically explored—from a pair of bird-watchers to the pigeons they’re feeding. Young readers will be drawn into the luminous illustrations inviting them to engage with the world in a new way and see how everyone is connected, and that everyone matters.</p>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900 mt-5">$10.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
            </>
        )   
    }
}

export default BookDetail