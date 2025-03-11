import React from "react";
import {
    FaJs, FaJava, FaPython, FaReact, FaNodeJs, FaGit, FaSlack, FaDatabase
} from "react-icons/fa";
import {
    SiC, SiHaskell, SiNumpy, SiFlask, SiVite,
    SiExpress, SiPostgresql, SiMongodb, SiMysql, SiCloudinary
} from "react-icons/si";
import { DiProlog } from "react-icons/di";

function Technology() {
    const technologies = [
        { name: "JavaScript", icon: <FaJs size={50} /> },
        { name: "Java", icon: <FaJava size={50} /> },
        { name: "C", icon: <SiC size={50} /> },
        { name: "Python", icon: <FaPython size={50} /> },
        { name: "Haskell", icon: <SiHaskell size={50} /> },
        { name: "Prolog", icon: <DiProlog size={50} /> },
        { name: "Numpy", icon: <SiNumpy size={50} /> },
        { name: "Flask", icon: <SiFlask size={50} /> },
        { name: "React", icon: <FaReact size={50} /> },
        { name: "Node.js", icon: <FaNodeJs size={50} /> },
        { name: "Vite", icon: <SiVite size={50} /> },
        { name: "Express", icon: <SiExpress size={50} /> },
        { name: "Cloudinary", icon: <SiCloudinary size={50} /> },
        { name: "SQL", icon: <FaDatabase size={50} /> },
        { name: "NoSQL", icon: <FaDatabase size={50} /> },
        { name: "MySQL", icon: <SiMysql size={50} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={50} /> },
        { name: "MongoDB", icon: <SiMongodb size={50} /> },
        { name: "Git", icon: <FaGit size={50} /> },
        { name: "Slack", icon: <FaSlack size={50} /> },
    ];

    return (
        <div className="p-10 rounded-lg">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center group text-center relative transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-2.5"
                    >
                        {tech.icon}
                        <p className="mt-2 text-center text-sm opacity-0 transform translate-y-2.5 transition-all duration-300 ease-in-out text-background group-hover:opacity-100 group-hover:translate-y-0">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technology;
