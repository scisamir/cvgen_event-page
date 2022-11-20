import React from 'react'

export default function Events(props) {
  return (
    <div id="events" className="flex md:flex-row flex-col w-full md:h-28 lg:h-40 mb-12 bg-white rounded-lg">
        <img className="rounded-t-lg md:rounded-tr-none md:rounded-l-lg" src={props.event.img} alt="" />
        <div className="truncate p-5 lg:p-0 flex justify-between items-center">
            <div className="truncate pr-2 md:py-2 lg:py-5 lg:px-6">
                <p className="truncate text-eblack font-manrope font-semibold lg:text-2xl">{props.event.headline}</p>
                <span className="md:block md:truncate text-eblack font-manrope text-smtxts text-sm md:text-xs lg:text-base font-bold md:font-normal">{props.event.place}</span>
                <span className="md:block hidden truncate text-eblack font-manrope text-smtxts text-sm md:text-xs lg:text-base font-bold md:font-normal">{props.event.time}</span>
            </div>
            <div className="w-20 h-12 lg:mr-4 flex justify-center items-center bg-btnbg rounded-lg"><a className="font-manrope text-smtxts md:text-xs lg:text-base" href="">Free</a></div>
        </div>
    </div>
  )
}
