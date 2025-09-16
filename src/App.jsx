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

// Images and videos from public folder
const profilePhoto = "/image/76190458-FBC4-4654-85F7-C0930F08192F_1_105_c.jpeg";
const gfg = "/image/Geeks for Geeks Team.jpg";

const cinematicVideo = "/video/0205 (1).mp4";
const eventVideo = "/video/1751269638479269.mp4";
const coverSongVideo = "/video/_Tum Hi Aana cover song 1080p.mp4";
const reelVideo = "/video/reel (2).mp4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold gradient-text">
            Mustak.
          </a>
          <nav className="hidden md:flex space-x-8">
            {["About", "Skills", "Portfolio", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  {item}
                </a>
              )
            )}
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
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Md Mustak Alam
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light gradient-text">
              Video Editor, Photographer & Poster Designer
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-gray-300">
              Creative and detail-oriented visual storyteller. Let's create
              something amazing together.
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
            <h2 className="text-4xl font-bold text-center mb-12 section-title">
              About Me
            </h2>
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
                  I am a creative and detail-oriented Video Editor and Poster
                  Designer with professional experience and technical knowledge.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  I bring ideas to life through cinematic edits, reels, and
                  posters. Managed media for brands like GeeksforGeeks and 100+
                  freelance projects.
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
            <h2 className="text-4xl font-bold text-center mb-12 section-title">
              My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Video Editing",
                  icon: <Film className="text-sky-400 w-10 h-10" />,
                  skills: [
                    "Final Cut Pro",
                    "DaVinci Resolve",
                    "Adobe Premiere Pro",
                    "CapCut, VN Editor, KineMaster",
                    "Color Grading & Sound Design",
                    "Cinematic Storytelling",
                  ],
                },
                {
                  title: "Design & Posters",
                  icon: <Palette className="text-sky-400 w-10 h-10" />,
                  skills: [
                    "Canva",
                    "Adobe Photoshop (Basic)",
                    "Social Media Posters",
                    "Thumbnails & Creatives",
                    "Brand Guideline Adherence",
                  ],
                },
                {
                  title: "Content & Media",
                  icon: <Share2 className="text-sky-400 w-10 h-10" />,
                  skills: [
                    "Reels/Shorts Creation",
                    "Content Strategy & Scheduling",
                    "Engagement Analytics",
                    "Client Communication",
                    "Freelancing Workflows",
                  ],
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="skill-card p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="ml-4 text-2xl font-semibold text-white">
                      {skill.title}
                    </h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {skill.skills.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 section-title">
              Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cinematic Video Edits",
                  desc: "Short films featuring advanced transitions and cinematic effects.",
                  video: cinematicVideo,
                },
                {
                  title: "Event video",
                  desc: "Designed posters and promotional graphics for events.",
                  video: eventVideo,
                },
                {
                  title: "Music Video",
                  desc: "Content bundles including videos, posters, and thumbnails.",
                  video: coverSongVideo,
                },
                {
                  title: "Portrait Photography",
                  desc: "Capturing compelling portraits through expert lighting.",
                  video: reelVideo,
                },
                {
                  title: "Event Photography",
                  desc: "Documenting live events with dynamic, candid style.",
                  img: gfg,
                },
                {
                  title: "Product Photography",
                  desc: "Clean, crisp product shots for e-commerce & branding.",
                  img: "https://placehold.co/600x400/111827/818cf8?text=Product+Photo",
                },
              ].map((proj, idx) => (
                <div
                  key={idx}
                  className="project-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {proj.video ? (
                    <video
                      className="w-full h-60 object-cover"
                      controls
                      src={proj.video}
                    />
                  ) : (
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-60 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {proj.title}
                    </h3>
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
            <h2 className="text-4xl font-bold text-center mb-12 section-title">
              Experience
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  role: "Media Manager",
                  org: "GeeksforGeeks",
                  duration: "March 2025 - Present",
                  tasks: [
                    "Created and managed video and poster content.",
                    "Designed promotional posters, event creatives, and campaign visuals.",
                    "Improved engagement through storytelling and consistent posting.",
                  ],
                },
                {
                  role: "Video Editor & Designer",
                  org: "Freelance & Personal Projects",
                  duration: "2021 - Present",
                  tasks: [
                    "Edited 100+ videos (shorts, reels, and long-form).",
                    "Designed posters and social media assets.",
                    "Managed end-to-end project delivery from brief to final asset.",
                  ],
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  className="experience-card p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-sky-400">
                        {exp.role}
                      </h3>
                      <p className="text-white">{exp.org}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{exp.duration}</span>
                  </div>
                  <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                    {exp.tasks.map((task, tid) => (
                      <li key={tid}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 section-title">
              Let's Connect
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              I'm currently available for freelance projects and new
              opportunities.
            </p>
            <a
              href="mailto:mdmustak01@icloud.com"
              className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg py-3 px-8 rounded-lg transition-transform transform hover:scale-105 mb-10"
            >
              mdmustak01@icloud.com
            </a>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/md-mustak-alam-b3129129a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/iammushtaq_07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="tel:7484962276"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
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
