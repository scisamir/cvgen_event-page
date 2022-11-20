import './App.css';
import Events from './components/Events.jsx';
import { useState } from 'react';
import Calendar from 'react-calendar';
import dropdown from './files/dropdown.svg';
import searchico from './files/searchico.svg';
import event_img1 from './files/event_img1.png'
import event_img2 from './files/event_img2.png'
import event_img3 from './files/event_img3.png'
import event_img4 from './files/event_img4.png'
import event_img5 from './files/event_img5.png'
import event_img6 from './files/event_img6.png'

function App() {
  const [dateState, setDateState] = useState(true);
  const [cateState, setCateState] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleDate = () => setDateState(!dateState);
  const handleCate = () => setCateState(!cateState);

  return (
    <div className="bg-eventshome w-full h-full">
      <h1 className="text-center font-manrope font-semibold md:font-bold text-2xl md:text-3xl lg:text-5xl px-4 pt-8">View our Scheduled Events here.</h1>
      <div id="events_page" className="bg-eventshome w-full h-full md:grid md:grid-cols-12 pb-12">
        <div id="md_right_bar" className="md:col-span-5 md:w-80 lg:w-auto p-6 md:p-10">
            <div id="search" className="w-11/12 mb-6 md:mb-10">
                <label for="email" className="relative block">
                    <img className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" src={searchico} alt="" />
                    <input type="text" name="search" placeholder="Search" className="form-input w-full h-12 py-3 px-10 bg-eventshome border border-searchbd rounded-lg placeholder:text-black" />
                </label>
            </div>

            <div id="filter_search_header" className="mb-6 md:mb-10">
                <p className="font-manrope font-semibold text-2xl text-eblack">Filters your search</p>
            </div>

            <div id="date" className="mb-6 md:mb-10">
                <div onClick={handleDate} className="flex cursor-pointer">
                    <span className="mr-6 font-manrope font-bold md:font-semibold text-xl md:text-2xl text-eblack">Date</span>
                    <img src={dropdown} alt="" />
                </div>
                <div className={`${dateState ? "block" : "hidden"}`}>
                  <p className="text-selectdesc mb-4">Select any date</p>
                  <div className="day mb-4 text-smtxts bg-white h-12 w-11/12 py-3 pl-3 rounded-r-lg border-l-blue-600 border-l-4"><span>Today</span></div>
                  <div className="day mb-4 text-smtxts"><span>Tomorrow</span></div>
                  <div className="day mb-4 text-smtxts"><span>This weekend</span></div>
                </div>

            </div>

            <div id="category" className="mb-6 md:mb-10">
                <div onClick={handleCate} className="flex cursor-pointer">
                    <span className="mr-6 font-manrope font-bold md:font-semibold text-xl md:text-2xl text-eblack">Category</span>
                    <img src={dropdown} alt="" />
                </div>
                <div className={`${cateState ? "block" : "hidden"}`}>
                  <p className="text-selectdesc mb-4">Select any Category</p>
                  <div className="cate-item mb-4 text-smtxts bg-white h-12 w-11/12 py-3 pl-3 rounded-r-lg border-l-blue-600 border-l-4"><span>Convention</span></div>
                  <div className="cate-item mb-4 text-smtxts"><span>Seminar</span></div>
                  <div className="cate-item mb-4 text-smtxts"><span>Workshop</span></div>
                </div>
                
            </div>

            <div id="calender" className="mb-6 md:mb-10">
                <div id="the-calender" className="w-10/12 mb-4">
                    <Calendar className="text-center bg-white p-4 rounded-lg" onChange={onChange} value={value} />
                </div>
                <p className="text-smtxts font-bold md:font-normal">Click on date to see scheduled event for that day.</p>
            </div>
        </div>

        <div id="md_left_bar" className="md:col-span-7 px-6 md:pl-10 mb-16">
            <h1 className="text-eblack font-manrope font-bold text-2xl pt-1 md:pt-10 pb-6">Upcoming Events</h1>
            <Events event={{
              img: event_img1,
              headline: "Aplicar Career Con...",
              place: "Event Hall 1, Shelton Hotel Abuja FCT.",
              time: "Tuesday, Nov 22, 10:00am"
            }} />
            <Events event={{
              img: event_img2,
              headline: "Applicar Luanch Par...",
              place: "Event Hall 1, Shelton Hotel Abuja FCT.",
              time: "Tuesday, Nov 29, 09:00am"
            }} />
            <Events event={{
              img: event_img3,
              headline: "Beta Watch Party...",
              place: "Event Hall 1, Shelton Hotel Abuja FCT.",
              time: "Friday, Dec 02, 10:00am"
            }} />
            <Events event={{
              img: event_img4,
              headline: "Lesson for Your Now...",
              place: "Event Hall 1, Shelton Hotel Abuja FCT.",
              time: "Tuesday, Dec 06, 10:00am"
            }} />
            <Events event={{
              img: event_img5,
              headline: "The importance of ...",
              place: "Event Hall 1, Shelton Hotel Abuja FCT.",
              time: "Thursday, Dec 08, 10:00am"
            }} />
            <Events event={{
              img: event_img6,
              headline: "Networking for Intro...",
              place: "Event Hall 1, Shelton Hotel Abuja FCT.",
              time: "Wednesday, Dec 14, 10:00am"
            }} />
        </div>
      </div>
    </div>
      
  );
}

export default App;
