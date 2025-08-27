import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Briefcase, GraduationCap, Code2 } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 text-slate-900 font-sans">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
        <nav className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          <h1 className="font-extrabold text-xl tracking-wide">Sreenath K</h1>
          <div className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-yellow-300 transition">About</a>
            <a href="#experience" className="hover:text-yellow-300 transition">Experience</a>
            <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Hi, I'm Sreenath 👋
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Entry-Level Software Developer | Core Java | SQL | Banking & Payments
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-slate-800">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm"><MapPin className="w-4 h-4" /> Bangalore, India</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm"><Github className="w-4 h-4" /> github.com/sreenathk469</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-3xl shadow-2xl bg-white p-6 border border-indigo-100">
              <h3 className="font-bold text-lg mb-4 text-indigo-600">Quick Snapshot</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2"><Code2 className="w-5 h-5 text-indigo-600" /> Core Java, OOP, Collections</li>
                <li className="flex items-center gap-2"><Code2 className="w-5 h-5 text-indigo-600" /> SQL, Oracle DB, MySQL</li>
                <li className="flex items-center gap-2"><Code2 className="w-5 h-5 text-indigo-600" /> JDBC, Servlet, REST APIs</li>
                <li className="flex items-center gap-2"><Code2 className="w-5 h-5 text-indigo-600" /> Banking & Payments Domain</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700">About Me</h2>
        <p className="text-slate-700 leading-7">
          I'm a passionate software developer skilled in Core Java, SQL, and web technologies, with a strong background in
          banking and payments. Currently, I’m working as a <strong>Software Engineering Intern at Codetech Solutions Pvt. Ltd.</strong>,
          where I contribute to building efficient solutions using Java and databases. My prior experience as an Assistant Manager
          (PO) at Federal Bank gave me insights into financial operations and compliance, which I now connect with technology.
        </p>
      </section>

      {/* ===== Experience ===== */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl shadow-inner">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700">Experience</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition border-l-4 border-indigo-600">
            <h3 className="text-xl font-bold flex items-center gap-2"><Briefcase className="w-5 h-5 text-indigo-600" /> Software Engineering Intern</h3>
            <p className="text-slate-600">Codetech Solutions Pvt. Ltd. | Present</p>
            <p className="mt-2 text-sm text-slate-700">Contributing to Java-based projects, improving backend logic, and managing SQL database operations.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition border-l-4 border-indigo-600">
            <h3 className="text-xl font-bold flex items-center gap-2"><Briefcase className="w-5 h-5 text-indigo-600" /> Assistant Manager (PO)</h3>
            <p className="text-slate-600">Federal Bank Pvt Ltd | Jun 2023 - Feb 2024</p>
            <p className="mt-2 text-sm text-slate-700">Handled customer transactions, KYC/AML compliance, CASA accounts, and loan operations.</p>
          </div>
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition border-t-4 border-indigo-600">
            <h3 className="text-lg font-bold">Student Management (CRUD)</h3>
            <p className="text-slate-700 text-sm mt-2">Designed a user-friendly interface for CRUD operations, integrated with SQL database.</p>
            <a href="https://github.com/sreenathk469" target="_blank" rel="noreferrer" className="inline-flex mt-3 text-indigo-600 items-center gap-2 font-medium"> <Github className="w-4 h-4" /> Code</a>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition border-t-4 border-indigo-600">
            <h3 className="text-lg font-bold">Online Polling Using Visual Cryptography</h3>
            <p className="text-slate-700 text-sm mt-2">Secure online polling system developed with Android + Python modules.</p>
            <a href="https://github.com/sreenathk469" target="_blank" rel="noreferrer" className="inline-flex mt-3 text-indigo-600 items-center gap-2 font-medium"> <Github className="w-4 h-4" /> Code</a>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700">Contact</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-indigo-600" /> <a href="mailto:sreenathk469@gmail.com" className="underline">sreenathk469@gmail.com</a></p>
            <p className="flex items-center gap-2 mt-3"><Phone className="w-5 h-5 text-indigo-600" /> 9074424480</p>
            <p className="flex items-center gap-2 mt-3"><Linkedin className="w-5 h-5 text-indigo-600" /> <a href="https://www.linkedin.com/in/sreenath-k-5398b5243" target="_blank" rel="noreferrer" className="underline">linkedin.com/in/sreenath-k</a></p>
            <p className="flex items-center gap-2 mt-3"><Github className="w-5 h-5 text-indigo-600" /> <a href="https://github.com/sreenathk469" target="_blank" rel="noreferrer" className="underline">github.com/sreenathk469</a></p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="text-slate-700 text-sm leading-7">I’m open to Java Developer, Backend Developer, and FinTech/Banking IT roles in Bangalore and remote opportunities. Feel free to connect with me!</p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-8 text-center text-sm bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        © {new Date().getFullYear()} Sreenath K. Built with React & Tailwind.
      </footer>
    </div>
  );
}
