const fs = require('fs');

const path = 'c:\\Users\\DELL\\.gemini\\antigravity\\scratch\\rania-portfolio\\frontend\\src\\App.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Update CV Button
content = content.replace(
  /<motion\.button \n          whileHover=\{\{ scale: 1\.05, borderColor: "rgba\(0, 209, 255, 0\.4\)", backgroundColor: "rgba\(255,255,255,0\.05\)" \}\}\n          whileTap=\{\{ scale: 0\.95 \}\}\n          className="px-8 py-2\.5 bg-white\/\[0\.05\] border border-white\/10 text-white text-sm font-medium rounded-full transition-all cursor-pointer active:scale-95"\n        >\n          Download CV\n        <\/motion\.button>/,
  `<motion.button 
          whileHover={{ scale: 1.05, borderColor: "rgba(0, 209, 255, 0.4)", backgroundColor: "rgba(255,255,255,0.05)", boxShadow: "0 0 20px rgba(0, 209, 255, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#00D1FF', '#4facfe', '#ffffff'] })}
          className="px-8 py-2.5 bg-white/[0.05] border border-white/10 text-white text-sm font-medium rounded-full transition-all cursor-pointer active:scale-95 relative overflow-hidden group"
        >
          <span className="relative z-10">Download CV</span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            whileHover={{ translateX: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.button>`
);

// 2. AboutSection replacement
const aboutTarget = `function AboutSection() {
  return (
    <div className="w-full max-w-[1050px] flex flex-col md:flex-row items-start justify-between px-8 pr-28 gap-12 relative">`;
const aboutReplacement = `function AboutSection() {
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
    >`;

content = content.replace(aboutTarget, aboutReplacement);

// Fix AboutSection divs -> motion.divs for left and right
content = content.replace(
  `{/* Left: Profile & Education */}
      <div className="w-full md:w-[48%]">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          About <span className="text-[#00D1FF]">Me</span>
        </h2>
        <div className="w-12 h-1 bg-[#00D1FF] rounded-full mb-5"></div>`,
  `{/* Left: Profile & Education */}
      <motion.div variants={leftVariants} className="w-full md:w-[48%]">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          About <span className="text-[#00D1FF]">Me</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#00D1FF] rounded-full mb-5" 
        />`
);

content = content.replace(
  `{/* Right: Education & Soft Skills */}
      <div className="w-full md:w-[48%]">`,
  `</motion.div>\n\n      {/* Right: Education & Soft Skills */}
      <motion.div variants={rightVariants} className="w-full md:w-[48%]">`
);

content = content.replace(
  `{skill.icon}
              <span>{skill.text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );`,
  `{skill.icon}
              <span>{skill.text}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );`
);

content = content.replace(
  `<span key={index} className="flex items-center gap-2 px-3 py-1.5 bg-[#111827]/80 border border-white/[0.06] rounded-lg text-[11px] text-slate-300 hover:border-[#00D1FF]/20 transition-colors">`,
  `<motion.span 
              whileHover={{ scale: 1.05, y: -2 }}
              key={index} 
              className="flex items-center gap-2 px-3 py-1.5 bg-[#111827]/80 border border-white/[0.06] rounded-lg text-[11px] text-slate-300 hover:border-[#00D1FF]/40 hover:shadow-[0_0_15px_rgba(0,209,255,0.2)] transition-all cursor-default"
            >`
);

// SkillsSection
const skillsTarget1 = `return (
    <div className="w-full max-w-[1050px] flex flex-col items-center px-8 pr-28 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          Tech <span className="text-[#00D1FF]">Skills</span>
        </h2>
        <div className="w-12 h-1 bg-[#00D1FF] rounded-full mx-auto mb-3"></div>`;

const skillsReplacement1 = `const containerVariants = {
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
        />`;

content = content.replace(skillsTarget1, skillsReplacement1);

content = content.replace(
  `<div key={cat.title} className="bg-[#111827]/60 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 hover:border-[#00D1FF]/20 transition-all duration-300 group">`,
  `<motion.div 
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0,209,255,0.15)" }}
            key={cat.title} 
            className="bg-[#111827]/60 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 hover:border-[#00D1FF]/40 transition-all duration-300 group"
          >`
);

