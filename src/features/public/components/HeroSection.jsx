import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto my-16 px-4 sm:px-0">
      <div>
        <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center ">
          <h1 className="text-3xl font-bold max-w-[400px] sm:max-w-[420px] leading-10">အင်အားပြင်း ငလျင်ကြောင့် နောက်ဆုံးရ သေဆုံး/ဒဏ်ရာရစာရင်း</h1>
          <div className="flex items-center sm:justify-between gap-5">
            <div className="space-y-2.5">
              <h6 className="text-xl font-bold">ရက်စွဲ</h6>
              <div className="p-4 rounded-lg border border-gray-500 w-full sm:w-[250px] flex items-center justify-center">
                  <p className="text-xl">      {time.toLocaleDateString("en-US", { timeZone: "Asia/Yangon" })}
                  </p>
              </div>
            </div>
            <div className="space-y-2.5">
              <h6 className="text-xl font-bold">အချိန်</h6>
            <div className="p-4 rounded-lg border border-gray-500 w-full sm:w-[250px] flex items-center justify-center">
              
              <p className="text-xl">      {time.toLocaleTimeString("en-US", { timeZone: "Asia/Yangon" })}
              </p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
