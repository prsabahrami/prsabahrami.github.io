import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const projects = [
  {
    name: 'Shell',
    description: <p className="text-skin-base mt-1">Writing bash but in Rust with the <a href="https://prefix.dev" className="text-blue-500 underline hover:text-blue-700">Prefix.dev</a> team.</p>,
    githubLink: 'https://github.com/prefix-dev/shell',
    startDate: '2024-08-25',
    endDate: null,
  },
  {
    name: 'PQtree library for python',
    description: (
      <p className="text-skin-base mt-1">
        A Python library for the PQtree data structure written in Rust.
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li className="text-skin-base">Implements the ideas from the paper <a href="https://www.sciencedirect.com/science/article/pii/S1571065308000838?via%3Dihub" className="text-blue-500 underline hover:text-blue-700">Planarity Algorithms via PQ-Trees (Extended Abstract)</a></li>
          <li className="text-skin-base">Used for checking planarity and solving C1P problem of a matrix</li>
          <li className="text-skin-base">A much faster alternative to <a href="https://doc.sagemath.org/html/en/reference/graphs/sage/graphs/pq_trees.html" className="text-blue-500 underline hover:text-blue-700">SageMath</a>!</li>
        </ul>
      </p>
    ),
    githubLink: 'https://github.com/prsabahrami/pqtree_rs',
    startDate: '2024-08-01',
    endDate: null,
  },
  {
    name: 'Videobox',
    description: (
      <p className="text-skin-base mt-1">
        Imagine you mix YouTube with Google Drive. You can specify when, how, and with whom you want your videos to be shared.
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li className="text-skin-base">Implemented in Golang with Next.js for the frontend</li>
          <li className="text-skin-base">Uses GCS multiupload to ensure large videos upload correctly even in case of network disconnections</li>
        </ul>
      </p>
    ),
    githubLink: 'https://github.com/prsabahrami/videobox',
    startDate: '2024-07-01',
    endDate: '2024-08-15',
  },
  {
    name: 'CourseCalendar',
    description: (
      <p className="text-skin-base mt-1">
        A calendar app that allows you to view the schedules, select the courses you want to take, and get the best schedule for you.
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li className="text-skin-base">Implemented using Django for the backend and Next.js for the frontend</li>
        </ul>
      </p>
    ),
    githubLink: 'https://github.com/armd04/CourseCalendar',
    startDate: '2024-02-01',
    endDate: '2024-06-01',
  },
  {
    name: 'UW ICPC Contest Downloader and Judge',
    description: (
      <p className="text-skin-base mt-1">
        A script to download, clean, and judge UW ICPC local contest data, allowing for virtual participation.
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li className="text-skin-base">Downloads, cleans, and organizes test data from UW ICPC local contests</li>
          <li className="text-skin-base">Implements a judge system for evaluating solutions</li>
          <li className="text-skin-base">Written in Python, utilizing libraries like requests and BeautifulSoup</li>
        </ul>
      </p>
    ),
    githubLink: 'https://github.com/prsabahrami/uw-icpc',
    startDate: '2024-02-15',
    endDate: '2024-04-28',
  },
];

export function LatestProjects() {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  }

  function toggleProject(index: number) {
    setExpandedProjects(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }

  return (
    <ul className="space-y-4">
      {projects.map((project, index) => (
        <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-skin-base flex items-center">
              {project.name}
              <span className="mx-2">|</span>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-base hover:text-blue-500"
              >
                <FaGithub />
              </a>
            </h3>
            <div className="flex items-center">
              <span className="text-sm text-skin-base mr-2">
                {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : 'Present'}
              </span>
              <button
                onClick={() => toggleProject(index)}
                className="text-skin-base hover:text-blue-500 focus:outline-none"
              >
                {expandedProjects.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </div>
          {expandedProjects.includes(index) && (
            <div className="mt-2">
              {project.description}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
