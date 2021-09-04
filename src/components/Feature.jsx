import ScrollDown from "./ScrollDown";
import WeatherSearch from "./WeatherSearch";
import { MdMoneyOff } from 'react-icons/md'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { GiFeather } from 'react-icons/gi'

const Feature = () => {
    return (
      <div className='bg-gray-100'>
          <div className='m-1 flex justify-center invisible h-0 md:h-auto md:visible'>
            <ScrollDown text={'scroll down'} />
          </div>
        <div className="px-4 py-2 mt-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                </svg>
                <span className="relative">Why</span>
              </span>{' '}
              use our app?
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              What seperates us from the rest of the weather applications.
            </p>
          </div>
          <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800 text-white sm:mx-auto sm:w-24 sm:h-24 transition duration-500 ease-in-out transform hover:scale-125">
              <svg
                  className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">Simplicity and convenience</h6>
              <p className="mb-3 text-sm text-gray-900">
                We value simplicity at above everything and deliver information in a way so that it can be 
                easy to read and know the data presented.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                
              </a>
            </div>
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800 text-white sm:mx-auto sm:w-24 sm:h-24 transition duration-500 ease-in-out transform hover:scale-125">
                
                <GiFeather className="text-5xl"/>

              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">User-Friendly</h6>
              <p className="mb-3 text-sm text-gray-900">
                We have simplified the weather checking experience from complicated terms and factors that you will find in other apps and websites.
                In our website you don't worry about things like the wind direction or the visibility. You can just concentrate on what is really important,
                the weather in simple terms with a nice representative image. 
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                
              </a>
            </div>
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800 text-white sm:mx-auto sm:w-24 sm:h-24 transition duration-500 ease-in-out transform hover:scale-125">
                
                <HiOutlineUserGroup className="text-5xl mb-1"/>

              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">Made my outselves</h6>
              <p className="mb-3 text-sm text-gray-900">
                We haven't got codes or other elements of our application from other people. It was all ourselves. 
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                
              </a>
            </div>
            <div className="max-w-md sm:mx-auto sm:text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800 text-white sm:mx-auto sm:w-24 sm:h-24 transition duration-500 ease-in-out transform hover:scale-125">
                
                <MdMoneyOff className="text-5xl"/>

              </div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Its Free
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                We have made this application that means that there is nothing like a subscription at all. Its completely free, end of topic.
                Nothing more, Nothing less. 
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                
              </a>
            </div>
          </div>
          <div className='flex justify-center h-0 md:h-auto invisible md:visible'>
            <ScrollDown text={'Give it a try!'} className='' />
          </div>
          <WeatherSearch />
        </div>
      </div>
      
    );
  };

  export default Feature