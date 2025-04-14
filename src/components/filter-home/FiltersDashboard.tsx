import React from 'react'

function FiltersDashboard() {
  return (
    <div className="filter-component w-full flex flex-col sm:flex-row justify-start items-center bg-[var(--propel-clay-high)] rounded-2xl px-2 py-4 gap-4">
        <p className=''>
        {"Show me top performing organizations in: "}
        </p>
        <button className="bg-orange-500 rounded-2xl flex justify-between items-center py-0.5 px-2 text-white">
          Peru
        </button>
        <p className=''>{"in:"}</p>
        <button className="bg-orange-500 rounded-2xl flex justify-between items-center py-0.5 px-2 text-white">
          Education
        </button>
        <p className=''>{" that have participated in:"}</p>
        <button className="bg-orange-500 rounded-2xl flex justify-between items-center py-0.5 px-2 text-white">
          Followship
        </button>
      </div>
  )
}

export default FiltersDashboard