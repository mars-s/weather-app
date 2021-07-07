import React from 'react'

const CTA = () => {
    return (
        <>
            <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div class="container mx-auto px-6 flex relative py-16">
                    <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            <span class="text-5xl sm:text-7xl">
                                Your
                            </span>weather
                            <span class="text-5xl sm:text-7xl">
                                Your way
                            </span>
                        </h1>
                        <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                            Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                        </p>
                        <div class="flex mt-8">
                            <a href="/app" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </a>
                            <a href='/team' class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div class="container mx-auto px-6">
                        <img src="https://images.pexels.com/photos/7766717/pexels-photo-7766717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='pic' className="object-contain object-left h-full w-full" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default CTA
