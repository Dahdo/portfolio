import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { useState } from 'react';

function SkillTag(props) {
    return (
        <p className="font-semibold text-sm text-green-400 py-1 px-3 rounded-3xl bg-neutral-800">
            {props.value}</p>
    );
}

function ExperienceCard (props) {
    const {from, to, title, company, skills, description} = props;
    const skillsList = skills.map((skill) => <SkillTag value={skill}/>);
    
    return(
        <div className=" p-3 hover:bg-slate-800 hover:bg-opacity-40 hover:rounded-md text-gray-300 flex flex-col gap-4 md:flex-row">
            <p className=" md:w-1/3 whitespace-nowrap font-light text-neutral-400 uppercase">{from} <span className="text-xl">&minus;</span> {to}</p>
            <div className=" md:w-2/3 flex justify-start flex-col">
                <h3 className="text-gray-200 font-medium text-xl pb-2">{title} <span className="font-medium">•</span> <span className=" text-neutral-400 italic">{company}</span></h3>
                <p className="text-md">{description}</p>
                <div className=" mt-2 flex gap-2 flex-wrap justify-start">
                    {skillsList}                
                </div>
            </div>
        </div>
    )
};

function ProjectCard (props) {
    
};

export {ExperienceCard, ProjectCard};