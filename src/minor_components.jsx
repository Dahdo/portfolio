import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import { LINK_LINKEDIN } from './constants';

function SkillTag(props) {
    return (
        <p className="font-semibold text-sm text-green-400 py-1 px-3 rounded-3xl bg-neutral-800">
            {props.value}</p>
    );
}

function ExperienceCard (props) {
    const {from, to, title, company, skills, description} = props;
    const skillsList = skills.map((skill, index) => <SkillTag key={index} value={skill}/>);
    
    return(
        <div className=" px-2 py-3 hover:bg-slate-800 hover:cursor-default hover:bg-opacity-40 hover:rounded-md text-gray-300 flex flex-col gap-4 md:flex-row">
            <p className=" md:w-1/3 whitespace-nowrap font-light text-neutral-400 uppercase">{from} <span className="text-xl">&minus;</span> {to}</p>
            <div className=" md:w-2/3 flex justify-start flex-col">
                <h3 className="text-gray-200 font-medium text-xl pb-2">{title} <span className="font-medium">•</span> <span className=" text-neutral-400 italic">{company}</span></h3>
                <p>{description}</p>
                <div className=" mt-2 flex gap-2 flex-wrap justify-start">
                    {skillsList}                
                </div>
            </div>
        </div>
    )
};

function ProjectCard (props) {
    const {title, skills, description, projectLink, imageLink} = props;
    const skillsList = skills.map((skill, index) => <SkillTag key={index} value={skill}/>);

    const openInNewTab = () => {
        window.open( projectLink, "_blank");
    }

    const [hoveredOver, setHoveredOver] = useState(false);
    const handleMouseEnter = () => {
        setHoveredOver(true);
    }

    const handleMouseLeave = () => {
        setHoveredOver(false);
    }
    
    return(
        <div className=" px-2 hover:cursor-pointer py-3 hover:bg-slate-800 hover:bg-opacity-40
         hover:rounded-md text-gray-300 flex flex-col gap-4 md:flex-row" 
         onClick={openInNewTab}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className=" w-2/3 md:w-1/3 rounded-md border-teal-800">
                <img src={imageLink} className="object-cover w-full rounded-md"/>
            </div>
            <div className=" md:w-1/2 flex justify-start flex-col">
                <div className={ hoveredOver ? "flex flex-row" : "flex flex-row"}>
                    <h3 className={ hoveredOver ? " text-green-400 font-medium text-xl pb-2" : "text-gray-200 font-medium text-xl pb-2"}>{title}</h3>
                    <BsArrowUpRight className={hoveredOver ? " text-green-400  mb-2 ml-3 text-md font-bold" : " mt-2 ml-1 text-md"} />
                </div>
                <p>{description}</p>
                <div className=" mt-2 flex gap-2 flex-wrap justify-start">
                    {skillsList}                
                </div>
            </div>
        </div>
    )
};

function ResumePreview() {

    const openInNewTab = () => {
        window.open( LINK_LINKEDIN, "_blank");
    }

    const [hoveredOver, setHoveredOver] = useState(false);
    const handleMouseEnter = () => {
        setHoveredOver(true);
    }

    const handleMouseLeave = () => {
        setHoveredOver(false);
    }

    return (
        <div className=" cursor-pointer w-fit flex flex-row p-5" onClick={openInNewTab}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className={ hoveredOver ? "text-xl font-bold border-b border-green-500" :
            "text-xl font-bold"}>View Full Résumé</p>
            <BsArrowRight className={ hoveredOver ? "ml-4 text-green-500 mt-2 text-l font-bold" : 
            "mt-2 ml-2 text-l font-bold"} />
        </div>
    )
};

function MobileSectionTitle(props) {
    return (
        <div className=" md:hidden bg-slate-800 mb-2">
            <h2 className=" tracking-widest text-center uppercase font-bold italic">{props.value}</h2>
        </div>
    )
};

export {ExperienceCard, ProjectCard, ResumePreview, MobileSectionTitle};