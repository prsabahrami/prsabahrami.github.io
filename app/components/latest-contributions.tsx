import Link from 'next/link'
import { FaGithub, FaCodeBranch } from 'react-icons/fa'

const contributions = [
    {
    name: 'Added upstream miette support to pest',
    description: 'Implemented enhanced error handling and reporting capabilities with the addition of the miette dependency. Added a new method to transform errors into a miette::Diagnostic for improved diagnostics.',
    prLink: 'https://github.com/pest-parser/pest/pull/1038',
    linesContributed: 93,
    },
    {
    name: 'Adding self-extracting file as an optional feature',
    description: 'Implementing a self-extracting file as an optional feature for pixi-pack similar to how conda-constructor does it.',
    prLink: 'https://github.com/Quantco/pixi-pack/pull/31',
    linesContributed: 843,
    },
  {
    name: 'Add support for match ... case',
    description: 'Implemented match ... case support by converting to nested ast.If statements using python\'s ast module.',
    prLink: 'https://github.com/Quantco/polarify/pull/60',
    linesContributed: 2241,
  },
  {
    name: 'Adding support for numpy 2',
    description: 'Implemented support for numpy 2.0.0, addressing changes in casting behavior and promotion rules',
    prLink: 'https://github.com/Quantco/slim-trees/pull/132',
    linesContributed: 326,
  },
];

export function LatestContributions() {
  return (
    <ul className="space-y-4">
      {contributions.map((contribution, index) => (
        <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-skin-base flex items-center">
              {contribution.name}
              <span className="mx-2">|</span>
              <Link
                href={contribution.prLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-skin-base hover:text-blue-500"
              >
                <FaGithub />
              </Link>
            </h3>
            <span className="text-sm text-skin-base flex items-center">
              <FaCodeBranch className="mr-1" />
              {contribution.linesContributed} lines
            </span>
          </div>
          <p className="text-skin-base mt-1">{contribution.description}</p>
        </li>
      ))}
    </ul>
  );
}