content = content.replace(
  `<span key={skill} className="px-2.5 py-1 bg-[#0B1120]/60 border border-white/[0.06] rounded-lg text-[10px] text-slate-300 hover:border-[#00D1FF]/20 hover:text-white transition-all cursor-default">
                  {skill}
                </span>`,
  `<motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,209,255,0.1)" }}
                  key={skill} 
                  className="px-2.5 py-1 bg-[#0B1120]/60 border border-white/[0.06] rounded-lg text-[10px] text-slate-300 hover:border-[#00D1FF]/40 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>`
);

content = content.replace(
  `</div>
    </div>
  );
}`,
  `</div>
    </motion.div>
  );
}`
);

// PortfolioSection
const portfolioTarget1 = `return (
    <div className="flex flex-col items-center w-full max-w-[1050px] px-8 pr-28">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          My <span className="text-[#00D1FF]">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-[#00D1FF] rounded-full mx-auto mb-3"></div>`;

const portfolioReplacement1 = `const containerVariants = {
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
        />`;

content = content.replace(portfolioTarget1, portfolioReplacement1);

content = content.replace(
  `<div 
            key={idx} 
            className={\`bg-[#111827]/60 backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#00D1FF]/25 transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,209,255,0.08)] \${idx === 4 ? 'md:col-span-2 md:max-w-[50%] md:mx-auto' : ''}\`}
          >`,
  `<motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            key={idx} 
            className={\`bg-[#111827]/60 backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#00D1FF]/40 transition-all duration-300 group cursor-pointer hover:shadow-[0_15px_40px_rgba(0,209,255,0.12)] \${idx === 4 ? 'md:col-span-2 md:max-w-[50%] md:mx-auto' : ''}\`}
          >`
);

content = content.replace(
  `</div>
          </div>
        ))}
      </div>
      
    </div>
  );
}`,
  `</div>
          </motion.div>
        ))}
      </div>
      
    </motion.div>
  );
}`
);

// ContactSection
const contactTarget1 = `return (
    <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-between px-8 pr-28 gap-12 relative">
      
      {/* Left: Contact info */}
      <div className="w-full md:w-[40%]">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          Get In <span className="text-[#00D1FF]">Touch</span>
        </h2>
        <div className="w-12 h-1 bg-[#00D1FF] rounded-full mb-6"></div>`;

const contactReplacement1 = `const containerVariants = {
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
        />`;

content = content.replace(contactTarget1, contactReplacement1);

content = content.replace(
  `{/* Right: Contact form */}
      <div className="w-full md:w-[55%]">`,
  `</motion.div>

      {/* Right: Contact form */}
      <motion.div variants={rightVariants} className="w-full md:w-[55%]">`
);

content = content.replace(
  `{status.message && (
              <div className={\`p-3 py-2.5 rounded-xl text-[11px] font-medium border \${
                status.type === 'success' 
                  ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' 
                  : 'bg-rose-500/10 border-rose-500/25 text-rose-400'
              }\`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#00D1FF] hover:bg-[#00b8e6] text-white text-sm font-medium rounded-xl transition-all cursor-pointer hover:shadow-[0_0_25px_rgba(0,209,255,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <FiSend size={16} />
              {loading ? 'Sending...' : 'Send Message'}
            </button>`,
  `{status.message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={\`p-3 py-2.5 rounded-xl text-[11px] font-medium border \${
                  status.type === 'success' 
                    ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' 
                    : 'bg-rose-500/10 border-rose-500/25 text-rose-400'
                }\`}
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
            </motion.button>`
);

content = content.replace(
  `setFormData({ name: '', email: '', message: '' });
      } else {`,
  `setFormData({ name: '', email: '', message: '' });
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#00D1FF', '#4facfe', '#ffffff'] });
      } else {`
);

content = content.replace(
  `</form>
      </div>
    </div>
  );
}`,
  `</form>
      </motion.div>
    </motion.div>
  );
}`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated App.jsx with animations!');
