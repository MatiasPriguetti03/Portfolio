import {
    Github,
    Linkedin,
    Mail,
    ChevronRight,
    ExternalLink,
    GraduationCap,
    // Award,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import volandoUYImage from './assets/img/volandoUY.webp';
import cookieTypeImage from './assets/img/cookietype.webp';
import personalPhoto from './assets/img/PersonalPhoto.png';

export default function App() {
    const scope = useRef(null);

    useEffect(() => {
        const animateElements = async () => {
            const elements = [
                {
                    selector: scope.current,
                    styles: { opacity: 1 },
                    options: { duration: 500 },
                },
                {
                    selector: 'h1',
                    styles: { opacity: 1, transform: 'translateY(0)' },
                    options: { delay: 200, duration: 500 },
                },
                {
                    selector: 'h2',
                    styles: { opacity: 1, transform: 'translateY(0)' },
                    options: { delay: 100, duration: 500 },
                },
                {
                    selector: '.social-links',
                    styles: { opacity: 1, transform: 'translateY(0)' },
                    options: { delay: 100, duration: 500 },
                },
                {
                    selector: 'p',
                    styles: { opacity: 1, transform: 'translateY(0)' },
                    options: { delay: 100, duration: 500 },
                },
                {
                    selector: '.work-experience',
                    styles: { opacity: 1, transform: 'translateX(0)' },
                    options: { delay: 100, duration: 500 },
                },
                {
                    selector: '.education',
                    styles: { opacity: 1, transform: 'translateX(0)' },
                    options: { delay: 100, duration: 500 },
                },
                {
                    selector: '.minor-projects',
                    styles: { opacity: 1, transform: 'translateY(0)' },
                    options: { delay: 100, duration: 500 },
                },
                {
                    selector: '.contact-button',
                    styles: { opacity: 1, transform: 'translateY(0)' },
                    options: { delay: 100, duration: 500 },
                },
                {
                    selector: '.featured-projects',
                    styles: { opacity: 1, transform: 'scale(1)' },
                    options: { delay: 100, duration: 500 },
                },
                {
                    selector: '.about-me',
                    styles: { opacity: 1, transform: 'translateY(0)' },
                    options: { delay: 100, duration: 500 },
                },
            ];

            for (const element of elements) {
                const el =
                    element.selector && (element.selector as unknown) instanceof Element
                        ? (element.selector as unknown as Element)
                        : document.querySelector(element.selector as string);
                if (el instanceof Element) {
                    el.animate(element.styles, { ...element.options, fill: 'forwards' });
                }
            }
        };

        animateElements();
    }, []);

    const projects = [
        {
            title: 'CookieType',
            desc: 'A simple game where you have to type the words that appear on the screen before the time runs out. It has a time selector, language selector, and more.',
            img: { cookieTypeImage },
            gif: '@/img/cookieType.webp',
            repo: 'https://github.com/MatiasPriguetti03/cookieType',
            liveDemo: 'https://matiaspriguetti03.github.io/cookieType/',
            technologies: [
                'HTML',
                'CSS',
                'JavaScript',
                'Vite',
            ],
        },
    ];

    const currentProjects =
    {
        title: 'VolandoUY',
        desc: 'Full-stack web with a variety of features such as user authentication, a booking system, the ability to create and buy packages, check-in, etc.',
        img: { volandoUYImage },
        gif: '@/img/volandoUY.webp',
        repo: 'https://github.com/',
        // liveDemo: '#',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'Java',
            'JSP',
        ],
    };


    // const workExperience = [
    //     {
    //         title: 'Senior Full Stack Developer',
    //         company: 'Tech Innovators Inc.',
    //         period: '2021 - Present',
    //         description: 'Led development of scalable web applications using React and Node.js.',
    //     },
    // ];
    const education = [
        {
            title: 'Computer Engineering',
            institution: 'FING - UdelaR',
            year: '2021 - Today',
        },

    ];
    // const certifications = [
    //     {
    //         title: 'AWS Certified Developer',
    //         institution: 'Amazon Web Services',
    //         year: '2023',
    //     },
    // ];
    const otherProjects = [
        {
            title: 'Mercado Finger',
            desc: 'CLI application that simulates a marketplace where users can buy products, promotions, comment in products, etc.',
            repo: 'https://github.com/MatiasPriguetti03/Mercado-Finger',
            technologies: ['C++', 'Makefile', 'Valgrind'],
        },
    ];


    return (
        <div
            ref={scope}
            className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-400/90 to-orange-500/90 opacity-0"
        >
            <main className="flex-grow flex flex-col lg:flex-row">
                <div className="lg:w-2/6 bg-black/90 p-4 sm:p-8 flex flex-col justify-between overflow-y-auto ">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 opacity-0 translate-y-10">
                            Hi there, I'm
                            <br />
                            <span className='bg-gradient-to-r from-yellow-400 to-orange-600 text-transparent bg-clip-text font-bold text-4xl sm:text-5xl'>
                                Matías
                                Priguetti
                            </span>
                        </h1>
                        <h2 className="text-lg sm:text-xl lg:text-2xl text-white mb-4 opacity-0 translate-y-10">
                            Computer Engineer Student
                        </h2>
                        <div className="flex space-x-4 mb-6 social-links opacity-0 translate-y-10">
                            <a
                                href="https://github.com/MatiasPriguetti03"
                                aria-label="GitHub profile"
                                className="text-white hover:text-yellow-400 transition-colors duration-300"
                                target='_blank'
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mat%C3%ADas-priguetti-563b76237/"
                                aria-label="LinkedIn profile"
                                className="text-white hover:text-yellow-400 transition-colors duration-300"
                                target='_blank'
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:matiaspriguetti03@gmail.com"
                                aria-label="Email contact"
                                className="text-white hover:text-yellow-400 transition-colors duration-300"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                        <p className="text-gray-400 mb-6 opacity-0 translate-y-10 text-md max-w-[500px]">
                            With a <span className='text-yellow-400'>deep interest</span> in software development, I have <span className='text-yellow-400'>experience</span> in creating full-stack web applications and am <span className='text-yellow-400'>constantly</span> seeking opportunities to <span className='text-yellow-400'>grow and enhance</span> my knowledge.
                        </p>

                        {/* Work Experience */}
                        {/* <div className="mb-8 work-experience opacity-0 -translate-x-10">
                            <h3 className="group text-white mb-4">
                                <span className="text-2xl sm:text-3xl font-bold">
                                    <span className='text-yellow-400 group-hover:text-yellow-600/80 transition duration-300 ease-in-out'>.</span>
                                    WorkExperience
                                    <span className='text-yellow-400 group-hover:text-yellow-600/80 transition duration-300 ease-in-out'>()</span>
                                </span>
                            </h3>
                            <div className="relative pl-6">
                                {workExperience.map((job) => (
                                    <div key={job.title} className="mb-6 relative">
                                        <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-1.5 top-1.5 border border-black"></div>
                                        <div className="flex flex-col">
                                            <div className="text-yellow-400 text-sm mb-1">
                                                {job.period}
                                            </div>
                                            <h4 className="text-base sm:text-lg font-semibold text-white">
                                                {job.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm">{job.company}</p>
                                            <p className="text-gray-500 text-sm mt-1">
                                                {job.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div className="absolute top-2 bottom-0 left-0 w-px bg-gray-700"></div>
                            </div>
                        </div> */}

                        <div className="mb-8 education opacity-0 -translate-x-10">
                            <h3 className=" text-white mb-4">
                                <span className="group text-2xl sm:text-3xl font-bold">
                                    <span className='text-yellow-400 group-hover:text-[rgb(246,89,11)] transition duration-300 ease-in-out'>.</span>
                                    Education&Certifications
                                    <span className='text-yellow-400 group-hover:text-[rgb(246,89,11)] transition duration-300 ease-in-out'>()</span>
                                </span>
                            </h3>
                            <div className="space-y-4">
                                {education.map((edu) => (
                                    <div key={edu.title} className="flex items-center">
                                        <GraduationCap className="mr-2 text-yellow-400" />
                                        <div>
                                            <h4 className="font-bold text-white">{edu.title}</h4>
                                            <p className="text-sm text-gray-400">
                                                {edu.institution} | {edu.year}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {/* {certifications.map((cert) => (
                                    <div key={cert.title} className="flex items-center">
                                        <Award className="mr-2 text-yellow-400" />
                                        <div>
                                            <h4 className="font-bold text-white">{cert.title}</h4>
                                            <p className="text-sm text-gray-400">
                                                {cert.institution} | {cert.year}
                                            </p>
                                        </div>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <div className="mb-8 minor-projects opacity-0 translate-y-10">
                            <h3 className=" text-white mb-4">
                                <span className="group text-2xl sm:text-3xl font-bold">
                                    <span className='text-yellow-400 group-hover:text-[rgb(246,89,11)] transition duration-300 ease-in-out'>.</span>
                                    OtherProjects
                                    <span className='text-yellow-400 group-hover:text-[rgb(246,89,11)] transition duration-300 ease-in-out'>()</span>
                                </span>
                            </h3>
                            <div className="space-y-4">
                                {otherProjects.map((project) => (
                                    <div
                                        key={project.title}
                                        className="bg-gray-800 p-4 rounded-lg"
                                    >
                                        <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm mb-2">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-gray-700 text-white hover:bg-yellow-400/50 transition duration-300 ease-in-out text-xs px-2 py-1 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className='flex'>
                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center"
                                            >
                                                <Github className="mr-2" size={16} />
                                                View Repository
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-button opacity-0 translate-y-10">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Get in touch
                            </h3>
                            <div className='flex'>
                                <a href="mailto:matiaspriguetti03@gmail.com">
                                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg flex items-center hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105">
                                        Contact Me
                                        <ChevronRight className="ml-2" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-4/6 p-4 sm:p-8 overflow-y-auto">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                            Featured Projects
                        </h3>
                        <div className="flex flex-row sm:space-y-8 mb-12 featured-projects">
                            {projects.map((project, index) => (
                                <div
                                    key={project.title}
                                    className={`bg-white p-4 !mt-0 sm:p-6 rounded-lg shadow-lg w-full sm:w-1/2 ${index !== 0 ? 'ml-5' : ''}`}
                                >
                                    <h4 className=" mb-2">
                                        <span className="group text-2xl sm:text-3xl font-bold  text-black/90">
                                            <span className='text-[rgb(246,89,11)] group-hover:text-yellow-400 transition duration-300 ease-in-out'>.</span>
                                            {project.title}
                                            <span className='text-[rgb(246,89,11)] group-hover:text-yellow-400 transition duration-300 ease-in-out'>()</span>
                                        </span>
                                    </h4>
                                    <p className="text-gray-600 mb-4 text-pretty text">{project.desc}</p>
                                    <div className="relative h-48 sm:h-64 mb-4 overflow-hidden rounded-lg">
                                        <img
                                            src={typeof project.img === 'string' ? project.img : project.img.cookieTypeImage}
                                            alt={project.title}
                                            className="absolute top-0 w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className=" bg-gray-200 text-gray-800 hover:bg-yellow-400/70 transition duration-300 ease-in-out text-xs sm:text-sm px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                        >
                                            <Github className="mr-2" />
                                            View Repository
                                        </a>
                                        <a
                                            href={project.liveDemo}
                                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                            target="_blank"
                                        >
                                            <ExternalLink className="mr-2" />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>


                            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                                Currently Working On
                            </h3>
                            <div className="flex flex-col max-w-full w-full sm:space-y-8 mb-12">
                                <div
                                    key={currentProjects.title}
                                    className={`bg-white p-4 !mt-0 sm:p-6 rounded-lg shadow-lg w-full `}
                                >
                                    <h4 className=" mb-2">
                                        <span className="group text-2xl sm:text-3xl font-bold  text-black/90">
                                            <span className='text-[rgb(246,89,11)] group-hover:text-yellow-400 transition duration-300 ease-in-out'>.</span>
                                            {currentProjects.title}
                                            <span className='text-[rgb(246,89,11)] group-hover:text-yellow-400 transition duration-300 ease-in-out'>()</span>
                                        </span>
                                    </h4>
                                    <p className="text-gray-600 mb-4 text-pretty text">{currentProjects.desc}</p>
                                    <div className="relative h-48 sm:h-64 mb-4 overflow-hidden rounded-lg ">
                                        <img
                                            src={typeof currentProjects.img === 'string' ? currentProjects.img : currentProjects.img.volandoUYImage}
                                            alt={currentProjects.title}
                                            className="absolute top-0 w-full object-contain transition-transform duration-1000 ease-in-out hover:-translate-y-3.5"
                                        />
                                    </div>
                                    <div className="flex flex-wrap justify-between">
                                        <div className='flex flex-wrap gap-2'>
                                            {currentProjects.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className=" bg-gray-200 text-gray-800 hover:bg-yellow-400/70 transition duration-300 ease-in-out text-xs sm:text-sm px-3 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={currentProjects.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                        >
                                            <Github className="mr-2" />
                                            View Repository
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-8 about-me opacity-0 translate-y-10">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-2/3 pr-0 md:pr-4">
                                    <h3 className=" mb-4">
                                        <span className="group text-2xl sm:text-3xl font-bold  text-black/90">
                                            <span className='text-[rgb(246,89,11)] group-hover:text-yellow-400 transition duration-300 ease-in-out'>.</span>
                                            AboutMe
                                            <span className='text-[rgb(246,89,11)] group-hover:text-yellow-400 transition duration-300 ease-in-out'>()</span>
                                        </span>
                                    </h3>
                                    <p className="text-gray-700 mb-4 text-pretty text-md">
                                        As a student of Computer Engineering, I have a strong foundation in <span className='text-[rgb(246,89,11)]'>software development, data structures, algorithms, and computer systems</span>.  I'm passionate about <span className='text-[rgb(246,89,11)]'>creating clean and maintainable code</span>. Furthermore, I'm always looking for new opportunities to grow and expand my skill set. I'm currently seeking a software engineering internship to gain <span className='text-[rgb(246,89,11)]'>hands-on experience and further develop my technical skills</span>.
                                    </p>
                                    <p className="text-gray-700 mb-4 text-pretty text-md">
                                        I'm a <span className='text-[rgb(246,89,11)]'>quick learner</span> and a team player who enjoys <span className='text-[rgb(246,89,11)]'>collaborating with others</span> to solve problems and create innovative solutions. Likewise, I'm excited about the opportunity to work with a team of talented engineers and contribute to projects that make a <span className='text-[rgb(246,89,11)]'>positive impact on people's lives</span>.
                                    </p>
                                </div>
                                <div className="md:w-1/3 mt-4 md:mt-0 justify-items-center place-content-center ">
                                    <img
                                        src={personalPhoto}
                                        alt="Matías Priguetti"
                                        className="object-bottom relative w-auto  object-contain h-48 sm:h-64 rounded-lg overflow-hidden bg-gradient-to-b from-yellow-400/80 to-[rgb(246,89,11)]/80"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main >

            <footer className="bg-black text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p>
                                Developed with 🧡 by  <span className='hover:text-yellow-400 transition duration-300 ease-in-out'>Matías Priguetti</span>
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/MatiasPriguetti03"
                                className="hover:text-yellow-400 transition-colors duration-300"
                                target='_blank'
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mat%C3%ADas-priguetti-563b76237/"
                                className="hover:text-yellow-400 transition-colors duration-300"
                                target='_blank'
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:matiaspriguetti03@gmail.com"
                                className="hover:text-yellow-400 transition-colors duration-300"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
}