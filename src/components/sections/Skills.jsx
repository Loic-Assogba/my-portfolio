// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ShieldCheck, Network, Database, Code2 } from 'lucide-react';

const skills = [
    {
        name: 'HTML5',
        category: 'Frontend',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
        name: 'CSS3',
        category: 'Frontend',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
        name: 'JavaScript',
        category: 'Frontend',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
        name: 'React',
        category: 'Frontend',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        name: 'Next.js',
        category: 'Frontend',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
        name: 'PHP',
        category: 'Backend',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
        name: 'MySQL',
        category: 'Backend',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
        name: 'Git',
        category: 'Outils',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
        name: 'GitHub',
        category: 'Outils',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
        name: 'VS Code',
        category: 'Outils',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
];

const extraSkills = [
    {
        name: 'Cybersécurité',
        category: 'Sécurité',
        icon: ShieldCheck,
    },
    {
        name: 'Réseaux informatiques',
        category: 'Réseaux',
        icon: Network,
    },
    {
        name: 'Base de données',
        category: 'Backend',
        icon: Database,
    },
    {
        name: 'Développement Web',
        category: 'Web',
        icon: Code2,
    },
];

function SkillCard({ skill }) {
    const Icon = skill.icon;

    return (
        <div className="group flex items-center gap-3 min-w-[175px] sm:min-w-[195px] px-3 py-3 transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                {typeof skill.icon === 'string' ? (
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                    />
                ) : (
                    <Icon
                        size={28}
                        className="text-orange-400 transition-transform duration-300 group-hover:scale-110"
                    />
                )}
            </div>

            <div>
                <h3 className="text-white font-medium text-sm sm:text-base group-hover:text-orange-400 transition-colors">
                    {skill.name}
                </h3>

                <p className="text-gray-400 text-xs mt-1">{skill.category}</p>
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            id="competences"
            className="relative py-12 overflow-hidden"
        >
            {/* PREMIÈRE LIGNE */}
            <div className="relative mb-3 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-transparent to-transparent pointer-events-none" />

                <div className="flex w-max gap-5 animate-skills-left hover:[animation-play-state:paused]">
                    {[...skills, ...skills].map((skill, index) => (
                        <SkillCard
                            key={`first-${skill.name}-${index}`}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>

            {/* DEUXIÈME LIGNE */}
            <div className="relative overflow-hidden">
                <div className="flex w-max gap-5 animate-skills-right hover:[animation-play-state:paused]">
                    {[...extraSkills, ...extraSkills].map((skill, index) => (
                        <SkillCard
                            key={`second-${skill.name}-${index}`}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>

            {/* ANIMATIONS */}
            <style>{`
                @keyframes skills-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                @keyframes skills-right {
                    from {
                        transform: translateX(-50%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                .animate-skills-left {
                    animation: skills-left 40s linear infinite;
                }

                .animate-skills-right {
                    animation: skills-right 28s linear infinite;
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-skills-left,
                    .animate-skills-right {
                        animation: none;
                    }
                }
            `}</style>
        </motion.section>
    );
}
