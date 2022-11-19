import './App.css';
import dropdown from './files/dropdown.svg';
import searchico from './files/searchico.svg';
import fimg from './files/fimg.png'

function App() {
  return (
    <div className="App w-full h-full">
      <div id="events_page" className="bg-slate-200 w-full h-full grid md:grid-cols-12">
        <div id="md_right_bar" className="md:col-span-5 p-10">
            <div id="search" className="w-480px mb-10">
                <label for="email" className="relative block">
                    <img className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" src={searchico} alt="" />
                    <input type="text" name="search" placeholder="Search" className="form-input w-full h-12 py-3 px-10 bg-slate-200 border border-searchbd rounded-lg placeholder:text-black" />
                </label>
            </div>

            <div id="filter_search_header" className="mb-10">
                <p className="font-manrope font-semibold text-2xl text-eblack">Filters your search</p>
            </div>

            <div id="date" className="mb-10">
                <div className="flex">
                    <span className="mr-6 font-manrope font-semibold text-2xl text-eblack">Date</span>
                    <img src={dropdown} alt="" />
                </div>
                <p className="text-selectdesc mb-4">Select any date</p>
                <div className="day mb-4 text-smtxts bg-white h-12 w-480px py-3 pl-3 rounded-r-lg border-l-blue-600 border-l-4"><span>Today</span></div>
                <div className="day mb-4 text-smtxts"><span>Tomorrow</span></div>
                <div className="day mb-4 text-smtxts"><span>This weekend</span></div>
            </div>

            <div id="category" className="mb-10">
                <div className="flex">
                    <span className="mr-6 font-manrope font-semibold text-2xl text-eblack">Category</span>
                    <img src={dropdown} alt="" />
                </div>
                <p className="text-selectdesc mb-4">Select any Category</p>
                <div className="cate-item mb-4 text-smtxts bg-white h-12 w-480px py-3 pl-3 rounded-r-lg border-l-blue-600 border-l-4"><span>Convention</span></div>
                <div className="cate-item mb-4 text-smtxts"><span>Seminar</span></div>
                <div className="cate-item mb-4 text-smtxts"><span>Workshop</span></div>
            </div>

            <div id="calender" className="mb-10">
                <div id="the-calender" className="mb-4">
                    <input type="date" name="" id="" />
                </div>
                <p className="text-smtxts">Click on date to see scheduled event for that day.</p>
            </div>
        </div>

        <div id="md_left_bar" className="md:col-span-7 pl-10">
            <h1 className="text-eblack font-manrope font-bold text-2xl pt-10 pb-6">Upcoming Events</h1>
            <div id="events" className="flex flex-row lg:w-718px lg:h-150px bg-white rounded-lg overflow-hidden">
                <img src={fimg} alt="" />
                <div className="flex justify-center items-center">
                    <div className="py-5 px-9">
                        <p className="text-eblack font-manrope font-semibold text-2xl">Aplicar Career Con...</p>
                        <span className="block text-eblack font-manrope text-smtxts">Event Hall 1, Shelton Hotel Abuja FCT.</span>
                        <span className="block text-eblack font-manrope text-smtxts">Tuesday, Nov 22, 10:00am</span>
                    </div>
                    <div className="w-20 h-12 py-3 px-6 bg-btnbg rounded-lg"><a className="text-eblack font-manrope font-normal text-base text-smtxts" href="">Free</a></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
