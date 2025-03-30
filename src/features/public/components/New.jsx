
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://rcicgoflytnsafpbxnwd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaWNnb2ZseXRuc2FmcGJ4bndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjc0NzIsImV4cCI6MjA1ODg0MzQ3Mn0.ofxifpwkYcVZEH7QybeChBrwpHpPsvIikahz7EPIyUE");


export default function New() {


    const [info, setInfo] = useState([]);
    useEffect(() => {
      getInformation();
    }, []);


    async function getInformation() {
        const { data } = await supabase.from("userInfo").select();
        setInfo(data);
      console.log(data);

      }




    const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(interval);
  }, []);



    return (
      <div className=" bg-black text-white p-6">
        {/* Header */}
      <div className='flex flex-col  md:flex-row justify-between my-7 '>
      <div className="mb-5 md:mb-3">
          <h1 className="text-3xl font-medium mb-2">အင်အားပြင်း ငလျင်ကြောင့် </h1>
          <p className="text-3xl font-light">ထိခိုက်ဒဏ်ရာ ရသူများစာရင်း</p>
        </div>
  
        {/* Date and Time Inputs */}
        <div className="flex  md:justify-end gap-6 md:gap-4 mb-3 mt-5">
          <div className="flex flex-col">
            <label className="text-xl mb-2 ">ရက်စွဲ</label>
            <input
              type="text" readOnly
              value={time.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}
              placeholder="DD/MM/YY"
              className="bg-zinc-800 border border-zinc-700 rounded px-4 py-2 md:w-48 w-36 text-center"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl mb-2 ">အချိန်</label>
            <input
             value={time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit',  hour12: true }).replace(/am/i, 'AM').replace(/pm/i, 'PM')}
              type="text" readOnly
              placeholder="7:00 AM"
              className="bg-zinc-800 border border-zinc-700 rounded px-4 py-2 md:w-48 w-36 text-center"
            />
          </div>
        </div>
      </div>
  
        {/* Stat Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
          <h3 className='text-xl  mb-2 font-medium'>သေဆုံး</h3>
            <div className="bg-death rounded-md h-28 flex items-center justify-center text-3xl font-bold">{info?.[0]?.
total_dead
}</div>
          </div>
  
          <div className="flex flex-col">
          <h3 className='text-xl  mb-2 font-medium'>ဒဏ်ရာရ</h3>
            <div className="bg-injury rounded-md h-28 flex items-center justify-center text-3xl font-bold">{info?.[0]?.wounded_person
            }</div>
          </div>
  
          <div className="flex flex-col">
          <h3 className='text-xl mb-2 font-medium'>ပျောက်ဆုံး</h3>
            <div className="bg-lost rounded-md h-28 flex items-center justify-center text-3xl font-bold">{info?.[0]?.
missing_person}</div>
          </div>

          
        </div>
      </div>
    )
  }
  
  