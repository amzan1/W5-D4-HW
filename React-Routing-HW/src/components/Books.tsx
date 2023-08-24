import book1 from '../assets/lf.webp'
import book2 from '../assets/lf (1).webp'
import book3 from '../assets/9780063114425_p0_v2_s600x595.jpeg'
import book4 from '../assets/lf (2).webp'
import book5 from '../assets/lf (3).webp'
import book6 from '../assets/lf (4).webp'


function Books() {
  return (
    <>
        <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">The Best seller</h2>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 place-items-center mb-20 md:place-items-center">
                        <div className="group relative">
                            <div className="relative h-80 w-44  overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src={book1} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-96 place-items-center object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="/Nell Plants a Tree">
                                <span className="absolute inset-0"></span>Anne Wynter</a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Nell Plants a Tree</p>
                            <p className='truncate ... w-64 overflow-scroll'>This gorgeous picture book shows how one little girl’s careful tending of a pecan tree creates the living center of a loving, intergenerational Black family. For Earth Day and every day! Perfect for fans of Matt de la Peña and Oge Mora.</p>
                        </div>
                        <div className="group relative">
                            <div className="relative h-80 w-44 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src={book2} alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="/Bitsy Bat, School Star">
                                <span className="absolute inset-0"></span>Kaz Windness</a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Bitsy Bat, School Star</p>
                            <p className='truncate ... w-64 overflow-scroll'>A little bat struggles to fit in only to learn to celebrate differences in this “darling book for all children but especially those with autism” (Kirkus Reviews, starred review) about starting school, making friends, and seeing what makes each person special.</p>
                        </div>
                        <div className="group relative">
                            <div className="relative h-80 w-44 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src={book3} alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="/Leeva at Last">
                                <span className="absolute inset-0"></span>Sara Pennypacker</a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Leeva at Last</p>
                            <p className='truncate ... w-64 overflow-scroll'>Award-winning, bestselling author Sara Pennypacker and illustrator Matthew Cordell come together in this hilarious absurdist tale about a precocious girl who transforms her community in surprising ways.</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 place-items-center mb-20">
                        <div className="group relative">
                            <div className="relative h-80 w-44  overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src={book4} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-96 place-items-center object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="/Charlotte's Web">
                                <span className="absolute inset-0"></span>E. B. White, Kate DiCamillo</a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Charlotte's Web</p>
                            <p className='truncate ... w-64 overflow-scroll'>This beloved book by E. B. White, author of Stuart Little and The Trumpet of the Swan, is a classic of children's literature that is "just about perfect." This paperback edition includes a foreword by two-time Newbery-winning author Kate DiCamillo.</p>
                        </div>
                        <div className="group relative">
                            <div className="relative h-80 w-44 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src={book5} alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="/The Together Tree">
                                <span className="absolute inset-0"></span>Aisha Saeed</a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">The Together Tree</p>
                            <p className='truncate ... w-64 overflow-scroll'>All Are Welcome meets Be Kind in this poignant and accessible picture book about the power every bystander—no matter how small—has to extend kindness and stand up in the face of intolerance.</p>
                        </div>
                        <div className="group relative">
                            <div className="relative h-80 w-44 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src={book6} alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center"/>
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <a href="/You Matter">
                                <span className="absolute inset-0"></span>Christian Robinson</a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">You Matter</p>
                            <p className='truncate ... w-64 overflow-scroll'>In this full, bright, and beautiful picture book, many different perspectives around the world are deftly and empathetically explored—from a pair of bird-watchers to the pigeons they’re feeding. Young readers will be drawn into the luminous illustrations inviting them to engage with the world in a new way and see how everyone is connected, and that everyone matters.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Books