import React from "react";
import { FaLinkedin,FaGithub,FaHtml5,FaCss3Alt,FaJs,FaBootstrap } from "react-icons/fa";
import {SiTailwindcss, SiReact, SiPhp, SiLinux} from "react-icons/si";


const Body = () => {

    return (
        <>
        <div className="px-5 py-72 text-white mx-auto">
            <h1 className="text-4xl">ARVIN JOHN A. PAPA</h1>
            <p className="py-2">A web developer eager to learn and apply new technologies to create web applications that suite your needs!</p>
            <div className="flex text-4xl text-blue-600 py-4">
                <span className="mx-1"><FaLinkedin></FaLinkedin></span>
                <span className="mx-1"><FaGithub></FaGithub></span>
            </div>  
        </div>

        <div className=" text-blue-600 text-center my-10">
            <h1 className="text-4xl py-10 text-white">SKILLS</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-1 px-5 mx-auto">
                <div className="text-4xl p-5 flex place-content-center ">
                    <p>HTML</p><span className="my-auto mx-2"><FaHtml5></FaHtml5></span>
                </div>
                <div className="text-4xl p-5 flex place-content-center ">
                    <p>CSS</p><span className="my-auto mx-2"><FaCss3Alt></FaCss3Alt></span>
                </div>
                <div className="text-4xl p-5 flex place-content-center ">
                    <p>JavaScript</p><span className="my-auto mx-2"><FaJs></FaJs></span>
                </div>
                <div className="text-4xl p-5 flex place-content-center ">
                    <p>Bootstrap</p><span className="my-auto mx-2"><FaBootstrap></FaBootstrap></span>
                </div>
                <div className="text-4xl p-5 flex place-content-center ">
                    <p>Tailwind</p><span className="my-auto mx-2"><SiTailwindcss></SiTailwindcss></span>
                </div>
                <div className="text-4xl p-5 flex place-content-center ">
                    <p>React</p><span className="my-auto mx-2"><SiReact></SiReact></span>
                </div>
                <div className="text-4xl p-5 flex place-content-center ">
                    <p>PHP</p><span className="my-auto mx-2"><SiPhp></SiPhp></span>
                </div>
                <div className="text-4xl p-5 flex place-content-center ">
                    <p>Linux</p><span className="my-auto mx-2"><SiLinux></SiLinux></span>
                </div>
                

            </div>
        </div>

        <div className=" text-white my-10 px-5">
            <h1 className="text-4xl py-10 text-white text-center">EXPERIENCE</h1>
                <div className="grid sm:grid-cols-3 my-6">
                    <div className="col-span-2">
                        <h2 className="text-2xl">Technical Support Representative</h2>
                        <h3 className="text-l">Naxum Online Marketing Services</h3>
                        <p className="my-2">Troubleshoots client requests and assigns tasks to team members. I also facilitate the communication between the development team and the clients. We also do the Quality Assurance of our fixes to ensure that they meet the requirements of the clients.</p>
                    </div>
                    <div className="col-span-1 text-center content-center my-2">
                        <h3 className="my-auto">July 2018 - January 2019</h3>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 my-6">
                    <div className="col-span-2">
                        <h2 className="text-2xl">Linux System Administrator</h2>
                        <h3 className="text-l">Naxum Online Marketing Services</h3>
                        <p className="my-2">Ensures system uptime and maintains database backups. Works closely with the senior system administrator in rolling out fixes and also providing user access to team members. I also do domain and SSL management. WordPress Blog hosting management.</p>
                    </div>
                    <div className="col-span-1 text-center content-center my-2">
                        <h3 className="my-auto">February 2019 - May 2021</h3>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 my-6">
                    <div className="col-span-2">
                        <h2 className="text-2xl">Management and Information System Staff</h2>
                        <h3 className="text-l">Department of Agrarian Reform</h3>
                        <p className="my-2">Developing and maintaining the department's project management information systems and databases and providing technical support to staff in the use of project management software and tools.</p>
                    </div>
                    <div className="col-span-1 text-center content-center my-2">
                        <h3 className="my-auto">February 2019 - May 2021</h3>
                    </div>
                </div>
        </div>



        </>
        
    )
}


export default Body;