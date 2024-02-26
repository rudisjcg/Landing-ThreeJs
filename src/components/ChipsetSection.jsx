import React from 'react'
import Chipset from '../assets/images/A15-Bionic.jpg'

function ChipsetSection() {
  return (
    <div className='chipset-section wrapper'>
        <div className='body'>

        <h2 className='title'>New Processor</h2>
        <p className='text'>Fastest Processor</p>
        <span className='description'>
                    New A15 Bionic chip. More power. More efficiency.
                </span>
        <div className=''>
            <img  src={Chipset} alt='chipset' className='picture'/>
        </div>
        </div>

    </div>
  )
}

export default ChipsetSection