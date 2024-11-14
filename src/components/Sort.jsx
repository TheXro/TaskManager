import { useState } from 'react'
import React from 'react'

function Sort() {
    const sort = ['All', 'High Priority', 'Low Priority']
    const [selected, setSelected] = useState(sort[0])
    const handleSelect = (item) => {
        setSelected(item)
    }
  return (
      <div className='flex gap-4'>
          {
              sort.map((item, index) => (
                  <button key={index} onClick={() => handleSelect(item)} className={`px-4 py-2 rounded-lg ${selected === item ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>{item}</button>
              ))
        }
    </div>
  )
}

export default Sort