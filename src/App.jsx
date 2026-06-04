import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail, FiMapPin, FiPhone, FiSend, FiChevronDown, FiCode, FiServer, FiDatabase, FiGlobe, FiLayers, FiLink, FiGithub, FiLinkedin, FiTwitter, FiClock, FiFileText } from 'react-icons/fi';
import { FaGraduationCap, FaPalette, FaPuzzlePiece, FaHandshake, FaFire } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import picBg from './assets/pic_bg.jpg';

// Import project screenshots
import dzFitPreview from './assets/dz_fit_preview.png';
import dzFitDash from './assets/dz_fit_dash.png';
import dzFitReviews from './assets/dz_fit_reviews.png';
import dzFitCourses from './assets/dz_fit_courses.png';
import iotopiaPreview from './assets/iotopia_preview.png';
import nhsmHelperPreview from './assets/nhsm_helper_preview.png';
import nhsmHelper1 from './assets/nhsm_helper_1.png';
import carpoolingPreview from './assets/carpooling_preview.png';
import geriasafePreview from './assets/geriasafe_preview.png';
import geriasafe1 from './assets/geriasafe_1.png';
import geriasafe2 from './assets/geriasafe_2.png';
import geriasafe3 from './assets/geriasafe_3.png';

// InnerSky images
import innersky1 from './assets/innersky_1.jpg';
import innersky2 from './assets/innersky_2.jpg';
import innersky3 from './assets/innersky_3.jpg';
import innersky4 from './assets/innersky_4.jpg';

const tabs = ['home', 'about', 'portfolio', 'skills', 'contact'];

import ProjectDetails from './components/ProjectDetails';

