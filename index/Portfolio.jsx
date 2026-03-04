import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, Moon, Github, Linkedin, Twitter, Mail, 
  ExternalLink, Download, Code, Database, Terminal, 
  Cpu, Layout, Server, ChevronRight, MapPin, Calendar, Briefcase
} from 'lucide-react';

// --- MOCK DATA ---
const SKILLS = [
  { name: 'React.js', icon: Code, delay: 0 },
  { name: 'Node.js', icon: Server, delay: 0.2 },
  { name: 'Python', icon: Terminal, delay: 0.4 },
  { name: 'PostgreSQL', icon: Database, delay: 0.1 },
  { name: 'AWS', icon: Cpu, delay: 0.5 },
  { name: 'TypeScript', icon: Layout, delay: 0.3 },
];

const EXPERIENCE = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'TechNova Solutions',
    duration: 'May 2025 - Aug 2025',
    description: 'Architected a microservice using Node.js and Docker that reduced data processing latency by 40%. Implemented an event-driven architecture using Kafka.',
    type: 'work'
  },
  {
    id: 2,
    role: 'B.S. Informatics and Computer Science',
    company: 'Strathmore University',
    duration: 'July 2025 - Expected May 2029',
    description: 'Specializing in Distributed Systems and Artificial Intelligence. Currently maintaining a 3.9/4.0 GPA.',
    type: 'education'
  },
  {
    id: 3,
    role: '1st Place Winner',
    company: 'Global Hackathon 2024',
    duration: 'November 2024',
    description: 'Built an AI-powered code review assistant using LLMs and AST parsing. Integrated directly into GitHub Actions for real-time developer feedback.',
    type: 'award'
  }
];

const PROJECTS = [
  {
    id: 1,
    title: 'Nexus Flow: Distributed Task Queue',
    description: 'A high-performance, distributed task queue built from scratch. Handles 10k+ concurrent jobs with guaranteed at-least-once delivery.',
    tech: ['Go', 'Redis', 'gRPC', 'Docker'],
    link: '#',
    className: 'md:col-span-2 md:row-span-2', // Bento large card
  },
  {
    id: 2,
    title: 'Programmers Calculator',
    description: 'A calculator for programmers that can perform various operations such as addition, subtraction, multiplication, and division as well as binary, hexadecimal, and octal conversions.',
    tech: ['Java', 'JavaFX'],
    link: 'https://github.com/Brown-cmd/programmerscalculator',
    className: 'md:col-span-1 md:row-span-1', // Bento small card
  },
  {
    id: 3,
    title: 'EchoDB',
    description: 'An in-memory key-value store implementing the Raft consensus algorithm for fault tolerance and high availability.',
    tech: ['Rust', 'Raft', 'Networking'],
    link: '#',
    className: 'md:col-span-1 md:row-span-1', // Bento small card
  },
  {
    id: 4,
    title: 'Algorithmic Trading Engine',
    description: 'Low-latency trading engine backtesting framework. Processes historical tick data to evaluate quantitative strategies.',
    tech: ['C++', 'Pandas', 'WebSockets'],
    link: '#',
    className: 'md:col-span-3 md:row-span-1', // Bento wide card
  }
];

// --- COMPONENTS ---

