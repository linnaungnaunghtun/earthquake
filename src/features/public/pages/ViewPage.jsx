import React, { useEffect, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { BsActivity } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { createClient } from "@supabase/supabase-js";
import New from "../components/New";

const supabase = createClient(
  "https://rcicgoflytnsafpbxnwd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaWNnb2ZseXRuc2FmcGJ4bndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjc0NzIsImV4cCI6MjA1ODg0MzQ3Mn0.ofxifpwkYcVZEH7QybeChBrwpHpPsvIikahz7EPIyUE"
);

function ViewPage() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getInformation();
  }, []);

  async function getInformation() {
    const { data } = await supabase.from("areas").select();
    setInfo(data);
    console.log(data);
  }

  console.log(info);

  const [earthquakes, setEarthquakes] = useState([
    {
      id: "1",
      magnitude: 6.2,
      location: "Off the coast of California",
      time: "2024-03-15T10:30:00",
      depth: 10.5,
    },
    {
      id: "2",
      magnitude: 5.8,
      location: "Central Japan",
      time: "2024-03-15T09:15:00",
      depth: 15.2,
    },
    {
      id: "3",
      magnitude: 4.5,
      location: "Southern Alaska",
      time: "2024-03-15T08:45:00",
      depth: 8.7,
    },
    {
      id: "4",
      magnitude: 4.5,
      location: "Southern Alaska",
      time: "2024-03-15T08:45:00",
      depth: 8.7,
    },

    {
      id: "5",
      magnitude: 4.5,
      location: "Southern Alaska",
      time: "2024-03-15T08:45:00",
      depth: 8.7,
    },
    {
      id: "6",
      magnitude: 4.5,
      location: "Southern Alaska",
      time: "2024-03-15T08:45:00",
      depth: 8.7,
    },
  ]);

  const Information = [
    {
      id: "1",
      title: "Magnitude",
      description: "6.2",
    },
    {
      id: "2",
      title: "Location",
      description: "Off the coast of California",
    },
    {
      id: "3",
      title: "Time",
      description: "2024-03-15T10:30:00",
    },
    {
      id: "4",
      title: "Depth",
      description: "10.5 km",
    },
  ];

  const [selectedQuake, setSelectedQuake] = useState(null);

  const getMagnitudeColor = (magnitude) => {
    if (magnitude >= 7) return "bg-red-500";
    if (magnitude >= 5) return "bg-orange-500";
    if (magnitude >= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <>
    <div className="bg-death p-3 text-white">
        <marquee className="text-sm">ငလျင်းဘေးအန္တရာယ် မှ  ကင်းဝေးကြပါစေလို့ Myanmar Quake Support Team မှ ဆုတောင်းပေးလိုက်ပါတယ်  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;   ငလျင်းဘေးအန္တရာယ် မှ  ကင်းဝေးကြပါစေလို့ MMQuakeSupport.net မှ ဆုတောင်းပေးလိုက်ပါတယ်</marquee>
    </div>
      <New />
      <div className="bg-black">
        <main className=" mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <h2 className="text-2xl font-bold text-white">
                    ကူညီရန်သွားဖို့လိုအပ်သောနေရာများ
                  </h2>
            <div className="lg:col-span-2 border border-[#5E5E5E] rounded-lg">
              <div className="bg-home text-white rounded-lg shadow">
                
                <ul className="max-h-96 overflow-y-auto divide-gray-200  rounded-lg">
                  {info.map((area) => (
                    <li
                      key={area.id}
                      className="p-4   border-b border-[#5E5E5E] last:border-b-0 cursor-pointer "
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        {/* location and time */}
                        <div className="flex items-start md:items-center justify-between mb-5 md:mb-0">
                          <div className="gap-2 w-[600px]">
                            <h3 className="text-xl mb-2 font-medium text-white">
                              {area.division}
                            </h3>
                            <h3 className="text-sm font-medium text-white">
                              {area.state} {area.steet}
                            </h3>
                          </div>

                          <div className="">
                            <p className="text-sm  text-white">
                              {new Date(area.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-center h-[50px] bg-death text-white rounded-xl px-5 ">
                            <div className="flex items-center">
                            <CiLocationOn />
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${area.google_map_location}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className=""
                            >
                              တည်နေရာကြည့်ရန်
                            </a>
                            </div>
                          </div>
                        </div>
                        {/* <MapPin className="h-5 w-5 text-gray-400" /> */}
                      </div>
                    </li>
                  ))}
                </ul>
                
              </div>
              
            </div>
            
            
            {/* 
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h2 className="text-lg font-medium text-white">Earthquake Information</h2>
              </div>
              <div className="px-4 py-5 sm:px-6">
                {selectedQuake && (
                  <div>
                    <h3 className="text-lg font-medium text-white">{selectedQuake.location}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(selectedQuake.time).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <div className="flex items-center">
                  <FiAlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                  <h2 className="text-lg font-medium text-white">Safety Tips</h2>
                </div>
              </div>
              <div className="px-4 py-5 sm:px-6">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Drop, Cover, and Hold On during shaking</li>
                  <li>• Stay away from windows and exterior walls</li>
                  <li>• Have an emergency kit ready</li>
                  <li>• Know your evacuation routes</li>
                </ul>
              </div>
            </div>
          </div> */}
          </div>
        </main>
        
      </div>
      
    </>
  );
}

export default ViewPage;
