import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowLeft, FiGithub, FiExternalLink, FiCode, FiLayers,
  FiZap, FiCheckCircle, FiTag, FiLink, FiBox, FiCpu, FiServer,
  FiDatabase, FiSmartphone, FiGlobe, FiChevronLeft, FiChevronRight, FiActivity
} from 'react-icons/fi';
import { projectsData } from '../App';

// Map tag names to icons
const tagIconMap = {
  'Django':        <FiServer size={12} />,
  'FastAPI':       <FiZap size={12} />,
  'PostgreSQL':    <FiDatabase size={12} />,
  'Docker':        <FiBox size={12} />,
  'Node.js':       <FiServer size={12} />,
  'MongoDB':       <FiDatabase size={12} />,
  'JavaScript':    <FiCode size={12} />,
  'TypeScript':    <FiCode size={12} />,
  'Python':        <FiCpu size={12} />,
  'Llama3':        <FiCpu size={12} />,
  'React Native':  <FiSmartphone size={12} />,
  'Expo':          <FiSmartphone size={12} />,
  'HTML5':         <FiGlobe size={12} />,
  'CSS3':          <FiGlobe size={12} />,
  'API Integration': <FiLink size={12} />,
};
const defaultTagIcon = <FiTag size={12} />;

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setCurrentImageIdx(0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen w-screen bg-[#0B1120] flex flex-col items-center justify-center text-white font-sans">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <button onClick={() => navigate('/')} className="py-2.5 px-6 bg-[#00D1FF]/10 text-[#00D1FF] rounded-xl hover:bg-[#00D1FF]/20 transition-all">
          Return Home
        </button>
      </div>
    );
  }

  const accent = project.accent?.color || '#00D1FF';
  const glow   = project.accent?.glow   || 'rgba(0,209,255,0.15)';
  const isLive = project.link && !project.link.includes('github.com');
  const images = project.images || [project.image];

  const nextImage = () => setCurrentImageIdx((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white font-sans relative">

      {/* Ambient blobs */}
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[130px] pointer-events-none"
        style={{ background: accent }}
      />
      <motion.div
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
        style={{ background: accent }}
      />
      <div className="grid-bg absolute inset-0 opacity-20 pointer-events-none" />

      {/* Topbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group text-slate-400 hover:text-white transition-colors"
          >
            <div
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-opacity-40 transition-all"
              style={{ '--hover-border': accent }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${accent}60`; e.currentTarget.style.background = `${accent}12`; e.currentTarget.style.color = accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = ''; e.currentTarget.style.color = ''; }}
            >
              <FiArrowLeft size={16} />
            </div>
            <span className="text-sm font-medium tracking-wide">Back to Portfolio</span>
          </button>

          {/* Status badge */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest"
            style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            {isLive ? 'Live Project' : 'Academic / Personal'}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="pt-28 pb-20 px-6 max-w-[1100px] mx-auto relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
          className="mb-10"
        >
          {/* Category pill */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest mb-5"
            style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}
          >
            <FiLayers size={10} /> {project.accent?.label || project.category}
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3 leading-none">
            {project.title}
          </h1>

          <p className="text-slate-400 text-lg font-medium mt-2">{project.role}</p>

          {/* Accent underline */}
          <motion.div
            initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] rounded-full mt-4"
            style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
          />
        </motion.div>

        {/* ── HERO IMAGE CAROUSEL ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-[800px] mx-auto mb-12"
        >
          <div 
            className="w-full rounded-2xl overflow-hidden border shadow-2xl relative bg-[#0B1120] flex items-center justify-center min-h-[300px]"
            style={{ borderColor: `${accent}30`, boxShadow: `0 0 40px ${glow}` }}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] z-20" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}20)` }} />
            
            <AnimatePresence mode="wait">
              {/* Blurred Background to fill gaps */}
              <motion.img
                key={`bg-${currentImageIdx}`}
                src={images[currentImageIdx]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              {/* Foreground Contained Image */}
              <motion.img
                key={currentImageIdx}
                src={images[currentImageIdx]}
                alt={`${project.title} screenshot ${currentImageIdx + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-[#0B1120] hover:text-[#00D1FF] border border-white/10 transition-all backdrop-blur-md"
                  style={{ hover: { color: accent } }}
                >
                  <FiChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-[#0B1120] hover:text-[#00D1FF] border border-white/10 transition-all backdrop-blur-md"
                >
                  <FiChevronRight size={24} />
                </button>
              </>
            )}
          </div>
          
          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIdx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                  style={idx === currentImageIdx ? { background: accent, boxShadow: `0 0 10px ${accent}60` } : {}}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* ── DETAILS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT — Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.35 }}
            className="md:col-span-2 space-y-8"
          >
            {/* Overview card */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-7 backdrop-blur-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-5 flex items-center gap-2" style={{ color: accent }}>
                <FiLayers size={13} /> Project Overview
              </h3>

              {/* Accent-bordered description block */}
              <div className="pl-4 border-l-2 space-y-3 mb-6" style={{ borderColor: `${accent}50` }}>
                {project.desc.map((line, i) => (
                  <p key={i} className="text-slate-300 text-[15px] leading-relaxed">{line}</p>
                ))}
                <p className="text-slate-400 text-[14px] leading-relaxed">
                  This project reflects a hands-on approach to real engineering challenges — from architecture design to deployment. Every decision prioritised scalability, performance and user experience.
                </p>
              </div>

              {/* Structured bullet highlights */}
              <div className="space-y-2.5">
                {[
                  'Clean, maintainable code architecture',
                  'Secure authentication & data handling',
                  'Mobile-first responsive design',
                  'End-to-end feature ownership',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <FiCheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: accent }} />
                    <span className="text-slate-300 text-[13.5px]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.45 }}
            className="space-y-5"
          >
            {/* Tech Stack card */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.18em] mb-4 flex items-center gap-2" style={{ color: accent }}>
                <FiCode size={11} /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border transition-all duration-200 cursor-default hover:scale-105"
                    style={{
                      color: `${accent}dd`,
                      background: `${accent}0e`,
                      borderColor: `${accent}28`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${accent}22`; e.currentTarget.style.borderColor = `${accent}55`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${accent}0e`; e.currentTarget.style.borderColor = `${accent}28`; }}
                  >
                    <span style={{ color: accent }}>{tagIconMap[tag] || defaultTagIcon}</span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links card */}
            <div
              className="border rounded-2xl p-6 backdrop-blur-sm"
              style={{ background: `${accent}08`, borderColor: `${accent}25` }}
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.18em] mb-4 flex items-center gap-2" style={{ color: accent }}>
                <FiExternalLink size={11} /> Links
              </h3>
              <div className="space-y-2.5">
                {/* Live link — only if deployed */}
                {isLive && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group px-4 py-3 rounded-xl border transition-all duration-200"
                    style={{ background: `${accent}0a`, borderColor: `${accent}25` }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${accent}1a`; e.currentTarget.style.borderColor = `${accent}55`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${accent}0a`; e.currentTarget.style.borderColor = `${accent}25`; }}
                  >
                    <span className="flex items-center gap-2.5 text-[12.5px] font-semibold text-slate-200">
                      <FiGlobe size={14} style={{ color: accent }} /> Live Demo
                    </span>
                    <FiExternalLink size={13} style={{ color: `${accent}99` }} />
                  </a>
                )}

                {/* GitHub link always shown */}
                <a
                  href={isLive ? `https://github.com/KettabAya` : project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group px-4 py-3 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200"
                >
                  <span className="flex items-center gap-2.5 text-[12.5px] font-semibold text-slate-300">
                    <FiGithub size={14} className="text-slate-400" /> Source Code
                  </span>
                  <FiExternalLink size={13} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Status & Type Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#151a23] border border-white/[0.04] rounded-2xl p-4 relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-white/[0.02] transition-transform duration-500 group-hover:scale-[2]" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2.5 flex items-center gap-2 text-[#9e8871]">
                  <FiActivity size={13} /> STATUS
                </h3>
                <p className="text-white text-[15px] font-bold relative z-10">{project.status}</p>
              </div>
              <div className="bg-[#151a23] border border-white/[0.04] rounded-2xl p-4 relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-white/[0.02] transition-transform duration-500 group-hover:scale-[2]" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2.5 flex items-center gap-2 text-[#9e8871]">
                  <FiTag size={13} /> TYPE
                </h3>
                <p className="text-white text-[15px] font-bold relative z-10">{project.type}</p>
              </div>
            </div>

            {/* Role / Meta card */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.18em] mb-4 flex items-center gap-2" style={{ color: accent }}>
                <FiZap size={11} /> My Role
              </h3>
              <p className="text-white text-[13px] font-semibold mb-1">{project.role}</p>
              <p className="text-slate-500 text-[11px] uppercase tracking-widest">{project.category}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
