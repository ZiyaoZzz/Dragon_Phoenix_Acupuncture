import React from 'react';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { PhysicianDetailCard } from '../common/physicianDetailCard';
import { Sidebar } from '../common/sidebar';
import { doctors } from '../common/doctorCard/doctors';

export const PhysiciansPage: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = React.useState(doctors[0]);

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

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Sidebar
                items={doctors}
                selectedItem={selectedDoctor}
                onItemSelect={handleDoctorSelect}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-8">
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
