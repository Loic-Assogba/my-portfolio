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
        <div className="group flex items-center gap-4 min-w-[190px] sm:min-w-[220px] p-4 rounded-xl bg-gray-900/80 border border-white/10 hover:border-orange-400/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-800 group-hover:bg-orange-400/10 transition">
                {typeof skill.icon === 'string' ? (
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                    />
                ) : (
                    <Icon size={28} className="text-orange-400" />
                )}
            </div>

            <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                    {skill.name}
                </h3>

                <p className="text-gray-500 text-xs mt-1">{skill.category}</p>
            </div>

            <div className="ml-auto w-2 h-2 rounded-full bg-orange-400 opacity-50 group-hover:opacity-100 transition" />
        </div>
    );
}

export default function Skills() {
    const firstRow = skills;
    const secondRow = extraSkills;

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            id="competences"
            className="relative py-15 bg-[#05070b] overflow-hidden"
        >
            {/* PREMIÈRE LIGNE */}
            <div className="relative mb-3 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#05070b] to-transparent pointer-events-none" />

                <div className="absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#05070b] to-transparent pointer-events-none" />

                <div className="flex w-max gap-5 animate-skills-left hover:[animation-play-state:paused]">
                    {[...firstRow, ...firstRow].map((skill, index) => (
                        <SkillCard
                            key={`first-${skill.name}-${index}`}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>

            {/* DEUXIÈME LIGNE */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#05070b] to-transparent pointer-events-none" />

                <div className="absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#05070b] to-transparent pointer-events-none" />

                <div className="flex w-max gap-5 animate-skills-right hover:[animation-play-state:paused]">
                    {[...secondRow, ...secondRow].map((skill, index) => (
                        <SkillCard
                            key={`second-${skill.name}-${index}`}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>

            {/* STYLE DES ANIMATIONS */}
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
                    animation: skills-left 35s linear infinite;
                }

                .animate-skills-right {
                    animation: skills-right 25s linear infinite;
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
