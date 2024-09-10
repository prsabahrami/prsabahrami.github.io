'use client'

import { useState } from 'react'
import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaCode, FaMusic, FaUtensils, FaChevronDown, FaChevronUp, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa'
import { LatestProjects } from './components/latest-projects'
import { LatestContributions } from './components/latest-contributions'

export default function Page() {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const [isContributionsExpanded, setIsContributionsExpanded] = useState(false);

  return (
    <section className="max-w-3xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-skin-base">Parsa Bahrami's virtual existence!</h1>
        <p className="text-xl text-skin-base">This shall be a place to share my tech-related and nerdy, sociological or philosophical ideas</p>
      </header>
 
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-skin-base">Who Am I?</h2>
        <p className="mb-4 text-lg leading-relaxed text-skin-base">
          Hmm, who am I? One of the greatest philosophical questions of all time, right? Well, let’s see.
          I'm a Computer Science student at the University of Waterloo with a minor in Combinatorics and Optimization - that's for sure.
          I come from a competitive programming background and my heart beats for graph theory.
          I love low-level and compiler stuff and have a lot of experience writing parsers.
          When I'm not coding, I'm either rock climbing, exploring new hiking trails, cooking - not in the GenZ language but actual culinary, 
          or pondering life’s bigger questions.
          I like to say I’m a part-time existentialist, though it’s more of a hobby.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-skin-base">What to Expect</h2>
        <p className="text-lg text-skin-base italic p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400" style={{ backgroundColor: 'var(--quote-dialog)' }}>
          I know people usually write their blogs to show off their projects and stuff, and I'll probably do that too. 
          But here's the thing: I've been yearning for a space to pour out the thoughts that keep me up until 5 AM. 
          Expect a mix of tech insights, late-night musings, and perhaps some existential ponderings. 
          This blog is my digital canvas for the ideas that refuse to let me sleep – from coding conundrums to life's bigger questions. 
          So, grab a coffee (or whatever keeps you awake) and dive into my nocturnal narratives.
        </p>
      </div>

      <div className="mb-12">
        <button
          onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
          className="flex items-center text-2xl font-semibold mb-4 text-skin-base hover:underline focus:outline-none"
        >
          {isProjectsExpanded ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
          Latest Projects
        </button>
        {isProjectsExpanded && <LatestProjects />}
      </div>

      <div className="mb-12">
        <button
          onClick={() => setIsContributionsExpanded(!isContributionsExpanded)}
          className="flex items-center text-2xl font-semibold mb-4 text-skin-base hover:underline focus:outline-none"
        >
          {isContributionsExpanded ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
          Latest Contributions
        </button>
        {isContributionsExpanded && <LatestContributions />}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-skin-base">Latest Blogs</h2>
        <p className="mb-4 text-lg leading-relaxed text-skin-base">to be added soon</p>
        <BlogPosts />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-skin-base">Let's Connect</h2>
        <div className="flex space-x-4">
          <Link href="https://github.com/prsabahrami" className="text-2xl text-skin-base hover:text-gray-600 dark:hover:text-gray-400">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/parsa-bahrami" className="text-2xl text-skin-base hover:text-gray-600 dark:hover:text-gray-400">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com/prsabahrami" className="text-2xl text-skin-base hover:text-gray-600 dark:hover:text-gray-400">
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com/prsa_bahrami" className="text-2xl text-skin-base hover:text-gray-600 dark:hover:text-gray-400">
            <FaInstagram />
          </Link>
          <Link href="mailto:p.bahraminejad@gmail.com" className="text-2xl text-skin-base hover:text-gray-600 dark:hover:text-gray-400">
            <FaEnvelope />
          </Link>
        </div>
      </div>

      <footer className="text-center text-skin-base mt-16" />
    </section>
  )
}
