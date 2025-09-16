import { useState } from "react";
import "./App.css";

import {
  Film,
  Palette,
  Share2,
  MapPin,
  Linkedin,
  Instagram,
  Phone,
} from "lucide-react";

// Correct imports from src/assets
import profilePhoto from "../public/assets/image/image_1.jpg";
import gfg from "../public/assets/image/image_2.jpg";


function App() {
  const [count, setCount] = useState(0);

  const portfolioProjects = [
    { title: "Cinematic Video Edits", desc: "Short films with cinematic effects.", video: "https://res.cloudinary.com/dxpitnkmt/video/upload/v1758024232/1751269638479269_ykqsgt.mp4"},
    { title: "Music Video", desc: "Cinematic cover song edits.", video: "https://res.cloudinary.com/dxpitnkmt/video/upload/v1758023958/_Tum_Hi_Aana_cover_song_1080p_cm1arx.mp4" },
    { title: "Event video", desc: "Compelling portraits with lighting.", video: "https://res.cloudinary.com/dxpitnkmt/video/upload/v1758023965/0205_1_c7moge.mov" },
    { title: "Event Photography", desc: "Dynamic event coverage.", img: gfg },
    { title: "Product Photography", desc: "E-commerce product shots.", img: "https://placehold.co/600x400/111827/818cf8?text=Product+Photo" },
  ];

  return (
    <div className="antialiased bg-gray-950 text-gray-200">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold gradient-text">Mustak.</a>
          <nav className="hidden md:flex space-x-8">
            {["About", "Skills", "Portfolio", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-sky-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="mailto:mdmustak01@icloud.com"
            className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(17,24,39,0.7), rgba(17,24,39,0.9)), url(${profilePhoto})`,
          }}
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Md Mustak Alam</h1>
            <p className="mt-4 text-xl md:text-2xl font-light gradient-text">
              Video Editor, Photographer & Poster Designer
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-gray-300">
              Creative and detail-oriented visual storyteller. Let's create something amazing together.
            </p>
            <div className="mt-10 flex justify-center flex-wrap gap-4">
              <a
                href="#portfolio"
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 section-title">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={profilePhoto}
                  alt="Md Mustak Alam"
                  className="rounded-full shadow-lg border-4 border-sky-500 w-64 h-64 object-cover"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-lg text-gray-300 mb-4">
                  I am a creative and detail-oriented Video Editor and Poster Designer with professional experience and technical knowledge.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  I bring ideas to life through cinematic edits, reels, and posters. Managed media for brands like GeeksforGeeks and 100+ freelance projects.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                  <MapPin className="w-6 h-6" />
                  <span>Jalandhar, Punjab</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 section-title">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="skill-card p-8 rounded-lg bg-gray-800 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Film className="text-sky-400 w-10 h-10" />
                  <h3 className="ml-4 text-2xl font-semibold text-white">Video Editing</h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Final Cut Pro</li>
                  <li>DaVinci Resolve</li>
                  <li>Adobe Premiere Pro</li>
                  <li>CapCut, VN Editor, KineMaster</li>
                  <li>Color Grading & Sound Design</li>
                  <li>Cinematic Storytelling</li>
                </ul>
              </div>

              <div className="skill-card p-8 rounded-lg bg-gray-800 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Palette className="text-sky-400 w-10 h-10" />
                  <h3 className="ml-4 text-2xl font-semibold text-white">Design & Posters</h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Canva</li>
                  <li>Adobe Photoshop (Basic)</li>
                  <li>Social Media Posters</li>
                  <li>Thumbnails & Creatives</li>
                  <li>Brand Guideline Adherence</li>
                </ul>
              </div>

              <div className="skill-card p-8 rounded-lg bg-gray-800 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Share2 className="text-sky-400 w-10 h-10" />
                  <h3 className="ml-4 text-2xl font-semibold text-white">Content & Media</h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Reels/Shorts Creation</li>
                  <li>Content Strategy & Scheduling</li>
                  <li>Engagement Analytics</li>
                  <li>Client Communication</li>
                  <li>Freelancing Workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 section-title">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((proj, idx) => (
                <div key={idx} className="project-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  {proj.video ? (
                    <video className="w-full h-60 object-cover" controls>
                      <source src={proj.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={proj.img} alt={proj.title} className="w-full h-60 object-cover" />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                    <p className="text-gray-400">{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 section-title">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="experience-card p-6 rounded-lg bg-gray-800 border border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-sky-400">Media Manager</h3>
                    <p className="text-white">GeeksforGeeks</p>
                  </div>
                  <span className="text-gray-400 text-sm">Mar 2025 - Present</span>
                </div>
                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                  <li>Created and managed video and poster content for social platforms.</li>
                  <li>Designed promotional posters, event creatives, and campaign visuals.</li>
                  <li>Improved engagement through better storytelling and consistent posting.</li>
                </ul>
              </div>
              <div className="experience-card p-6 rounded-lg bg-gray-800 border border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-sky-400">Video Editor & Designer</h3>
                    <p className="text-white">Freelance & Personal Projects</p>
                  </div>
                  <span className="text-gray-400 text-sm">2021 - Present</span>
                </div>
                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                  <li>Edited 100+ videos (shorts, reels, long-form) on MacBook.</li>
                  <li>Designed posters and social media assets for clients.</li>
                  <li>Managed end-to-end delivery from brief to final asset.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 section-title">Let's Connect</h2>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              I'm currently available for freelance projects and new opportunities. If you have a project in mind or just want to say hello, feel free to reach out!
            </p>
            <a
              href="mailto:mdmustak01@icloud.com"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg py-3 px-8 rounded-lg transition-transform transform hover:scale-105 mb-10"
            >
              mdmustak01@icloud.com
            </a>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/md-mustak-alam-b3129129a" target="_blank" className="text-gray-400 hover:text-sky-400">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://instagram.com/iammushtaq_07" target="_blank" className="text-gray-400 hover:text-sky-400">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="tel:7484962276" className="text-gray-400 hover:text-sky-400">
                <Phone className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400">
          <p>&copy; 2025 Md Mustak Alam. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
