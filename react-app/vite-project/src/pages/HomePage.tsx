import React from 'react';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import bannerImg from '../asserts/Dragon.jpg';
import whoImg from '../asserts/Xiu_Feng_Searcy.jpg';
import s1 from '../asserts/dragon_phoenix_3.png';
import s2 from '../asserts/dragon_phoenix_6.png';
import s3 from '../asserts/dragon_phoenix_8.png';
import s4 from '../asserts/cupping.jpg';
import s5 from '../asserts/herbal_medicine.jpg';
import s6 from '../asserts/tuina.jpg';
import faceImg from '../asserts/face.jpg';
import { DoctorCard } from '../common/doctorCard';
import { doctors } from '../common/doctorCard/doctors';

export const HomePage: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />

    {/* Banner (full width) */}
    <div className="w-full h-[520px] overflow-hidden mb-8">
      <img src={bannerImg} alt="Dragon Phoenix Acupuncture Banner" className="w-full h-full object-fill" />
    </div>

    <section id="appointment" className="max-w-[1500px] mx-auto px-5 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div>
          <div className="mb-4 h-6 w-6 rounded-full bg-brand-primary/20" />
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-5">Who we are</h2>
          <p className="italic text-gray-600 text-lg mb-4">We've been providing acupuncture for more than 25 years in the Kissimmee area.</p>
          <p className="text-gray-700 mb-4">
            About founder Xiu Feng Searcy: Over 50+ years - experienced in Eastern & Western Medicine, 25 years as MD in China,
            certified by National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM),
            member-Florida Acupuncture Association.
          </p>
          <p className="text-gray-700">
            Consultations are FREE! If you are considering acupuncture and would like to discuss treatment in greater detail, feel free to schedule an appointment.
          </p>
          <a href="/physicians" className="text-brand-secondary hover:text-brand-light inline-block mt-4">Learn more about us →</a>
        </div>

        <div className="text-center">
          <img src={whoImg} alt="Dr. Xiu Feng Searcy" className="mx-auto max-w-md rounded-lg shadow" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Schedule an Appointment</h2>
          <p className="text-gray-700 mb-6">
            We will contact you at our earliest convenience. If however, you do not hear from us within a 24-hour period
            please call us here at the Kissimmee location, (407) 932-4818 to verify your request was received.
          </p>
          <form action="https://formspree.io/f/mkgranjq" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-gray-800">Name<span className="text-red-600">*</span></label>
                <input id="name" name="name" required className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-gray-800">Email<span className="text-red-600">*</span></label>
                <input id="email" name="email" type="email" required className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-gray-800">Phone<span className="text-red-600">*</span></label>
                <input id="phone" name="phone" required maxLength={14} placeholder="(xxx) xxx-xxxx" className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="new-client" className="mb-1 text-gray-800">Are You a New Client?<span className="text-red-600">*</span></label>
                <select id="new-client" name="new-client" required className="border border-gray-300 rounded px-3 py-2">
                  <option value="">Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="appointment-date" className="mb-1 text-gray-800">Preferred Appointment Date<span className="text-red-600">*</span></label>
                <input id="appointment-date" name="appointment-date" type="date" required className="border border-gray-300 rounded px-3 py-2" />
                <span id="weekday-display" className="text-gray-600 text-sm mt-1" />
                <span id="date-warning" className="text-red-600 text-sm mt-1 hidden" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="appointment-time" className="mb-1 text-gray-800">Preferred Time Slot<span className="text-red-600">*</span></label>
                <select id="appointment-time" name="appointment-time" required className="border border-gray-300 rounded px-3 py-2">
                  <option value="">Select...</option>
                  <option>9:00 AM – 10:00 AM</option>
                  <option>10:00 AM – 11:00 AM</option>
                  <option>11:00 AM – 12:00 PM</option>
                  <option>1:00 PM – 2:00 PM</option>
                  <option>2:00 PM – 3:00 PM</option>
                  <option>3:00 PM – 4:00 PM</option>
                  <option>4:00 PM – 5:00 PM</option>
                  <option>Any time</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="additional-info" className="mb-1 text-gray-800">Additional Information</label>
              <textarea id="additional-info" name="additional-info" rows={4} className="border border-gray-300 rounded px-3 py-2" />
            </div>

            <input type="hidden" id="clientTime" name="clientTime" />
            <button type="submit" className="inline-flex items-center justify-center bg-[#395c3b] text-white px-5 py-3 rounded hover:bg-[#2e7d32] transition-colors">Submit Appointment Request</button>
            <p className="text-gray-600 text-sm">* All fields are required. Your information will be sent securely to our clinic.</p>
          </form>
        </div>
      </div>
    </section>

    {/* Our Team (condensed) */}
    <section className="bg-white max-w-[1400px] mx-auto px-5 pb-14">
      <div className="text-center mb-10">
        <h2 className="text-3xl text-[#395c3b] mb-3">Our Team</h2>
        <p className="text-gray-600">Meet our experienced practitioners dedicated to your health and wellness</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {doctors.map((d) => (
          <DoctorCard key={d.id} doctor={d} />
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="bg-[#f1f9f0] px-5 py-14">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl text-[#395c3b] mb-3">Our Services</h2>
        <p className="text-gray-600">We offer a comprehensive range of traditional Chinese medicine treatments tailored to your needs.</p>
      </div>
      <div className="mt-10 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-8">
        {[{ img: s1, title: 'Traditional Acupuncture', desc: 'Traditional needle therapy to stimulate energy flow' },
          { img: s2, title: 'Scalp & Ear Acupuncture', desc: 'Precise stimulation to treat neurological conditions and pain' },
          { img: s3, title: 'Bioelectric Therapy', desc: 'Electrical stimulation to relieve pain and accelerate healing' },
          { img: s4, title: 'Cupping Therapy', desc: 'Suction technique to improve circulation and reduce pain' },
          { img: s5, title: 'Herbal Medicine', desc: 'Customized herbal formulations for various conditions' },
          { img: s6, title: 'TuiNa (Therapeutic Massage)', desc: 'Massage to balance energy and relieve tension' },
        ].map((s, i) => (
          <div key={i} className="flex-[0_0_calc(33.33%_-_30px)] min-w-[280px] bg-white rounded shadow text-center overflow-hidden">
            <div className="h-56 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-[#395c3b] mt-4 mb-2 px-4 text-lg">{s.title}</h3>
            <p className="text-gray-600 px-4 pb-5">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* History */}
    <section
      className="text-white text-center py-20 px-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${faceImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl mb-6">History of Acupuncture</h2>
        <div className="text-left leading-8 text-[1.05rem]">
          <p className="mb-4">Traditional Chinese medicine-one of the oldest forms of healing known and it is a great treasure house of information. It embodies the fine achievements accumulated over the millennia in the course of the medical practice of Chinese Physicians. The special methods of Acupuncture and Moxibustion, with their multiple advantages, have been handed down from ancient times and have improved through the ages. They are still widely used in many Asian and European countries.</p>
          <p className="mb-4">Since acupuncture was first introduced to the United States in the 1970s, there has been an increasing awareness of the usefulness of treating many medical conditions. The Food and Drug Administration has removed acupuncture needles from its category of "experimental medical devices" and now regulates them under good manufacturing practices and single-use standards of sterility.</p>
          <p className="text-right italic">-XIU FENG SEARCY, LAc</p>
        </div>
      </div>
    </section>

    {/* Hours */}
    <section className="bg-[#f5fff2] py-6">
      <div className="max-w-[1600px] mx-auto flex justify-around gap-6 px-5">
        <div className="text-center p-6 min-w-[200px]">
          <h3 className="text-3xl text-gray-800 mb-2">9<span className="text-2xl">AM</span> — 5<span className="text-2xl">PM</span></h3>
          <p className="uppercase tracking-widest text-gray-600">Monday - Saturday</p>
        </div>
        <div className="text-center p-6 min-w-[200px]">
          <h3 className="text-3xl">CLOSED</h3>
          <p className="uppercase tracking-widest text-gray-600">Sunday</p>
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="bg-gray-100">
      <div className="w-full h-[450px]">
        <iframe
          title="clinic-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14055.353746469302!2d-81.3390036!3d28.2729154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed674992cf3991ee!2sDragon%20Phoenix%20Acupuncture!5e0!3m2!1sen!2sin!4v1596731702074!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>

    <Footer />
  </div>
);
