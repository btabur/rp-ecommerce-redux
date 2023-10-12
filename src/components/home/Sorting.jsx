import React from 'react'

const Sorting = () => {
  return (
    <div className='bg-[#f6f6f6] my-5 p-5 flex items-center justify-end'>

        <select className='bg-green-400 py-3  px-5 rounded text-white shadow-md' name="" id="">
            <option value="" disabled>Seçiniz</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>

    </div>
  )
}

export default Sorting