const FloatingSkillCard = ({ skill, index }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: skill.delay 
      }}
      whileHover={{ 
        y: 0, 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      className="absolute flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer
                 bg-black/5 dark:bg-white/5 backdrop-blur-md 
                 border border-black/10 dark:border-white/10
                 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
                 hover:border-blue-500/50 hover:dark:border-blue-500/50
                 transition-colors duration-300 group z-10"
      style={{
        // Stagger positions arbitrarily around the hero area for the floating effect
        top: `${20 + (index * 15)}%`,
        left: index % 2 === 0 ? `${10 + (index * 5)}%` : 'auto',
        right: index % 2 !== 0 ? `${10 + (index * 5)}%` : 'auto',
      }}
    >
      <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors" />
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span>
    </motion.div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Toggle theme logic
  const toggleTheme = () => setIsDark(!isDark);

  // Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} scroll-smooth`}>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-500/30 transition-colors duration-300">
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md border-b border-black/5 dark:border-white/10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            Brown<span className="text-blue-500">.</span>Orie
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400"
          >
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Experience</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-zinc-400" /> : <Moon className="w-5 h-5 text-zinc-600" />}
          </motion.button>
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
          {/* Subtle Background Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating Skill Cards */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {SKILLS.map((skill, idx) => (
              <div key={skill.name} className="pointer-events-auto">
                <FloatingSkillCard skill={skill} index={idx} />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-6"
            >
              <Terminal className="w-4 h-4" />
              <span>Computer Science Undergraduate</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            >
              Hi, I'm Brown. An aspiring <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                computer scientist.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10"
            >
              Building scalable architectures, distributed systems and elegant user interfaces. 
              Currently exploring the intersection of AI and edge computing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4"
            >
              <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold hover:scale-105 transition-transform">
                View Work
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                Contact Me
              </a>
            </motion.div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <ChevronRight className="text-blue-500" /> About Me
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I am a second-year Computer Science student at Strathmore University in Nairobi, Kenya. I bridge the gap between academic theory and self-taught practical application, with a focus on building seamless user experiences.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                When I'm not studying or tweaking around with AI tools, you can find me learning about cars or capturing -'moments with my camera.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">Algorithms</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">System Design</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">Cloud Architecture</span>
              </div>
            </div>

            <div className="relative group perspective-1000">
              {/* Neon Glow Behind Image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl group-hover:bg-blue-500/30 transition-colors duration-500" />
              
              <div className="relative w-full h-96 bg-gradient-to-br from-black/10 to-transparent dark:from-white/10 dark:to-transparent rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-12">
                <div className="w-32 h-32 rounded-full border border-black/20 dark:border-white/20 mb-4 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                  <Cpu className="w-12 h-12 text-zinc-400" />
                </div>
                <div className="text-center">
                  <div className="font-mono text-sm text-blue-500 mb-1">status: compiling...</div>
                  <div className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">Alex_Headshot.jpg</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold flex items-center gap-2 mb-12"
          >
            <ChevronRight className="text-blue-500" /> Experience & Education
          </motion.h2>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.25, // Delay between each card animating
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l-2 border-blue-500/30 ml-4 md:ml-6 space-y-12"
          >
            {EXPERIENCE.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={{
                  hidden: { opacity: 0, x: -40, y: 20 },
                  show: { 
                    opacity: 1, 
                    x: 0, 
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 15 }
                  }
                }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-zinc-50 dark:bg-zinc-950 border-4 border-blue-500" />
                
                <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{item.role}</h3>
                      <div className="text-blue-500 font-medium">{item.company}</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 mt-2 md:mt-0 bg-black/5 dark:bg-black/40 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" /> {item.duration}
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold flex items-center gap-2 mb-12"
          >
            <ChevronRight className="text-blue-500" /> Selected Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md flex flex-col justify-between overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500/50 transition-all duration-300 ${project.className}`}
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500 z-0" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-black/10 dark:bg-white/10 flex items-center justify-center border border-black/5 dark:border-white/5">
                      <Code className="w-6 h-6 text-blue-500" />
                    </div>
                    <a href={project.link} className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- DOCUMENTS SECTION --- */}
        <section className="py-24 px-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            {/* Animated Glowing Border Wrapper */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
            
            <div className="relative flex items-center gap-4 px-8 py-5 bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-2xl leading-none">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Download className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Resume / CV</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">PDF Version (124 KB)</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- CONTACT & FOOTER --- */}
        <footer id="contact" className="py-24 px-6 border-t border-black/5 dark:border-white/10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-4xl font-bold tracking-tight">Let's build the future together.</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a 
              href="mailto:[browngervasorie@gmail.com]" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </a>

            <div className="flex justify-center gap-6 pt-12">
              {[
                { icon: Github, href: 'https://github.com/brown-cmd' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/brown-gervasorie-629b8b27b/' },
                { icon: Instagram, href: 'https://www.instagram.com/browniesoptics' }
              ].map((Social, idx) => (
                <a 
                  key={idx} 
                  href={Social.href}
                  className="relative p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors
                             after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                             after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  <Social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-8 font-mono">
              Designed & Built with React & Tailwind <br/>
              © 2026 Brown Orie.
            </p>
          </motion.div>
        </footer>

      </div>
    </div>
  );
}