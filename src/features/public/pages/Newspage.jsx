import React, { useEffect, useState } from "react";

import { CiLocationOn } from "react-icons/ci";
import { createClient } from "@supabase/supabase-js";
import { NavLink, useParams } from "react-router-dom";

const supabase = createClient(
  "https://rcicgoflytnsafpbxnwd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaWNnb2ZseXRuc2FmcGJ4bndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjc0NzIsImV4cCI6MjA1ODg0MzQ3Mn0.ofxifpwkYcVZEH7QybeChBrwpHpPsvIikahz7EPIyUE"
);

const Newspage = () => {
    
  const [info, setInfo] = useState([]);
  const [posts, setPosts] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    getInformation();
    getPosts();
  }, []);

  async function getInformation() {
    const { data } = await supabase.from("categories").select();
    setInfo(data);
    console.log(data);
  }
  const division = info?.find((item) => item.id == id)?.name;
  console.log(division,"division")
  async function getPosts() {
    const { data } = await supabase.from("posts").select();
    console.log(data,"data news")
    const newsPosts = data.filter((post) => post.category_id == id);
    setPosts(newsPosts);
    console.log(newsPosts);
  }

  console.log(posts,"posts");

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
<div className="bg-black">
        <main className=" mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* title and button for news */}
          <div className="">
          <h2 className="text-2xl font-bold text-white mb-8">
          သတင်းများကြည့်ရန်
                  </h2>
                  <div className="flex  flex-col md:flex-row  md:items-center gap-5">
                    {info?.map((item) => (
                      <NavLink to={`/news/${item.id}`} key={item.id} className=" py-2 px-5 flex justify-center items-center rounded-lg text-white text-lg mb-3 md:mb-0 border-death border">{item.name}</NavLink>
                    ))}

                  </div>
          </div>
            <div className="lg:col-span-2 border border-[#5E5E5E] rounded-lg">
              <div className="bg-home text-white rounded-lg shadow">
                
                <ul className="max-h-96 overflow-y-auto divide-gray-200  rounded-lg">
                  {posts?.map((area) => (
                    <li
                      key={area.id}
                      className="p-4   border-b border-[#5E5E5E] last:border-b-0 cursor-pointer "
                    >
                      <div className=" mb-5 md:mb-0">
                          <div className="gap-2 ">
                            <div className="flex justify-between items-center">
                            <h3 className="text-xl mb-2 font-medium text-white">
                              {division}
                            </h3>
                            <div className="">
                            <p className="text-sm  text-white">
                              {new Date(area.created_at).toLocaleDateString()}
                            </p>
                          </div>
                            </div>
                            <h3 className="text-sm font-medium text-white">
                                {area.article}
                            </h3>
                          </div>

                          
                        </div>
                    </li>
                  ))}
                </ul>
                
              </div>
              
            </div>
            
            
            
          </div>
        </main>
        
      </div>  )
}

export default Newspage