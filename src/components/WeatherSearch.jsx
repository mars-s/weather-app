import { useState, useEffect } from 'react'

import Select from 'react-select';

const options = [
    // { value: 'dummyText', label: 'dummyText' },
    { value: 'aberdeen', label: 'Aberdeen' },
    { value: 'abilene', label: 'Abilene' },
    { value: 'akron', label: 'Akron' },
    { value: 'albany', label: 'Albany' },
    { value: 'Albuquerque', label: 'Albuquerque' },
    { value: 'Allentown', label: 'Allentown' },
    { value: 'Amarillo', label: 'Amarillo' },
    { value: 'Anaheim', label: 'Anaheim' },
    { value: 'Anchorage', label: 'Anchorage' },
    { value: 'Ann Arbor', label: 'Ann Arbor' },
    { value: 'Antioch', label: 'Antioch' },
    { value: 'Apple Valley', label: 'Apple Valley' },
    { value: 'Appleton', label: 'Appleton' },
    { value: 'Arlington', label: 'Arlington' },
    { value: 'Arvada', label: 'Arvada' },
    { value: 'Asheville', label: 'Asheville' },
    { value: 'Athens', label: 'Athens' },
    { value: 'Atlanta', label: 'Atlanta' },
    { value: 'Atlantic City', label: 'Atlantic City' },
    { value: 'Augusta', label: 'Augusta' },
    { value: 'Aurora', label: 'Aurora' },
    { value: 'Austin', label: 'Austin' },
    { value: 'Bakersfield', label: 'Bakersfield' },
    { value: 'Baltimore', label: 'Baltimore' },
    { value: 'Barnstable', label: 'Barnstable' },
    { value: 'Baton Rouge', label: 'Baton Rouge' },
    { value: 'Beaumont', label: 'Beaumont' },
    { value: 'Bel Air', label: 'Bel Air' },
    { value: 'Bellevue', label: 'Bellevue' },
    { value: 'Berkeley', label: 'Berkeley' },
    { value: 'Bethlehem', label: 'Bethlehem' },
    { value: 'Billings', label: 'Billings' },
    { value: 'Birmingham', label: 'Birmingham' },
    { value: 'Bloomington', label: 'Bloomington' },
    { value: 'Boise', label: 'Boise' },
    { value: 'Boise City', label: 'Boise City' },
    { value: 'Bonita Springs', label: 'Bonita Springs' },
    { value: 'Boston', label: 'Boston' },
    { value: 'Boulder', label: 'Boulder' },
    { value: 'Bradenton', label: 'Bradenton' },
    { value: 'Bremerton', label: 'Bremerton' },
    { value: 'Bridgeport', label: 'Bridgeport' },
    { value: 'Brighton', label: 'Brighton' },
    { value: 'Brownsville', label: 'Brownsville' },
    { value: 'Bryan', label: 'Bryan' },
    { value: 'Buffalo', label: 'Buffalo' },
    { value: 'Burbank', label: 'Burbank' },
    { value: 'Burlington', label: 'Burlington' },
    { value: 'Canton', label: 'Canton' },
    { value: 'Cape Coral', label: 'Cape Coral' },
    { value: 'Carrollton', label: 'Carrollton' },
    { value: 'Cary', label: 'Cary' },
    { value: 'Cathedral City', label: 'Cathedral City' },
    { value: 'Cedar Rapids', label: 'Cedar Rapids' },
    { value: 'Champaign', label: 'Champaign' },
    { value: 'Chandler', label: 'Chandler' },
    { value: 'Charleston', label: 'Charleston' },
    { value: 'Charlotte', label: 'Charlotte' },
    { value: 'Chattanooga', label: 'Chattanooga' },
    { value: 'Chesapeake', label: 'Chesapeake' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Chula Vista', label: 'Chula Vista' },
    { value: 'Cincinnati', label: 'Cincinnati' },
    { value: 'Clarke County', label: 'Clarke County' },
    { value: 'Clarksville', label: 'Clarksville' },
    { value: 'Clearwater', label: 'Clearwater' },
    { value: 'Cleveland', label: 'Cleveland' },
    { value: 'College Station', label: 'College Station' },
    { value: 'Colorado Springs', label: 'Colorado Springs' },
    { value: 'Columbia', label: 'Columbia' },
    { value: 'Columbus', label: 'Columbus' },
    { value: 'Concord', label: 'Concord' },
    { value: 'Coral Springs', label: 'Coral Springs' },
    { value: 'Corona', label: 'Corona' },
    { value: 'Corpus Christi', label: 'Corpus Christi' },
    { value: 'Costa Mesa', label: 'Costa Mesa' },
    { value: 'Dallas', label: 'Dallas' },
    { value: 'Daly City', label: 'Daly City' },
    { value: 'Danbury', label: 'Danbury' },
    { value: 'Davenport', label: 'Davenport' },
    { value: 'Davidson County', label: 'Davidson County' },
    { value: 'Dayton', label: 'Dayton' },
    { value: 'Daytona Beach', label: 'Daytona Beach' },
    { value: 'Deltona', label: 'Deltona' },
    { value: 'Denton', label: 'Denton' },
    { value: 'Denver', label: 'Denver' },
    { value: 'Des Moines', label: 'Des Moines' },
    { value: 'Detroit', label: 'Detroit' },
    { value: 'Downey', label: 'Downey' },
    { value: 'Duluth', label: 'Duluth' },
    { value: 'Durham', label: 'Durham' },
    { value: 'El Monte', label: 'El Monte' },
    { value: 'El Paso', label: 'El Paso' },
    { value: 'Elizabeth', label: 'Elizabeth' },
    { value: 'Elk Grove', label: 'Elk Grove' },
    { value: 'Elkhart', label: 'Elkhart' },
    { value: 'Erie', label: 'Erie' },
    { value: 'Escondido', label: 'Escondido' },
    { value: 'Eugene', label: 'Eugene' },
    { value: 'Evansville', label: 'Evansville' },
    { value: 'Fairfield', label: 'Fairfield' },
    { value: 'Fargo', label: 'Fargo' },
    { value: 'Fayetteville', label: 'Fayetteville' },
    { value: 'Fitchburg', label: 'Fitchburg' },
    { value: 'Flint', label: 'Flint' },
    { value: 'Fontana', label: 'Fontana' },
    { value: 'Fort Collins', label: 'Fort Collins' },
    { value: 'Fort Lauderdale', label: 'Fort Lauderdale' },
    { value: 'Fort Smith', label: 'Fort Smith' },
    { value: 'Fort Walton Beach', label: 'Fort Walton Beach' },
    { value: 'Fort Wayne', label: 'Fort Wayne' },
    { value: 'Fort Worth', label: 'Fort Worth' },
    { value: 'Frederick', label: 'Frederick' },
    { value: 'Fremont', label: 'Fremont' },
    { value: 'Fresno', label: 'Fresno' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },
    { value: 'dummyText', label: 'dummyText' },

];

// const cities = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage",
//  "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta",
//  "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem",
//  "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport",
//  "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City",
//  "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati",
//  "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord",
//  "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton",
//  "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth",
//  "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana",
//  "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno",
//  "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake",
//  "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford",
//  "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma",
//  "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving",
//  "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City",
//  "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster",
//  "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach",
//  "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry",
//  "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile",
//  "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville",
//  "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh",
//  "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala",
//  "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park",
//  "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria",
//  "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie",
//  "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh",
//  "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester",
//  "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem",
//  "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose",
//  "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah",
//  "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend",
//  "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford",
//  "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton",
//  "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo",
//  "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo",
//  "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers",
//  "York", "Youngstown"]


const apiKey = '25cd6c1f94edbabc663aec7fd32b3bf0'

export default function WeatherSearch() {
    const [selectedOption, setSelectedOption] = useState('null');
    let iconCode = '01d'
    let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedOption.label}&appid=${apiKey}`)
            .then(Response => Response.json())
            .then(json => console.log(json))
            .then(setIsLoaded = true)
    }, [selectedOption])
    

    return (
        <div class="container items-center px-5 py-12 lg:px-20">
            <div class="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-4 '>
                        <div className="App">
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                    </div>

                </div>
                <div class="flex flex-col items-start py-2 rounded-lg lg:flex-row">

                    <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
                        <img src={iconUrl} alt="placeholder" class="rounded-lg" />
                    </div>
                    <div class="flex flex-col w-full text-blueGray-500 lg:ml-4 p-3">


                        <h2 class="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font pt-3">weather summary will go here</h2>
                        <p class="mb-3 text-base leading-relaxed text-blueGray-500">a short description of the weather will go here, and the icon of the weather state will go in the picture.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
