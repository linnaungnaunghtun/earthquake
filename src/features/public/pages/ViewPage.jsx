import React, { useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { BsActivity } from 'react-icons/bs';
import { BiGlobe } from 'react-icons/bi';


function ViewPage() {
  const [earthquakes, setEarthquakes] = useState([
    {
      id: '1',
      magnitude: 6.2,
      location: 'Off the coast of California',
      time: '2024-03-15T10:30:00',
      depth: 10.5
    },
    {
      id: '2',
      magnitude: 5.8,
      location: 'Central Japan',
      time: '2024-03-15T09:15:00',
      depth: 15.2
    },
    {
      id: '3',
      magnitude: 4.5,
      location: 'Southern Alaska',
      time: '2024-03-15T08:45:00',
      depth: 8.7
    },
    {
        id: '4',
        magnitude: 4.5,
        location: 'Southern Alaska',
        time: '2024-03-15T08:45:00',
        depth: 8.7
      },

      {
        id: '5',
        magnitude: 4.5,
        location: 'Southern Alaska',
        time: '2024-03-15T08:45:00',
        depth: 8.7
      },
      {
        id: '6',
        magnitude: 4.5,
        location: 'Southern Alaska',
        time: '2024-03-15T08:45:00',
        depth: 8.7
      },

    
  ]);

  const [selectedQuake, setSelectedQuake] = useState(null);

  const getMagnitudeColor = (magnitude) => {
    if (magnitude >= 7) return 'bg-red-500';
    if (magnitude >= 5) return 'bg-orange-500';
    if (magnitude >= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BsActivity className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">EarthquakeWatch</h1>
          </div>
          <div className="flex items-center space-x-2">
            <BiGlobe className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600">Live Monitoring</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900">Recent Earthquakes</h2>
              </div>
              <ul className="max-h-96 overflow-y-auto divide-gray-200">
                {earthquakes.map((quake) => (
                  <li
                    key={quake.id}
                    className="px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                    onClick={() => setSelectedQuake(quake)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${getMagnitudeColor(quake.magnitude)} rounded-full flex items-center justify-center text-white font-bold`}>
                        {quake.magnitude}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{quake.location}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(quake.time).toLocaleString()}
                        </p>
                      </div>
                      {/* <MapPin className="h-5 w-5 text-gray-400" /> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900">Earthquake Information</h2>
              </div>
              <div className="px-4 py-5 sm:px-6">
                {selectedQuake ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Magnitude</h3>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{selectedQuake.magnitude}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Location</h3>
                      <p className="mt-1 text-lg text-gray-900">{selectedQuake.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Time</h3>
                      <p className="mt-1 text-lg text-gray-900">
                        {new Date(selectedQuake.time).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Depth</h3>
                      <p className="mt-1 text-lg text-gray-900">{selectedQuake.depth} km</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    {/* <Info className="mx-auto h-12 w-12 text-gray-400" /> */}
                    <p className="mt-2 text-sm text-gray-500">Select an earthquake to view details</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <div className="flex items-center">
                  <FiAlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900">Safety Tips</h2>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default ViewPage;
