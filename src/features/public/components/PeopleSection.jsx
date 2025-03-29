import React from 'react'

const PeopleSection = () => {
  return (
    <div className='container mx-auto mb-16 px-4 sm:px-0'>
        <section className='grid grid-cols-12 gap-5' >
        <div className='col-span-12 sm:col-span-4'>
            <h3 className='text-xl mb-4 font-bold'>သေဆုံး</h3>
            <div className='py-7 inline-flex justify-center items-center bg-death rounded-xl text-3xl text-white w-full'>
                0
            </div>
        </div>
        <div className='col-span-12 sm:col-span-4'>
            <h3 className='text-xl mb-4 font-bold'>ဒဏ်ရာရ</h3>
            <div className='py-7 inline-flex justify-center items-center bg-injury rounded-xl text-3xl text-white w-full'>
                0
            </div>
        </div>
        <div className='col-span-12 sm:col-span-4'>
            <h3 className='text-xl mb-4 font-bold'>ပျောက်ဆုံး</h3>
            <div className='py-7 inline-flex justify-center items-center bg-lost rounded-xl text-3xl text-white w-full'>
                0
            </div>
        </div>
    </section>
    </div>
  )
}

export default PeopleSection