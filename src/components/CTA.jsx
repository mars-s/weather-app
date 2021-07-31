import React from 'react'

const CTA = () => {
    return (
        <>
            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            <span className="text-5xl sm:text-7xl">
                                Your
                            </span>weather
                            <span className="text-5xl sm:text-7xl">
                                Your way
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                            Introducing Starfield a intuitive web-based weather app. Feel free to check the forecast at your connivence, whether its to confirm if you need an umbrella or a jacket, our app will guide you.
                        </p>
                        <div className="flex mt-8">
                            <a href="/app" className="transition duration-300 ease-in-out uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-white shadow-lg hover:text-pink-500 transform hover:-translate-1 hover:scale-105 border-pink-500">
                                Get started
                            </a>
                            <a href='/Aboutus' className="transition duration-300 ease-in-out uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 shadow-lg hover:text-white text-md transform hover:-translate-1 hover:scale-105">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="container mx-auto px-6 relative inset-y-0 left-3">
                        <img src="https://images.pexels.com/photos/7766717/pexels-photo-7766717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='pic' className="object-cover object-left h-full w-full rounded-3xl shadow-2xl" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default CTA
