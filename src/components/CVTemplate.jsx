import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiGithub } from 'react-icons/fi';
import { FaGraduationCap, FaPuzzlePiece, FaFire, FaHandshake } from 'react-icons/fa';
import { FiClock, FiFileText, FiUser, FiBriefcase } from 'react-icons/fi';

const CVTemplate = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex bg-[#1F2937] w-[210mm] min-h-[297mm] text-slate-200 font-sans p-0 m-0 box-border text-[11px] leading-relaxed">
      
      {/* Left Sidebar */}
      <div className="w-[33%] bg-[#DCE4EF] text-[#1E293B] p-8 flex flex-col gap-6">
        {/* Header Left */}
        <div className="flex flex-col mb-2">
          <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-xl font-bold mb-4 shadow-md">RK</div>
          <h1 className="text-[13px] font-extrabold tracking-[0.2em] text-[#0F172A] leading-tight">RANIA<br/>KEGHOUCHE</h1>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-2.5 border-t border-slate-300 pt-5">
          <h2 className="text-[10px] font-bold text-[#3B82F6] tracking-widest uppercase mb-1">Contacts</h2>
          <div className="flex items-center gap-2"><FiMapPin className="text-slate-500"/> <span>Constantine, Algeria</span></div>
          <div className="flex items-center gap-2"><FiMail className="text-slate-500"/> <span>r_keghouche@estin.dz</span></div>
          <div className="flex items-center gap-2"><FiPhone className="text-slate-500"/> <span>+213 783 244 796</span></div>
          <div className="flex items-center gap-2"><FiGithub className="text-slate-500"/> <span>github.com/rania-keghouche</span></div>
        </div>

        {/* Tech Skills */}
        <div className="flex flex-col gap-3 border-t border-slate-300 pt-5">
          <h2 className="text-[10px] font-bold text-[#3B82F6] tracking-widest uppercase mb-1">Tech Skills</h2>
          
          <div>
            <h3 className="text-[9px] font-semibold text-[#3B82F6] tracking-widest uppercase mb-1.5">Languages</h3>
            <div className="flex flex-wrap gap-1">
              {['TypeScript', 'JavaScript', 'Python', 'C', 'Java', 'Assembly'].map(s => <span key={s} className="px-1.5 py-0.5 bg-slate-200 border border-slate-300 rounded text-[9px]">{s}</span>)}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-semibold text-[#3B82F6] tracking-widest uppercase mb-1.5">Back-End</h3>
            <div className="flex flex-wrap gap-1">
              {['Node.js', 'Express.js', 'FastAPI', 'Django', 'JWT Authentication', 'REST API Design', 'Authentication & Authorization'].map(s => <span key={s} className="px-1.5 py-0.5 bg-slate-200 border border-slate-300 rounded text-[9px]">{s}</span>)}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-semibold text-[#3B82F6] tracking-widest uppercase mb-1.5">Front-End</h3>
            <div className="flex flex-wrap gap-1">
              {['React.js', 'React Native', 'Vue.js', 'Tailwind CSS', 'Expo', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX Basics'].map(s => <span key={s} className="px-1.5 py-0.5 bg-slate-200 border border-slate-300 rounded text-[9px]">{s}</span>)}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-semibold text-[#3B82F6] tracking-widest uppercase mb-1.5">Databases</h3>
            <div className="flex flex-wrap gap-1">
              {['PostgreSQL', 'MongoDB', 'SQL', 'Database Design', 'Schema Modeling'].map(s => <span key={s} className="px-1.5 py-0.5 bg-slate-200 border border-slate-300 rounded text-[9px]">{s}</span>)}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-semibold text-[#3B82F6] tracking-widest uppercase mb-1.5">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-1">
              {['Docker', 'Git/GitHub', 'Linux', 'REST APIs', 'Postman', 'VS Code', 'Linux CLI', 'npm'].map(s => <span key={s} className="px-1.5 py-0.5 bg-slate-200 border border-slate-300 rounded text-[9px]">{s}</span>)}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-semibold text-[#3B82F6] tracking-widest uppercase mb-1.5">AI Tools</h3>
            <div className="flex flex-wrap gap-1">
              {['Copilot', 'Claude', 'Cursor', 'Prompt Engineering', 'LLM Integration', 'AI-Assisted Development'].map(s => <span key={s} className="px-1.5 py-0.5 bg-slate-200 border border-slate-300 rounded text-[9px]">{s}</span>)}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="flex flex-col gap-1.5 border-t border-slate-300 pt-5">
          <h2 className="text-[10px] font-bold text-[#3B82F6] tracking-widest uppercase mb-1">Soft Skills</h2>
          {[
            { icon: '💡', text: 'Problem Solving & Algorithms' },
            { icon: '⭐', text: 'Autonomy & Ownership' },
            { icon: '🤝', text: 'Team Collaboration' },
            { icon: '⏱', text: 'Delivery Under Pressure' },
            { icon: '📄', text: 'Clear Communication & Docs' }
          ].map((skill, index) => (
            <div key={index} className="flex items-center gap-2 px-2 py-1 bg-slate-200/50 border border-slate-300 rounded text-[10px]">
              <span>{skill.icon}</span>
              <span className="font-medium text-slate-700">{skill.text}</span>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="flex flex-col gap-2 border-t border-slate-300 pt-5">
          <h2 className="text-[10px] font-bold text-[#3B82F6] tracking-widest uppercase mb-1">Languages</h2>
          <div className="flex items-center justify-between"><span className="font-semibold text-[10px]">Arabic</span><div className="flex gap-0.5">{[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>)}</div></div>
          <div className="flex items-center justify-between"><span className="font-semibold text-[10px]">French</span><div className="flex gap-0.5">{[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i<=4?'bg-[#3B82F6]':'bg-slate-300'}`}></div>)}</div></div>
          <div className="flex items-center justify-between"><span className="font-semibold text-[10px]">English</span><div className="flex gap-0.5">{[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i<=3?'bg-[#3B82F6]':'bg-slate-300'}`}></div>)}</div></div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-[67%] bg-[#1F2937] p-8 flex flex-col gap-7">
        
        {/* Header */}
        <div className="flex flex-col border-b border-slate-700 pb-5">
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Rania Keghouche</h1>
          <h2 className="text-[9px] font-bold text-[#3B82F6] tracking-[0.1em] uppercase mb-3">
            Full-Stack Engineer • Software Engineering Student • AI Enthusiast
          </h2>
          <p className="text-slate-300 text-[10px] leading-relaxed">
            Fast learner who picks up any new stack quickly and delivers. Technical reference on team projects — passionate about building clean, scalable systems from APIs to mobile interfaces.
          </p>
        </div>

        {/* Profile */}
        <div>
          <h2 className="text-[11px] font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#3B82F6] flex items-center justify-center"><FiUser size={12}/></div> Profile
          </h2>
          <div className="pl-3 border-l-[3px] border-[#3B82F6]">
            <p className="text-slate-300 text-[10px] leading-relaxed">
              Engineering student at ESTIN with a strong full-stack foundation and a drive for ownership. I have led technical projects end-to-end as team referent, built backend architectures, and shipped mobile UIs. I adapt fast to new technologies and consistently deliver under pressure — whether solo or as the team's go-to technical reference.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-[11px] font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#3B82F6] flex items-center justify-center"><FaGraduationCap size={12}/></div> Education
          </h2>
          <div className="flex flex-col gap-4">
            <div className="pl-3 border-l-[3px] border-[#3B82F6]">
              <h3 className="text-white font-bold text-[11px]">ESTIN, Bejaia</h3>
              <p className="text-slate-300 text-[10px]">1st Year Graduate Cycle — Software Engineering</p>
              <p className="text-[#3B82F6] text-[9px] mt-0.5">Sept 2025 – Present</p>
            </div>
            <div className="pl-3 border-l-[3px] border-[#3B82F6]">
              <h3 className="text-white font-bold text-[11px]">ESTIN, Bejaia</h3>
              <p className="text-slate-300 text-[10px]">Preparatory Cycle</p>
              <p className="text-[#3B82F6] text-[9px] mt-0.5">Sept 2023 – Jun 2025</p>
            </div>
            <div className="pl-3 border-l-[3px] border-[#3B82F6]">
              <h3 className="text-white font-bold text-[11px]">Lycée Saadi Taher Harath</h3>
              <p className="text-slate-300 text-[10px]">Baccalauréat Maths — Mention Très Bien</p>
              <p className="text-[#3B82F6] text-[9px] mt-0.5">2023</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-[11px] font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#3B82F6] flex items-center justify-center"><FiBriefcase size={12}/></div> Projects
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { 
                title: "DZ-Fit", role: "TECH LEAD · BACK-END",
                tech: "Django · FastAPI · PostgreSQL · Docker",
                desc: ["Led full technical cycle of a gym search platform", "RESTful API for gym, slot & booking management", "PostgreSQL geo-search optimization + Docker containerization"]
              },
              { 
                title: "IoTopia", role: "BACK-END DEV · ACADEMIC",
                tech: "Node.js · MongoDB · JavaScript",
                desc: ["Backend for a gamified IoT learning platform", "Quiz engine, user progression & secured API endpoints"]
              },
              { 
                title: "AI Study Chatbot", role: "AI DEVELOPER · PERSONAL",
                tech: "Python · Llama3 · API Integration",
                desc: ["Llama3 LLM integration for interactive study assistance", "Conversational UI tailored to learning workflows"]
              },
              { 
                title: "Carpooling App", role: "FRONT-END DEV · PERSONAL",
                tech: "React Native · Expo · JavaScript",
                desc: ["Responsive UI for trip and booking management", "Focus on UX clarity and mobile-first performance"]
              },
              { 
                title: "Geriaasafe", role: "FRONT-END DEV · PERSONAL",
                tech: "HTML5 · CSS3 · JavaScript",
                desc: ["Interactive senior care guide for pharmacy students", "Structured, accessible informational content"]
              }
            ].map((p, i) => (
              <div key={i} className={`bg-[#263242] border border-slate-700 p-3 rounded-lg ${i === 4 ? 'col-span-2' : ''}`}>
                <div className="flex justify-between items-start mb-1.5">
                  <h3 className="text-white font-bold text-[11px]">{p.title}</h3>
                  <span className="text-[7px] text-[#3B82F6] font-bold tracking-wider">{p.role}</span>
                </div>
                <p className="text-slate-400 text-[8px] mb-2">{p.tech}</p>
                <ul className="flex flex-col gap-1">
                  {p.desc.map((d, di) => (
                    <li key={di} className="text-slate-300 text-[9px] flex items-start gap-1">
                      <span className="text-[#3B82F6] mt-0.5">▸</span>
                      <span className="leading-tight">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
});

export default CVTemplate;