export const projectsData = [
  { 
    id: "innersky",
    title: "InnerSky (MindCompass)", 
    role: "Full-Stack Dev · Hackathon",
    category: "Full-Stack",
    status: "Finished",
    type: "Personal",
    accent: { color: "#8B5CF6", glow: "rgba(139,92,246,0.25)", label: "AI Wellness", sweep: "from-violet-500/30 to-purple-400/10" },
    desc: [
      "Track mood and emotional trends via an interactive constellation",
      "Manage habits with goal tracking and AI assistance",
      "Visualize life on a personal \"Life Map\" galaxy",
      "Plan the week with an AI-powered planning assistant",
      "Complete daily challenges and unlock badges"
    ],
    tags: ["React 18", "TypeScript", "Django REST", "PWA", "Capacitor", "Groq AI Llama3"],
    gradient: "from-violet-500/30 to-purple-500/10",
    image: innersky1,
    images: [innersky1, innersky2, innersky3, innersky4],
    link: "https://innersky.netlify.app/"
  },
  { 
    id: "dz-fit",
    title: "DZ-Fit", 
    role: "Tech Lead · Back-End",
    category: "Back-End",
    status: "Finished",
    type: "Personal",
    accent: { color: "#F59E0B", glow: "rgba(245,158,11,0.25)", label: "Lead Role", sweep: "from-yellow-500/30 to-amber-400/10" },
    desc: [
      "Led full technical cycle of a gym search platform",
      "RESTful API for gym, slot & booking management",
      "PostgreSQL geo-search optimization + Docker"
    ],
    tags: ["Django", "FastAPI", "PostgreSQL", "Docker"],
    gradient: "from-amber-500/30 to-yellow-500/10",
    image: dzFitPreview,
    images: [dzFitDash, dzFitReviews, dzFitCourses],
    link: "https://dz-fit.up.railway.app/"
  },
  { 
    id: "iotopia",
    title: "IoTopia", 
    role: "Back-End Dev · Academic",
    category: "Back-End",
    status: "Finished",
    type: "University",
    accent: { color: "#00D1FF", glow: "rgba(0,209,255,0.2)", label: "Back-End", sweep: "from-cyan-500/30 to-cyan-400/10" },
    desc: [
      "Backend for a gamified IoT learning platform",
      "Quiz engine, user progression & secured API endpoints"
    ],
    tags: ["Node.js", "MongoDB", "JavaScript"],
    gradient: "from-cyan-500/25 to-teal-500/10",
    image: iotopiaPreview,
    link: "https://github.com/KettabAya/IoTopia"
  },
  { 
    id: "ai-study-chatbot",
    title: "NHSM Helper", 
    role: "AI Developer · Personal",
    category: "AI",
    status: "Finished",
    type: "Personal",
    accent: { color: "#A855F7", glow: "rgba(168,85,247,0.25)", label: "AI / LLM", sweep: "from-violet-500/30 to-purple-400/10" },
    desc: [
      "Llama3 LLM integration for maths study assistance",
      "Conversational UI tailored to NHSM learning workflows"
    ],
    tags: ["Python", "Llama3", "API Integration"],
    gradient: "from-violet-500/25 to-purple-500/10",
    image: nhsmHelperPreview,
    images: [nhsmHelper1],
    link: "https://nhsm-helper.netlify.app/"
  },
  { 
    id: "carpooling-app",
    title: "Carpooling App", 
    role: "Front-End Dev · Mobile",
    category: "Mobile",
    status: "Finished",
    type: "University",
    accent: { color: "#22C55E", glow: "rgba(34,197,94,0.2)", label: "Mobile", sweep: "from-green-500/30 to-emerald-400/10" },
    desc: [
      "Responsive UI for trip and booking management",
      "Mobile-first UX with React Native & Expo"
    ],
    tags: ["React Native", "Expo", "JavaScript"],
    gradient: "from-green-500/25 to-emerald-500/10",
    image: carpoolingPreview,
    link: "https://github.com/KettabAya/Carpooling-App"
  },
  { 
    id: "geriaasafe",
    title: "GériaSafe", 
    role: "Front-End Dev · Web",
    category: "Front-End",
    status: "Finished",
    type: "University",
    accent: { color: "#818CF8", glow: "rgba(129,140,248,0.25)", label: "Front-End", sweep: "from-indigo-500/30 to-violet-400/10" },
    desc: [
      "Interactive senior care prescription guide",
      "Built for pharmacy students — accessible & structured"
    ],
    tags: ["HTML5", "CSS3", "JavaScript"],
    gradient: "from-indigo-500/25 to-violet-500/10",
    image: geriasafePreview,
    images: [geriasafe1, geriasafe2, geriasafe3],
    link: "https://geriasafe.netlify.app/"
  }
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

function MainLayout() {
  const [activeTab, setActiveTab] = useState('home');
  const mainRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 35,
        y: (e.clientY - window.innerHeight / 2) / 35
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const index = tabs.indexOf(id);
    if (mainRef.current && index !== -1) {
      // Temporarily disable scroll snapping to prevent programmatic scrolling freeze
      mainRef.current.style.scrollSnapType = 'none';
      
      mainRef.current.scrollTo({
        top: index * mainRef.current.clientHeight,
        behavior: 'smooth'
      });

      // Restore scroll snap after smooth scroll is complete
      setTimeout(() => {
        if (mainRef.current) {
          mainRef.current.style.scrollSnapType = 'y mandatory';
        }
      }, 800);
    }
  };

  const handleScroll = () => {
    if (mainRef.current) {
      const index = Math.round(mainRef.current.scrollTop / mainRef.current.clientHeight);
      const currentTab = tabs[Math.min(index, tabs.length - 1)];
      if (currentTab !== activeTab) {
        setActiveTab(currentTab);
      }
    }
  };

  const activeIndex = tabs.indexOf(activeTab);

  return (
    <div className="h-screen w-screen bg-[#0B1120] overflow-hidden font-sans relative flex">
      
      {/* Ambient background effects */}
      <motion.div 
        animate={{
          x: [0, 45, -25, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#00D1FF] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{
          x: [0, -35, 45, 0],
          y: [0, 25, -35, 0],
          scale: [1, 0.9, 1.15, 1]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#4facfe] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"
      />

      {/* Tech Grid Background overlay for high-tech premium feel */}
      <div className="grid-bg" />

      {/* Floating Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <aside className="relative flex flex-row items-center h-14 bg-[#0A1019]/90 backdrop-blur-xl rounded-full px-2 gap-2 shadow-[0_0_30px_rgba(0,209,255,0.08)] border border-white/[0.06]">
          {/* Sliding indicator */}
          <motion.div 
            className="absolute w-10 h-10 bg-[#00D1FF] rounded-full shadow-[0_0_20px_rgba(0,209,255,0.6)]"
            animate={{ left: `${8 + activeIndex * 48}px` }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            style={{ top: '8px' }}
          />
          {tabs.map((tab) => (
            <NavItem 
              key={tab}
              icon={getIconForTab(tab)} 
              id={tab} 
              active={activeTab === tab} 
              onClick={scrollToSection} 
            />
          ))}
        </aside>
      </div>

      {/* Full Page Scrollable Content Area */}
      <main 
        ref={mainRef}
        onScroll={handleScroll}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar relative z-10"
      >
        <section id="home" className="h-full w-full snap-start flex items-center justify-center shrink-0 relative overflow-hidden">
          {/* Flying Background Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Direct Parallax Background Image - Floating/Panning Zoom */}
            <motion.div
              className="absolute top-[-15%] left-[-15%] w-[130%] h-[130%] bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${picBg})`,
                opacity: 0.22,
                filter: 'blur(2px) brightness(0.45) contrast(1.15)'
              }}
              animate={{
                x: [mousePos.x - 20, mousePos.x + 20, mousePos.x - 20],
                y: [mousePos.y - 15, mousePos.y + 15, mousePos.y - 15],
                scale: [1.1, 1.25, 1.1],
                rotate: [-1.5, 1.5, -1.5]
              }}
              transition={{
                x: { type: "spring", stiffness: 30, damping: 22 },
                y: { type: "spring", stiffness: 30, damping: 22 },
                scale: { duration: 45, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 55, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Blurry Depth Background Layer - Opposite/Faster float for parallax depth */}
            <motion.div
              className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-cover bg-center mix-blend-screen"
              style={{ 
                backgroundImage: `url(${picBg})`,
                opacity: 0.08,
                filter: 'blur(25px) brightness(0.6) hue-rotate(25deg)'
              }}
              animate={{
                x: [mousePos.x * 1.4 + 25, mousePos.x * 1.4 - 25, mousePos.x * 1.4 + 25],
                y: [mousePos.y * 1.4 + 20, mousePos.y * 1.4 - 20, mousePos.y * 1.4 + 20],
                scale: [1.2, 1.32, 1.2],
                rotate: [3, -3, 3]
              }}
              transition={{
                x: { type: "spring", stiffness: 25, damping: 20 },
                y: { type: "spring", stiffness: 25, damping: 20 },
                scale: { duration: 38, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 48, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Background stars and warp effects removed */}
            
            {/* Ambient gradients to blend with theme */}
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#0B1120] to-transparent z-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-[#0B1120] to-transparent z-20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0B1120_95%)] z-20"></div>
          </div>

          <HeroSection onViewWork={() => scrollToSection('portfolio')} />
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 font-semibold">Scroll</span>
            <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
              <motion.div 
                className="w-full h-1/2 bg-[#00D1FF]"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </section>
        
        <section id="about" className="min-h-full py-24 w-full snap-start flex items-center justify-center shrink-0">
          <AboutSection />
        </section>
        
        <section id="portfolio" className="min-h-full py-24 w-full snap-start flex items-center justify-center shrink-0">
          <PortfolioSection />
        </section>

        <section id="skills" className="min-h-full py-24 w-full snap-start flex items-center justify-center shrink-0">
          <SkillsSection />
        </section>

        <section id="contact" className="min-h-full py-24 w-full snap-start flex items-center justify-center shrink-0">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}

// Helper to map tab IDs to icons
function getIconForTab(tab) {
  switch (tab) {
    case 'home': return <FiHome size={18} />;
    case 'about': return <FiUser size={18} />;
    case 'portfolio': return <FiBriefcase size={18} />;
    case 'skills': return <FaGraduationCap size={18} />;
    case 'contact': return <FiMail size={18} />;
    default: return <FiHome size={18} />;
  }
}

// Navigation Item
function NavItem({ icon, id, active, onClick }) {
  return (
    <motion.button
      onClick={() => onClick(id)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-10 h-10 flex items-center justify-center group outline-none cursor-pointer z-10"
      aria-label={`Navigate to ${id}`}
    >
      <div className={`relative z-10 transition-all duration-300 ${active ? 'text-white scale-110' : 'text-slate-500 group-hover:text-slate-300'}`}>
        {icon}
      </div>
    </motion.button>
  );
}

// ========== HERO SECTION ==========
function HeroSection({ onViewWork }) {
  const roles = ['Full-Stack Engineer', 'Software Engineering Student', 'AI Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
  };

  // Particles generator
  const [particles] = useState(() => 
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      size: Math.random() * 3 + 2 + "px",
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
  );

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center w-full max-w-3xl px-8 py-16 relative z-10"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none -z-10"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#00D1FF]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: 0 }}
            animate={{ 
              y: [0, -150],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00D1FF]/40 rounded-tl-lg pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00D1FF]/40 rounded-tr-lg pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00D1FF]/40 rounded-bl-lg pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00D1FF]/40 rounded-br-lg pointer-events-none"></div>

      {/* Glow behind center */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00D1FF] rounded-full opacity-[0.1] blur-[100px] pointer-events-none -z-10"
      />

      {/* Pulsing 'Available' badge */}
      <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-sm">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
        <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">Available for work</span>
      </motion.div>

      {/* Title with outlined name */}
      <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
        Rania <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #00D1FF", WebkitTextFillColor: "transparent" }}>Keghouche</span>
      </motion.h1>
      
      {/* Typewriter Effect */}
      <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-slate-300 font-light mb-8 flex items-center justify-center gap-0 h-8">
        <span>{displayText}</span>
        <span className="inline-block w-[3px] h-7 bg-[#00D1FF] ml-1 animate-pulse"></span>
      </motion.h2>
      
      {/* Description */}
      <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed mb-10">
        Fast learner who picks up any new stack quickly and delivers. Technical reference on team projects — passionate about building clean, scalable systems from APIs to mobile interfaces.
      </motion.p>
      
      {/* Buttons */}
      <motion.div variants={itemVariants} className="flex space-x-4">
        <motion.button 
          onClick={onViewWork}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#00D1FF] hover:bg-[#00b8e6] text-[#0B1120] text-sm font-bold tracking-wide rounded-full transition-all cursor-pointer shadow-[0_0_20px_rgba(0,209,255,0.3)]"
        >
          View My Work
        </motion.button>
        <a 
          href="/Rania_Keghouche_CV.png"
          download="Rania_Keghouche_CV.png"
          className="px-8 py-3 bg-white/[0.05] border border-white/10 text-white text-sm font-medium rounded-full transition-all cursor-pointer relative overflow-hidden group inline-flex items-center justify-center hover:bg-white/10 hover:border-white/20"
        >
          <span className="relative z-10">Download CV</span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            whileHover={{ translateX: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </a>
      </motion.div>
    </motion.div>
  );
}

// ========== ABOUT SECTION ==========
function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="w-full max-w-[1050px] flex flex-col md:flex-row items-start justify-between px-8 gap-8 relative"
    >
      
      {/* Left: Profile & Contact */}
      <motion.div variants={leftVariants} className="w-full md:w-[48%]">
        {/* Header row */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#0B1120] border-2 border-[#00D1FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,209,255,0.2)]">
              <span className="text-sm font-bold text-[#00D1FF] tracking-tighter">RK</span>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0B1120]"></div>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase leading-none">
            About <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #00D1FF", WebkitTextFillColor: "transparent" }}>Me</span>
          </h2>
        </div>
        
        {/* Quote */}
        <div className="relative pl-4 border-l-2 border-[#00D1FF]/40 mb-5">
          <p className="text-slate-400 text-[11.5px] leading-relaxed italic">
            Engineering student at ESTIN. Full-stack foundation, end-to-end project ownership, backend architectures &amp; mobile UIs. Fast adapter who delivers under pressure.
          </p>
        </div>

        {/* Contact Info — 2 column grid */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <InfoItem icon={<FiMapPin size={12} />} label="Location" value="Constantine, DZ" href="https://www.google.com/maps/place/Constantine,+Algeria" />
          <InfoItem icon={<FiMail size={12} />} label="Email" value="r_keghouche@estin.dz" href="https://mail.google.com/mail/?view=cm&fs=1&to=r_keghouche@estin.dz" />
          <InfoItem icon={<FiPhone size={12} />} label="Phone" value="+213 783 244 796" href="tel:+213783244796" />
          <InfoItem icon={<FiGithub size={12} />} label="GitHub" value="rania-keghouche" href="https://github.com/rania-keghouche" />
        </div>

        {/* Languages */}
        <h3 className="text-[10px] font-bold text-[#00D1FF] uppercase tracking-[0.2em] mb-3">Languages</h3>
        <div className="space-y-2.5 mb-5">
          <LangBar name="Arabic" percentage={100} />
          <LangBar name="French" percentage={80} />
          <LangBar name="English" percentage={65} />
        </div>

        {/* Stats Bar */}
        <div className="flex items-center gap-5 pt-4 border-t border-white/[0.06]">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white">5<span className="text-[#00D1FF]">+</span></span>
            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Projects</span>
          </div>
          <div className="w-px h-8 bg-white/[0.06]"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white">2</span>
            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Yrs Exp.</span>
          </div>
          <div className="w-px h-8 bg-white/[0.06]"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-transparent" style={{ WebkitTextStroke: "1px #00D1FF", WebkitTextFillColor: "transparent" }}>∞</span>
            <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Lines of Code</span>
          </div>
        </div>
      </motion.div>

      {/* Right: Education & Soft Skills */}
      <motion.div variants={rightVariants} className="w-full md:w-[48%]">
        <div className="bg-[#0B1120]/60 border border-white/[0.05] p-6 rounded-2xl hover:border-[#00D1FF]/20 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm relative overflow-hidden group h-full">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D1FF] opacity-[0.02] blur-[60px] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"></div>

          {/* Education */}
          <h3 className="text-[10px] font-bold text-[#00D1FF] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <FaGraduationCap size={12} /> Education Timeline
          </h3>
          <div className="space-y-3 mb-6 relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#00D1FF]/40 via-white/10 to-transparent"></div>
            <EduItem 
              school="ESTIN, Bejaia" 
              degree="1st Year Graduate Cycle — Software Engineering" 
              date="Sept 2025 – Present" 
              current
            />
            <EduItem 
              school="ESTIN, Bejaia" 
              degree="Preparatory Cycle" 
              date="Sept 2023 – Jun 2025" 
            />
            <EduItem 
              school="Lycée Saadi Taher Harath" 
              degree="Baccalauréat Maths — Mention Très Bien" 
              date="2023" 
            />
          </div>

          {/* Soft Skills */}
          <h3 className="text-[10px] font-bold text-[#00D1FF] uppercase tracking-[0.2em] mb-3">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: <FaPuzzlePiece className="text-[#00D1FF]" size={10} />, text: 'Problem Solving' },
              { icon: <FaFire className="text-[#00D1FF]" size={10} />, text: 'Autonomy & Ownership' },
              { icon: <FaHandshake className="text-[#00D1FF]" size={10} />, text: 'Team Collaboration' },
              { icon: <FiClock className="text-[#00D1FF]" size={10} />, text: 'Under Pressure' },
              { icon: <FiFileText className="text-[#00D1FF]" size={10} />, text: 'Communication' }
            ].map((skill, index) => (
              <motion.span 
                whileHover={{ scale: 1.05, y: -1 }}
                key={index} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.02] border border-white/[0.08] rounded-full text-[10px] text-slate-300 hover:border-[#00D1FF] hover:bg-[#00D1FF]/10 hover:text-white hover:shadow-[0_0_15px_rgba(0,209,255,0.2)] transition-all cursor-default group/skill"
              >
                <div className="group-hover/skill:scale-110 transition-transform duration-300">{skill.icon}</div>
                <span className="font-medium tracking-wide">{skill.text}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfoItem({ icon, label, value, href }) {
  const content = (
    <>
      <div className="relative z-10 w-7 h-7 rounded-lg bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center text-[#00D1FF] group-hover:bg-[#00D1FF] group-hover:text-[#0B1120] transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div className="relative z-10 flex flex-col justify-center gap-0 w-full overflow-hidden">
        <span className="text-slate-500 text-[8px] font-bold uppercase tracking-[0.12em]">{label}</span>
        <span className="text-white text-[10.5px] font-medium truncate group-hover:text-[#00D1FF] transition-colors">
          {value}
        </span>
      </div>
      {href && (
        <span className="relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00D1FF] text-base leading-none shrink-0">→</span>
      )}
    </>
  );

  const wrapperClasses = "relative flex items-center gap-2.5 p-2 rounded-xl overflow-hidden group w-full border border-white/[0.04] bg-[#0B1120]/30 transition-all duration-300";
  const hoverSweep = <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/15 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${wrapperClasses} hover:border-[#00D1FF]/30 cursor-pointer hover:shadow-[0_2px_12px_rgba(0,209,255,0.08)]`}>
        {hoverSweep}
        {content}
      </a>
    );
  }
  return (
    <div className={wrapperClasses}>
      {hoverSweep}
      {content}
    </div>
  );
}

function LangBar({ name, percentage }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-[9.5px] font-bold text-slate-300 uppercase tracking-widest">{name}</span>
        <span className="text-[9.5px] text-[#00D1FF] font-bold">{percentage}%</span>
      </div>
      <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#00D1FF]/50 to-[#00D1FF] rounded-full"
        />
      </div>
    </div>
  );
}

function EduItem({ school, degree, date, current }) {
  return (
    <div className={`relative pl-6 py-1.5 group transition-all duration-300 ${!current ? 'opacity-55 hover:opacity-100' : ''}`}>
      <div className="absolute left-[0.5px] top-3 -translate-x-1/2 flex items-center justify-center">
        {current ? (
          <>
            <span className="absolute animate-ping w-3 h-3 rounded-full bg-[#00D1FF] opacity-50"></span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#00D1FF] shadow-[0_0_10px_rgba(0,209,255,1)] ring-4 ring-[#00D1FF]/20 relative z-10"></div>
          </>
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#0B1120] border-2 border-slate-600 group-hover:border-[#00D1FF]/80 relative z-10 transition-colors"></div>
        )}
      </div>
      <div className="flex items-center gap-2 mb-0.5">
        <h4 className={`text-[11.5px] font-bold ${current ? 'text-white' : 'text-slate-300'} group-hover:text-[#00D1FF] transition-colors`}>{school}</h4>
        {current && <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#00D1FF]/10 text-[#00D1FF] border border-[#00D1FF]/20 uppercase tracking-wider">Current</span>}
      </div>
      <p className="text-slate-400 text-[10.5px] leading-relaxed">{degree}</p>
      <p className={`text-[9px] font-bold tracking-widest uppercase mt-0.5 ${current ? 'text-[#00D1FF]' : 'text-slate-600'}`}>{date}</p>
    </div>
  );
}

// ========== SKILLS SECTION ==========
function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FiCode size={14} />,
      accent: '#60A5FA',          // Royal Blue
      glow: 'rgba(96,165,250,0.18)',
      skills: ['TypeScript', 'JavaScript', 'Python', 'C', 'Java', 'Assembly'],
      proficiency: [92, 88, 80]
    },
    {
      title: 'Back-End',
      icon: <FiServer size={14} />,
      accent: '#2DD4BF',          // Teal
      glow: 'rgba(45,212,191,0.18)',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'JWT Auth', 'REST API'],
      proficiency: [85, 82, 78]
    },
    {
      title: 'Front-End',
      icon: <FaPalette size={14} />,
      accent: '#4ADE80',          // Lime Green
      glow: 'rgba(74,222,128,0.18)',
      skills: ['React.js', 'React Native', 'Vue.js', 'Tailwind CSS', 'Expo', 'HTML5', 'CSS3'],
      proficiency: [88, 82, 75]
    },
    {
      title: 'Databases',
      icon: <FiDatabase size={14} />,
      accent: '#A78BFA',          // Soft Violet
      glow: 'rgba(167,139,250,0.18)',
      skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Schema Modelling'],
      proficiency: [80, 75, 70]
    },
    {
      title: 'DevOps & Tools',
      icon: <FiLayers size={14} />,
      accent: '#FB923C',          // Warm Orange
      glow: 'rgba(251,146,60,0.18)',
      skills: ['Docker', 'Git/GitHub', 'Linux', 'Postman', 'VS Code', 'npm'],
      proficiency: [78, 90, 85]
    },
    {
      title: 'AI Tools',
      icon: <FiGlobe size={14} />,
      accent: '#F472B6',          // Fuchsia Pink
      glow: 'rgba(244,114,182,0.18)',
      skills: ['Copilot', 'Claude', 'Cursor', 'Prompt Engineering', 'LLM Integration'],
      proficiency: [85, 80, 75]
    }
  ];

  // Marquee: flatten all skills
  const allSkills = skillCategories.flatMap(c => c.skills.map(s => ({ skill: s, accent: c.accent })));
  const marqueeItems = [...allSkills, ...allSkills]; // duplicate for seamless loop

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 16 } }
  };

  const proficiencyLabels = ['Expert', 'Advanced', 'Proficient'];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={containerVariants}
      className="w-full max-w-[1050px] flex flex-col items-center px-8 relative"
    >
      {/* Header */}
      <motion.div variants={headerVariants} className="text-center mb-5">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          Tech <span className="text-[#00D1FF]">Skills</span>
        </h2>
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#00D1FF] rounded-full mx-auto mb-2"
        />
        <p className="text-slate-400 text-sm">My technical toolkit across the full stack</p>
      </motion.div>

      {/* Marquee strip */}
      <motion.div variants={headerVariants} className="w-full overflow-hidden mb-6 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#060d1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#060d1a] to-transparent z-10 pointer-events-none" />
        <div
          className="flex gap-3 w-max"
          style={{ animation: 'marquee 28s linear infinite' }}
        >
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-[9.5px] font-bold uppercase tracking-widest whitespace-nowrap border"
              style={{
                color: item.accent,
                background: `${item.accent}12`,
                borderColor: `${item.accent}30`
              }}
            >
              {item.skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            variants={cardVariants}
            key={cat.title}
            className="relative rounded-2xl p-4 border border-white/[0.05] bg-[#0B1120]/70 overflow-hidden group transition-all duration-500"
            whileHover={{
              boxShadow: `0 -8px 40px ${cat.glow}, 0 4px 20px rgba(0,0,0,0.3)`,
              borderColor: `${cat.accent}35`
            }}
          >
            {/* Radial glow from top on hover */}
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: cat.glow.replace('0.18', '0.35') }}
            />

            {/* Header row */}
            <div className="relative z-10 flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ color: cat.accent, background: `${cat.accent}15`, border: `1px solid ${cat.accent}30` }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: cat.accent }}>
                  {cat.title}
                </h3>
              </div>
              {/* Count badge */}
              <span
                className="text-[9px] font-black tabular-nums px-1.5 py-0.5 rounded-md"
                style={{ color: cat.accent, background: `${cat.accent}12`, border: `1px solid ${cat.accent}20` }}
              >
                {String(cat.skills.length).padStart(2, '0')}
              </span>
            </div>

            {/* Top 3 proficiency bars */}
            <div className="relative z-10 space-y-1.5 mb-3">
              {cat.skills.slice(0, 3).map((skill, i) => (
                <div key={skill}>
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[8.5px] text-slate-400 font-semibold">{skill}</span>
                    <span className="text-[7.5px] font-bold" style={{ color: `${cat.accent}99` }}>{proficiencyLabels[i]}</span>
                  </div>
                  <div className="h-[3px] w-full rounded-full bg-white/[0.04]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.proficiency[i]}%` }}
                      transition={{ duration: 0.9, delay: catIdx * 0.07 + i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${cat.accent}60, ${cat.accent})` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining skill pills with wipe hover effect */}
            <div className="relative z-10 flex flex-wrap gap-1.5">
              {cat.skills.slice(3).map(skill => (
                <span
                  key={skill}
                  className="relative overflow-hidden px-2 py-0.5 rounded-md text-[9px] font-medium tracking-wide border cursor-default group/pill"
                  style={{
                    color: `${cat.accent}cc`,
                    background: `${cat.accent}08`,
                    borderColor: `${cat.accent}20`
                  }}
                >
                  {/* Wipe fill from bottom */}
                  <span
                    className="absolute inset-0 translate-y-full group-hover/pill:translate-y-0 transition-transform duration-300 ease-out"
                    style={{ background: `${cat.accent}22` }}
                  />
                  <span className="relative z-10 group-hover/pill:text-white transition-colors duration-200">{skill}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ========== PORTFOLIO SECTION ==========
function PortfolioSection() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Back-End', 'Front-End', 'AI', 'Mobile'];

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 14 } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="flex flex-col items-center w-full max-w-[1200px] px-8"
    >
      {/* Header */}
      <motion.div variants={headerVariants} className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          My <span className="text-[#00D1FF]">Projects</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }} whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#00D1FF] rounded-full mx-auto mb-3" 
        />
        <p className="text-slate-400 text-sm">Real-world projects I've built and led</p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div variants={headerVariants} className="flex items-center gap-2 mb-6 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`relative px-3.5 py-1.5 rounded-lg text-[10.5px] font-bold uppercase tracking-widest transition-all duration-300 ${
              activeFilter === f
                ? 'bg-[#00D1FF]/15 text-[#00D1FF] border border-[#00D1FF]/30 shadow-[0_0_12px_rgba(0,209,255,0.15)]'
                : 'text-slate-500 hover:text-slate-300 border border-transparent'
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative bg-[#0B1120]/90 border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col"
              whileHover={{ boxShadow: `0 0 30px ${project.accent.glow}`, borderColor: `${project.accent.color}40` }}
            >
              {/* Accent sweep on hover — slides across top */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent.sweep} -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20`}></div>

              {/* Static accent top bar */}
              <div className={`h-[2px] w-full bg-gradient-to-r ${project.gradient} opacity-60`}></div>

              {/* Thumbnail with hover overlay */}
              <div className="relative h-36 w-full overflow-hidden bg-black/60 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#0B1120]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                  <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="px-4 py-2 rounded-lg text-[11px] font-bold tracking-wide border transition-all duration-200"
                    style={{ color: project.accent.color, borderColor: `${project.accent.color}60`, background: `${project.accent.color}15` }}
                  >
                    Details
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-[11px] font-bold tracking-wide bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                  >
                    Live ↗
                  </a>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-2 right-2 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest z-20"
                  style={{ color: project.accent.color, background: `${project.accent.color}20`, border: `1px solid ${project.accent.color}40` }}
                >
                  {project.accent.label}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-white text-[14px] font-bold mb-2 truncate">
                  {project.title}
                </h3>

                {/* Bullet points */}
                <ul className="space-y-1 mb-3 flex-grow">
                  {project.desc.map((point, i) => (
                    <li key={i} className="text-slate-400 text-[10.5px] leading-relaxed flex items-start gap-1.5">
                      <span className="mt-0.5 shrink-0 opacity-70" style={{ color: project.accent.color }}>▸</span>
                      <span className="line-clamp-2">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded text-[9px] font-medium tracking-wide"
                      style={{ color: `${project.accent.color}cc`, background: `${project.accent.color}10`, border: `1px solid ${project.accent.color}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 bg-white/[0.02] border border-white/[0.05] rounded text-[9px] text-slate-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Role Footer Bar */}
              <div
                className="px-4 py-2.5 flex items-center justify-between border-t text-[9.5px] font-bold uppercase tracking-widest"
                style={{ borderColor: `${project.accent.color}20`, background: `${project.accent.color}08`, color: `${project.accent.color}bb` }}
              >
                <span>{project.role}</span>
                <span className="opacity-50">→</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// ========== CONTACT SECTION ==========
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch("https://formsubmit.co/ajax/r_keghouche@estin.dz", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent directly to Rania.' 
        });
        setFormData({ name: '', email: '', message: '' });
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#00D1FF', '#4facfe', '#ffffff'] });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send. Please check your network connection.' });
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-between px-8 gap-12 relative"
    >
      
      {/* Left: Contact info */}
      <motion.div variants={leftVariants} className="w-full md:w-[40%]">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          Get In <span className="text-[#00D1FF]">Touch</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#00D1FF] rounded-full mb-6" 
        />
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
        </p>

        {/* Contact details */}
        <div className="space-y-5 mb-8">
          <ContactInfoRow 
            icon={<FiMapPin size={18} />} 
            label="Location" 
            value="Constantine, Algeria" 
            href="https://www.google.com/maps/place/Constantine,+Algeria"
          />
          <ContactInfoRow 
            icon={<FiMail size={18} />} 
            label="Email" 
            value="r_keghouche@estin.dz" 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=r_keghouche@estin.dz"
          />
          <ContactInfoRow 
            icon={<FiPhone size={18} />} 
            label="Phone" 
            value="+213 783 244 796" 
            href="tel:+213783244796"
          />
          <ContactInfoRow 
            icon={<FiGithub size={18} />} 
            label="GitHub" 
            value="github.com/rania-keghouche" 
            href="https://github.com/rania-keghouche"
          />
        </div>

        {/* Social links */}
        <div className="flex gap-3">
          <SocialButton icon={<FiGithub size={18} />} label="GitHub" href="https://github.com/rania-keghouche" />
          <SocialButton icon={<FiLinkedin size={18} />} label="LinkedIn" href="https://linkedin.com" />
          <SocialButton icon={<FiTwitter size={18} />} label="Twitter" href="https://twitter.com" />
        </div>
      </motion.div>

      {/* Right: Contact form */}
      <motion.div variants={rightVariants} className="w-full md:w-[55%]">
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <div className="space-y-5">
            <div>
              <label className="text-xs text-slate-400 mb-2 block font-medium">Your Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-[#0B1120]/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00D1FF]/40 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block font-medium">Your Email</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-[#0B1120]/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00D1FF]/40 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block font-medium">Your Message</label>
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full bg-[#0B1120]/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00D1FF]/40 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all resize-none"
              />
            </div>

            {status.message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 py-2.5 rounded-xl text-[11px] font-medium border ${
                  status.type === 'success' 
                    ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' 
                    : 'bg-rose-500/10 border-rose-500/25 text-rose-400'
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 cta-button text-white text-sm font-medium rounded-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              <FiSend size={16} className="relative z-10" />
              <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={loading ? { translateX: ["-100%", "100%"] } : {}}
                transition={loading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
              />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

function ContactInfoRow({ icon, label, value, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-4 group cursor-pointer"
    >
      <div className="w-10 h-10 rounded-xl bg-[#00D1FF]/[0.08] border border-[#00D1FF]/10 flex items-center justify-center text-[#00D1FF] group-hover:bg-[#00D1FF]/[0.15] group-hover:shadow-[0_0_12px_rgba(0,209,255,0.2)] transition-all">
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</div>
        <div className="text-sm text-white font-medium group-hover:text-[#00D1FF] transition-colors">{value}</div>
      </div>
    </a>
  );
}

function SocialButton({ icon, label, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 rounded-xl bg-[#111827]/80 border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-[#00D1FF] hover:border-[#00D1FF]/30 hover:bg-[#00D1FF]/[0.05] transition-all cursor-pointer" 
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default App;
