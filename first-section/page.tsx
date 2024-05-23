import Link from "next/link"


const FirstSections = () => {
  return (
    <div className="bg-white-200">
        <section className="md-py-20 py-10 bg-gradient-to-r from-gray-00 to-gray-200 spacey-10">
            <div className="container mx-auto text-center">
                <div className="text-6xl justify-center font-bold md:px-20 pb-10
                text-gradient bg-gradient-to-r from-black to-white
                bg-clip-text text-transparent">
                Welcome to LiftCard, the social media fitness app
                </div> {/*Create Welcome text on landing page*/}

            </div>

            <p className="text-lg md:text-xl md-10 font-bold text-center">
            Turn your fitness journey into a community experience
            </p>
            <div className="flex gap-4 justify-center pt-10">
                <button className="bg-gray-500 text-white px-10 py-4 rounded-md text-lg font-bold"> {/*Creates register button*/}
                    <Link href="/register">
                    Register 
                    </Link>
                </button> 
                <button className="bg-gray-500 text-white px-10 py-4 rounded-md text-lg font-bold"> {/*Creates Download Button*/}
                    <Link href="https://apps.apple.com/us/app/lift-card-social-fitness-app/id6449883528">
                    Download!
                    </Link>
                </button>

            </div>
            <div className="flex gap-4 justify-center pt-10">
                <video className="rounded" width="1000" height="240" autoPlay muted loop> {/*Includes video from video folder*/}
                    <source src="/video/fitness.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    </ div>

  )
} 

export default FirstSections
