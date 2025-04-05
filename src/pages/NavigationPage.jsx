
import React, { useState, useEffect } from 'react';
import { Search, ZoomIn, ZoomOut, MapPin } from 'lucide-react';
import MapLocation from '../components/MapLocation';

const NavigationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapPositions, setMapPositions] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Sample campus locations
  const locations = [
    {
      id: 1,
      name: 'Main Administration Building',
      description: 'Houses the registrar, financial aid, and administrative offices.',
      type: 'Administrative',
      position: { x: 35, y: 30 },
    },
    {
      id: 2,
      name: 'Science Complex',
      description: 'Labs and classrooms for biology, chemistry, and physics departments.',
      type: 'Academic',
      position: { x: 65, y: 40 },
    },
    {
      id: 3,
      name: 'University Library',
      description: 'Main library with study spaces, books, and digital resources.',
      type: 'Resource',
      position: { x: 50, y: 60 },
    },
    {
      id: 4,
      name: 'Student Center',
      description: 'Includes dining options, recreation areas, and student services.',
      type: 'Recreation',
      position: { x: 30, y: 55 },
    },
    {
      id: 5,
      name: 'Engineering Building',
      description: 'Home to the engineering departments and computer labs.',
      type: 'Academic',
      position: { x: 75, y: 65 },
    },
    {
      id: 6,
      name: 'Residential Halls',
      description: 'On-campus housing for students with dining and laundry facilities.',
      type: 'Housing',
      position: { x: 20, y: 80 },
    },
    {
      id: 7,
      name: 'Sports Complex',
      description: 'Gym, pool, courts, and fields for athletics and recreation.',
      type: 'Recreation',
      position: { x: 60, y: 85 },
    },
  ];

  // Filter locations based on search query
  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle map zoom in
  const handleZoomIn = () => {
    if (zoomLevel < 2) setZoomLevel(prev => prev + 0.2);
  };

  // Handle map zoom out
  const handleZoomOut = () => {
    if (zoomLevel > 0.6) setZoomLevel(prev => prev - 0.2);
  };

  // Handle map drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - mapPositions.x,
      y: e.clientY - mapPositions.y
    });
  };

  // Handle map dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    setMapPositions({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  // Handle map drag end
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add mouse event listeners
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div className="page-transition min-h-screen pt-16 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus Navigator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your way around campus with our interactive map.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location list and search */}
          <div className="bg-white p-6 rounded-xl shadow-medium">
            <div className="mb-6">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="space-y-2 overflow-y-auto max-h-[500px] pr-2">
              {filteredLocations.length > 0 ? (
                filteredLocations.map(location => (
                  <MapLocation
                    key={location.id}
                    name={location.name}
                    description={location.description}
                    type={location.type}
                    isActive={selectedLocation?.id === location.id}
                    onClick={() => setSelectedLocation(location)}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No locations found.</p>
              )}
            </div>
          </div>
          
          {/* Interactive map */}
          <div className="lg:col-span-2">
            <div className="bg-blue-50 relative overflow-hidden h-[600px] rounded-xl shadow-medium">
              {/* Map background */}
              <div
                className={`absolute inset-0 bg-blue-50 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{
                  transform: `translate(${mapPositions.x}px, ${mapPositions.y}px) scale(${zoomLevel})`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
                onMouseDown={handleMouseDown}
              >
                {/* Map grid lines */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 opacity-50">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <React.Fragment key={i}>
                      <div className="w-full h-px bg-blue-200 absolute" style={{ top: `${(i+1) * 8.33}%` }} />
                      <div className="h-full w-px bg-blue-200 absolute" style={{ left: `${(i+1) * 8.33}%` }} />
                    </React.Fragment>
                  ))}
                </div>
                
                {/* Map location pins */}
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      selectedLocation?.id === location.id
                        ? 'z-20 scale-125'
                        : 'z-10 hover:scale-110'
                    }`}
                    style={{ left: `${location.position.x}%`, top: `${location.position.y}%` }}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className="relative group">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center 
                        ${selectedLocation?.id === location.id
                          ? 'bg-primary text-white shadow-md animate-pulse-soft'
                          : 'bg-white text-primary shadow-sm'
                        } 
                        cursor-pointer
                      `}>
                        <MapPin size={18} />
                      </div>
                      
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-gray-900 text-xs font-medium py-1 px-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {location.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Location details panel */}
              {selectedLocation && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-medium animate-fade-in">
                  <h3 className="font-medium text-lg">{selectedLocation.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{selectedLocation.description}</p>
                  <div className="mt-2 text-xs inline-block px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {selectedLocation.type}
                  </div>
                </div>
              )}
              
              {/* Zoom controls */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-sm">
                <button
                  onClick={handleZoomIn}
                  className="p-2 hover:bg-gray-50 transition-colors rounded-t-lg"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={20} />
                </button>
                <div className="h-px bg-gray-200"></div>
                <button
                  onClick={handleZoomOut}
                  className="p-2 hover:bg-gray-50 transition-colors rounded-b-lg"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
