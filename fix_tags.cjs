const fs = require('fs');
const path = 'c:\\Users\\DELL\\.gemini\\antigravity\\scratch\\rania-portfolio\\frontend\\src\\App.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  `<motion.div variants={headerVariants} className="text-center mb-8">
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
      </div>`,
  `<motion.div variants={headerVariants} className="text-center mb-8">
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
      </motion.div>`
);

content = content.replace(
  `{cat.skills.map(skill => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,209,255,0.1)" }}
                  key={skill} 
                  className="px-2.5 py-1 bg-[#0B1120]/60 border border-white/[0.06] rounded-lg text-[10px] text-slate-300 hover:border-[#00D1FF]/40 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  `{cat.skills.map(skill => (
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
}`
);

content = content.replace(
  `<motion.div variants={headerVariants} className="text-center mb-6">
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
      </div>`,
  `<motion.div variants={headerVariants} className="text-center mb-6">
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
      </motion.div>`
);

content = content.replace(
  `{/* Social links */}
        <div className="flex gap-3">
          <SocialButton icon={<FiGithub size={18} />} label="GitHub" href="https://github.com/rania-keghouche" />
          <SocialButton icon={<FiLinkedin size={18} />} label="LinkedIn" href="https://linkedin.com" />
          <SocialButton icon={<FiTwitter size={18} />} label="Twitter" href="https://twitter.com" />
        </div>
      </div>`,
  `{/* Social links */}
        <div className="flex gap-3">
          <SocialButton icon={<FiGithub size={18} />} label="GitHub" href="https://github.com/rania-keghouche" />
          <SocialButton icon={<FiLinkedin size={18} />} label="LinkedIn" href="https://linkedin.com" />
          <SocialButton icon={<FiTwitter size={18} />} label="Twitter" href="https://twitter.com" />
        </div>
      </motion.div>`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed tags!');
