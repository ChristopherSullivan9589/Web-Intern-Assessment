
import Image from "next/image"

{/*Create prodfeature array*/}
const prodfeature = [ 
    { 
        name: "Community Accountability",
        description:
        "Our app serves as a platform to connect like-minded fitness enthusiasts. Track your friends' progress, cheer them on, and even give them a virtual 'nudge' if they're slacking off. Together, we achieve more.",
        images: "/images/lifting.png", 
        alt: "Community Acccountability",
      },
      {
        name: "Showcase Your Journey",
        description:
          "Who doesn't love a good pump picture? Lift Card allows you to document your fitness journey visually. Post workout photos and celebrate the milestones with a community that understands your grind.",
        images: "/images/camera.png",
        alt: "Showcase Your Journey",
      },
      {
        name: "Real-Time Progress Tracking",
        description:
          "Say goodbye to manually logging your reps and sets on crumpled pieces of paper. Lift Card offers built-in graphs to monitor your performance over time, from weightlifting stats to cardio intervals.",
        images: "/images/chart.png",
        alt: "Customizable",
      },
      {
        name: "Flaunt Your PRs",
        description:
          "Your Personal Records (PRs) deserve to be celebrated. Our app makes it easy to display and share your PRs, helping to both motivate you and inspire others.",
        images: "/images/trophy.png",
        alt: "Customizable",
      },
      {
        name: "Comment and Engage",
        description:
          "Community doesn't just mean observing; it means engaging. Leave comments, ask for tips, and share your own insights. We're creating a fitness social media that truly adds value to your workout regimen.",
        images: "/images/memo.png",
        alt: "Customizable",
      },
      {
        name: "Join the Revolution",
        images: "/images/globe.png",
        description: "Community doesn't just mean observing; it means engaging. Leave comments, ask for tips, and share your own insights. We're creating a fitness social media that truly adds value to your workout regimen.",
        alt: "Customizable",
      },
    ]

const SecondSection = () => {
  return (
    <div className="flex-cal items-center justify-center">
        <div className="text-3xl flex justify-center md:text-5xl
        font-bold pt-5 pb-10"> 
            Product Features
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40"> {/*Use grid container*/}
        {prodfeature.map((prodfeature, index) => ( 
                        <div
                        key={index}
                        className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
                        >
                            <div className="
                            text-gray-600 text-3xl font-bold
                            ">
                                <Image
                                src={prodfeature.images}
                                alt={prodfeature.alt}
                                width={300}
                                height={300}
                                className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                                />
                                <div>
                                    <div className="text-2xl pb-4 bg-gradient-to-t
                                    from-black
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent

                                    
                                    
                                    ">{
                                    prodfeature.name}
                                    </div>

                                    <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                                        {prodfeature.description}




                                    </div>
                                </div>
                            </div>
                         </div>
                        ))}
        </div>
    </div>
      
  )
}

export default SecondSection
