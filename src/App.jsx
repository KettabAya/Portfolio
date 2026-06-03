import React, { useState, useRef, useEffect } from 'react';
import { FiHome, FiUser, FiBriefcase, FiMail, FiMapPin, FiPhone, FiSend, FiChevronDown, FiCode, FiServer, FiDatabase, FiGlobe, FiLayers, FiLink, FiGithub, FiLinkedin, FiTwitter, FiClock, FiFileText } from 'react-icons/fi';
import { FaGraduationCap, FaPalette, FaPuzzlePiece, FaHandshake, FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import CVTemplate from './components/CVTemplate';
import picBg from './assets/pic_bg.jpg';

const tabs = ['home', 'about', 'portfolio', 'skills', 'contact'];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const mainRef = useRef(null);
  const cvRef = useRef(null);
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

      {/* Floating Sidebar */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-50">
        <aside className="relative flex flex-col items-center w-[56px] bg-[#0A1019]/90 backdrop-blur-xl rounded-full py-5 shadow-[0_0_30px_rgba(0,209,255,0.08)] border border-white/[0.06]">
          {/* Sliding indicator */}
          <motion.div 
            className="absolute w-[40px] h-[40px] bg-[#00D1FF] rounded-full shadow-[0_0_20px_rgba(0,209,255,0.6)]"
            animate={{ top: `${20 + activeIndex * 48}px` }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            style={{ left: '8px' }}
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
            {/* Direct Parallax Background Image */}
            <motion.div
              className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${picBg})`,
                opacity: 0.18,
                filter: 'blur(3px) brightness(0.5) contrast(1.1)'
              }}
              animate={{
                x: mousePos.x,
                y: mousePos.y,
                scale: 1.12,
              }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 20
              }}
            />
            
            {/* Blurry Depth Background Layer */}
            <motion.div
              className="absolute top-[-15%] left-[-15%] w-[130%] h-[130%] bg-cover bg-center mix-blend-screen"
              style={{ 
                backgroundImage: `url(${picBg})`,
                opacity: 0.08,
                filter: 'blur(20px) brightness(0.6) hue-rotate(15deg)'
              }}
              animate={{
                x: [mousePos.x * 1.4 - 12, mousePos.x * 1.4 + 12, mousePos.x * 1.4 - 12],
                y: [mousePos.y * 1.4 - 12, mousePos.y * 1.4 + 12, mousePos.y * 1.4 - 12],
                scale: [1.18, 1.24, 1.18],
                rotate: [0.3, -0.3, 0.3]
              }}
              transition={{
                x: { type: "spring", stiffness: 35, damping: 25 },
                y: { type: "spring", stiffness: 35, damping: 25 },
                scale: { duration: 28, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 28, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* 3D Parallax Flying Particles */}
            <div className="absolute inset-0 z-10">
              {[...Array(15)].map((_, i) => {
                const size = Math.random() * 5 + 2;
                const duration = Math.random() * 10 + 12;
                const delay = Math.random() * -12;
                const depthMultiplier = size < 3 ? 0.3 : size < 4.5 ? 0.7 : 1.2;
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: size,
                      height: size,
                      left: `${Math.random() * 100}%`,
                      filter: 'blur(1px)',
                      background: i % 3 === 0 
                        ? 'radial-gradient(circle, rgba(0, 209, 255, 0.7) 0%, transparent 80%)'
                        : i % 3 === 1 
                        ? 'radial-gradient(circle, rgba(79, 172, 254, 0.7) 0%, transparent 80%)'
                        : 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 80%)'
                    }}
                    animate={{
                      y: ['110%', '-10%'],
                      x: [
                        '0px',
                        `${(Math.random() - 0.5) * 120}px`
                      ],
                      translateX: mousePos.x * depthMultiplier * 1.8,
                      translateY: mousePos.y * depthMultiplier * 1.8
                    }}
                    transition={{
                      y: {
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: delay
                      },
                      x: {
                        duration: duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      default: {
                        type: "spring",
                        stiffness: 45,
                        damping: 22
                      }
                    }}
                  />
                );
              })}
            </div>
            
            {/* Ambient gradients to blend with theme */}
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-[#0B1120] to-transparent z-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-[#0B1120] to-transparent z-20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0B1120_95%)] z-20"></div>
          </div>

          <HeroSection onViewWork={() => scrollToSection('portfolio')} cvRef={cvRef} />
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none z-30">
            <FiChevronDown size={20} className="text-slate-500" />
          </div>
        </section>
        
        <section id="about" className="h-full w-full snap-start flex items-center justify-center shrink-0">
          <AboutSection />
        </section>
        
        <section id="portfolio" className="h-full w-full snap-start flex items-center justify-center shrink-0">
          <PortfolioSection />
        </section>

        <section id="skills" className="h-full w-full snap-start flex items-center justify-center shrink-0">
          <SkillsSection />
        </section>

        <section id="contact" className="h-full w-full snap-start flex items-center justify-center shrink-0">
          <ContactSection />
        </section>
      </main>
      
      <div style={{ position: 'fixed', left: '-9999px', top: 0, pointerEvents: 'none', zIndex: -1 }}>
        <CVTemplate ref={cvRef} />
      </div>
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
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-[10px] my-1 flex items-center justify-center group outline-none cursor-pointer z-10"
      aria-label={`Navigate to ${id}`}
    >
      <div className={`relative z-10 transition-all duration-300 ${active ? 'text-white scale-110' : 'text-slate-500 group-hover:text-slate-300'}`}>
        {icon}
      </div>
    </motion.button>
  );
}

// ========== HERO SECTION ==========
function HeroSection({ onViewWork, cvRef }) {
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
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center w-full max-w-2xl px-8 pr-24 relative z-10"
    >
      {/* Glow behind avatar */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.18, 0.12]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[10%] left-1/2 -translate-x-[60%] w-[350px] h-[350px] bg-[#00D1FF] rounded-full opacity-[0.12] blur-[80px] pointer-events-none"
      />
      
      <motion.div variants={itemVariants} className="relative mb-8">
        {/* RK initials avatar with gentle pulse/float */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#00D1FF] to-[#4facfe] flex items-center justify-center shadow-[0_0_40px_rgba(0,209,255,0.3)] hover:shadow-[0_0_50px_rgba(0,209,255,0.5)] transition-all duration-300 cursor-pointer"
        >
          <span className="text-4xl font-bold text-white tracking-wider">RK</span>
        </motion.div>
        {/* Online indicator */}
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0B1120] shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-5xl font-bold text-white mb-3 tracking-tight">
        Rania <span className="text-[#00D1FF] text-glow">Keghouche</span>
      </motion.h1>
      
      <motion.h2 variants={itemVariants} className="text-lg text-slate-300 font-light mb-4 flex items-center justify-center gap-0 h-8">
        <span>{displayText}</span>
        <span className="inline-block w-[2px] h-6 bg-[#00D1FF] ml-0.5 animate-pulse"></span>
      </motion.h2>
      
      <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed mb-10">
        Fast learner who picks up any new stack quickly and delivers. Technical reference on team projects — passionate about building clean, scalable systems from APIs to mobile interfaces.
      </motion.p>
      
      <motion.div variants={itemVariants} className="flex space-x-4">
        <motion.button 
          onClick={onViewWork}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-2.5 bg-[#00D1FF] hover:bg-[#00b8e6] text-white text-sm font-medium rounded-full transition-all cursor-pointer active:scale-95 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)]"
        >
          View My Work
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05, borderColor: "rgba(0, 209, 255, 0.4)", backgroundColor: "rgba(255,255,255,0.05)", boxShadow: "0 0 20px rgba(0, 209, 255, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={async () => {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#00D1FF', '#4facfe', '#ffffff'] });
            if (cvRef && cvRef.current) {
              const html2pdf = (await import('html2pdf.js')).default;
              const opt = {
                margin:       0,
                filename:     'Rania_Keghouche_CV.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true, logging: false },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
              };
              html2pdf().set(opt).from(cvRef.current).save();
            }
          }}
          className="px-8 py-2.5 bg-white/[0.05] border border-white/10 text-white text-sm font-medium rounded-full transition-all cursor-pointer active:scale-95 relative overflow-hidden group"
        >
          <span className="relative z-10">Download CV</span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            whileHover={{ translateX: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.button>
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
      className="w-full max-w-[1050px] flex flex-col md:flex-row items-start justify-between px-8 pr-28 gap-12 relative"
    >
      
      {/* Left: Profile & Education */}
      <motion.div variants={leftVariants} className="w-full md:w-[48%]">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          About <span className="text-[#00D1FF]">Me</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#00D1FF] rounded-full mb-5" 
        />
        
        <p className="text-slate-400 text-[13px] leading-relaxed mb-6">
          Engineering student at ESTIN with a strong full-stack foundation and a drive for ownership. I have led technical projects end-to-end as team referent, built backend architectures, and shipped mobile UIs. I adapt fast to new technologies and consistently deliver under pressure — whether solo or as the team's go-to technical reference.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 gap-2.5 mb-6">
          <InfoItem icon={<FiMapPin size={14} />} label="Location" value="Constantine, Algeria" href="https://www.google.com/maps/place/Constantine,+Algeria" />
          <InfoItem icon={<FiMail size={14} />} label="Email" value="r_keghouche@estin.dz" href="https://mail.google.com/mail/?view=cm&fs=1&to=r_keghouche@estin.dz" />
          <InfoItem icon={<FiPhone size={14} />} label="Phone" value="+213 783 244 796" href="tel:+213783244796" />
          <InfoItem icon={<FiGithub size={14} />} label="GitHub" value="github.com/rania-keghouche" href="https://github.com/rania-keghouche" />
        </div>

        {/* Languages */}
        <h3 className="text-xs font-semibold text-[#00D1FF] uppercase tracking-[0.15em] mb-3">Languages</h3>
        <div className="space-y-2 mb-4">
          <LangBar name="Arabic" level={5} />
          <LangBar name="French" level={4} />
          <LangBar name="English" level={3} />
        </div>
      </motion.div>

      {/* Right: Education & Soft Skills */}
      <motion.div variants={rightVariants} className="w-full md:w-[48%]">
        {/* Education */}
        <h3 className="text-xs font-semibold text-[#00D1FF] uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
          <FaGraduationCap size={14} /> Education
        </h3>
        <div className="space-y-4 mb-8">
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
        <h3 className="text-xs font-semibold text-[#00D1FF] uppercase tracking-[0.15em] mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-2.5">
          {[
            { icon: <FaPuzzlePiece className="text-[#00D1FF]" size={12} />, text: 'Problem Solving & Algorithms' },
            { icon: <FaFire className="text-[#00D1FF]" size={12} />, text: 'Autonomy & Ownership' },
            { icon: <FaHandshake className="text-[#00D1FF]" size={12} />, text: 'Team Collaboration' },
            { icon: <FiClock className="text-[#00D1FF]" size={12} />, text: 'Delivery Under Pressure' },
            { icon: <FiFileText className="text-[#00D1FF]" size={12} />, text: 'Clear Communication & Docs' }
          ].map((skill, index) => (
            <motion.span 
              whileHover={{ scale: 1.05, y: -2 }}
              key={index} 
              className="flex items-center gap-2 px-3 py-1.5 bg-[#111827]/80 border border-white/[0.06] rounded-lg text-[11px] text-slate-300 hover:border-[#00D1FF]/40 hover:shadow-[0_0_15px_rgba(0,209,255,0.2)] transition-all cursor-default"
            >
              {skill.icon}
              <span>{skill.text}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfoItem({ icon, label, value, href }) {
  const content = (
    <>
      <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/[0.08] border border-[#00D1FF]/10 flex items-center justify-center text-[#00D1FF] group-hover:bg-[#00D1FF]/[0.15] transition-all shrink-0">
        {icon}
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-slate-500 text-[11px]">{label}:</span>
        <span className="text-white text-[12px] font-medium group-hover:text-[#00D1FF] transition-colors">{value}</span>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer">
        {content}
      </a>
    );
  }
  return <div className="flex items-center gap-3 group">{content}</div>;
}

function LangBar({ name, level }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] text-slate-300 w-14">{name}</span>
      <div className="flex gap-1">
        {[1,2,3,4,5].map(i => (
          <div key={i} className={`w-2 h-2 rounded-full ${i <= level ? 'bg-[#00D1FF] shadow-[0_0_4px_rgba(0,209,255,0.5)]' : 'bg-slate-700'}`}></div>
        ))}
      </div>
    </div>
  );
}

function EduItem({ school, degree, date, current }) {
  return (
    <div className="relative pl-4 border-l-2 border-[#00D1FF]/30">
      {current && <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-[#00D1FF] shadow-[0_0_6px_rgba(0,209,255,0.6)]"></div>}
      {!current && <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-slate-600"></div>}
      <h4 className="text-white text-sm font-semibold">{school}</h4>
      <p className="text-slate-400 text-[11px]">{degree}</p>
      <p className={`text-[10px] mt-0.5 ${current ? 'text-[#00D1FF]' : 'text-[#00D1FF]/60'}`}>{date}</p>
    </div>
  );
}

// ========== SKILLS SECTION ==========
function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FiCode size={16} />,
      skills: ['TypeScript', 'JavaScript', 'Python', 'C', 'Java', 'Assembly']
    },
    {
      title: 'Back-End',
      icon: <FiServer size={16} />,
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'JWT Auth', 'REST API Design']
    },
    {
      title: 'Front-End',
      icon: <FaPalette size={16} />,
      skills: ['React.js', 'React Native', 'Vue.js', 'Tailwind CSS', 'Expo', 'HTML5', 'CSS3']
    },
    {
      title: 'Databases',
      icon: <FiDatabase size={16} />,
      skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Schema Modelling']
    },
    {
      title: 'DevOps & Tools',
      icon: <FiLayers size={16} />,
      skills: ['Docker', 'Git/GitHub', 'Linux', 'Postman', 'VS Code', 'npm']
    },
    {
      title: 'AI Tools',
      icon: <FiGlobe size={16} />,
      skills: ['Copilot', 'Claude', 'Cursor', 'Prompt Engineering', 'LLM Integration']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="w-full max-w-[1050px] flex flex-col items-center px-8 pr-28 relative"
    >
      <motion.div variants={headerVariants} className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          Tech <span className="text-[#00D1FF]">Skills</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#00D1FF] rounded-full mx-auto mb-3" 
        />
        <p className="text-slate-400 text-sm">My technical toolkit across the full stack</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {skillCategories.map((cat) => (
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0,209,255,0.15)" }}
            key={cat.title} 
            className="bg-[#111827]/60 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 hover:border-[#00D1FF]/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00D1FF]/[0.1] border border-[#00D1FF]/15 flex items-center justify-center text-[#00D1FF] group-hover:shadow-[0_0_12px_rgba(0,209,255,0.2)] transition-all">
                {cat.icon}
              </div>
              <h3 className="text-xs font-semibold text-[#00D1FF] uppercase tracking-[0.1em]">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map(skill => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,209,255,0.1)" }}
                  key={skill} 
                  className="px-2.5 py-1 bg-[#0B1120]/60 border border-white/[0.06] rounded-lg text-[10px] text-slate-300 hover:border-[#00D1FF]/40 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>
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
  const projects = [
    { 
      title: "DZ-Fit", 
      role: "Tech Lead · Back-End",
      desc: [
        "Led full technical cycle of a gym search platform",
        "RESTful API for gym, slot & booking management",
        "PostgreSQL geo-search optimization + Docker containerization"
      ],
      tags: ["Django", "FastAPI", "PostgreSQL", "Docker"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      title: "IoTopia", 
      role: "Back-End Dev · Academic",
      desc: [
        "Backend for a gamified IoT learning platform",
        "Quiz engine, user progression & secured API endpoints"
      ],
      tags: ["Node.js", "MongoDB", "JavaScript"],
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    { 
      title: "AI Study Chatbot", 
      role: "AI Developer · Personal",
      desc: [
        "Llama3 LLM integration for interactive study assistance",
        "Conversational UI tailored to learning workflows"
      ],
      tags: ["Python", "Llama3", "API Integration"],
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    { 
      title: "Carpooling App", 
      role: "Front-End Dev · Personal",
      desc: [
        "Responsive UI for trip and booking management",
        "Focus on UX clarity and mobile-first performance"
      ],
      tags: ["React Native", "Expo", "JavaScript"],
      gradient: "from-orange-500/20 to-amber-500/20"
    },
    { 
      title: "Geriaasafe", 
      role: "Front-End Dev · Personal",
      desc: [
        "Interactive senior care guide for pharmacy students",
        "Structured, accessible informational content"
      ],
      tags: ["HTML5", "CSS3", "JavaScript"],
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className="flex flex-col items-center w-full max-w-[1050px] px-8 pr-28"
    >
      
      {/* Header */}
      <motion.div variants={headerVariants} className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          My <span className="text-[#00D1FF]">Projects</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#00D1FF] rounded-full mx-auto mb-3" 
        />
        <p className="text-slate-400 text-sm">Real-world projects I've built and led</p>
      </motion.div>

      {/* Grid - 2 columns top, then remaining */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {projects.map((project, idx) => (
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            key={idx} 
            className={`bg-[#111827]/60 backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#00D1FF]/40 transition-all duration-300 group cursor-pointer hover:shadow-[0_15px_40px_rgba(0,209,255,0.12)] ${idx === 4 ? 'md:col-span-2 md:max-w-[50%] md:mx-auto' : ''}`}
          >
            {/* Top gradient bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}></div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white text-base font-bold group-hover:text-[#00D1FF] transition-colors">{project.title}</h3>
                <span className="text-[9px] text-[#00D1FF]/70 uppercase tracking-wider font-semibold bg-[#00D1FF]/[0.06] px-2 py-1 rounded-full">{project.role}</span>
              </div>
              
              {/* Bullet points */}
              <ul className="space-y-1.5 mb-4">
                {project.desc.map((point, i) => (
                  <li key={i} className="text-slate-400 text-[11px] leading-relaxed flex items-start gap-2">
                    <span className="text-[#00D1FF] mt-0.5 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-[#00D1FF]/[0.05] border border-[#00D1FF]/10 rounded-full text-[10px] text-[#00D1FF]/70 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
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
      className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-between px-8 pr-28 gap-12 relative"
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
        <form onSubmit={handleSubmit} className="bg-[#111827]/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
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
                className="w-full bg-[#0B1120]/80 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00D1FF]/40 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all"
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
                className="w-full bg-[#0B1120]/80 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00D1FF]/40 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all"
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
                className="w-full bg-[#0B1120]/80 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00D1FF]/40 focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all resize-none"
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
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,209,255,0.4)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#00D1FF] hover:bg-[#00b8e6] text-white text-sm font-medium rounded-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group"
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
