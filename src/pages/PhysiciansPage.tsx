import React from 'react';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { PhysicianDetailCard } from '../common/physicianDetailCard';
import { Sidebar } from '../common/sidebar';
import { doctors } from '../common/doctorCard/doctors';

export const PhysiciansPage: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = React.useState(doctors[0]);

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash) {
      const doctorId = hash.substring(1);
      const element = document.getElementById(`doctor-${doctorId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const doctor = doctors.find(d => d.id === doctorId);
        if (doctor) {
          setSelectedDoctor(doctor);
        }
      }
    }
  }, []);

  const handleDoctorSelect = (doctor: typeof doctors[0]) => {
    setSelectedDoctor(doctor);
    const element = document.getElementById(`doctor-${doctor.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const displayedDoctors = doctors;

  return (
    <div className="min-h-screen bg-brand-light/20">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 md:px-4 py-4 sm:py-6 md:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">{}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <Sidebar
                items={doctors}
                selectedItem={selectedDoctor}
                onItemSelect={handleDoctorSelect}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-6 sm:space-y-8">
              {displayedDoctors.map((doctor) => (
                <div key={doctor.id} id={`doctor-${doctor.id}`}>
                  <PhysicianDetailCard doctor={doctor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
