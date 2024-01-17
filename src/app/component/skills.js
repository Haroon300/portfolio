import React from "react";

const Skills = () => {
    return (
      <div className="flex bg-white bg-opacity-30 py-16">
        <div className="max-w-md p-8 ml-10 bg-gray-100 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-semibold mb-6">Skills</h1>
          <div className="grid grid-cols-2 gap-4">
            <SkillItem label="Next.js" />
            <SkillItem label="React" />
            <SkillItem label="PHP" />
            <SkillItem label="C#" />
            <SkillItem label="Firebase" />
            <SkillItem label="MongoDB" />
            <SkillItem label="MYSQL" />
            <SkillItem label="HTML" />
            <SkillItem label="CSS" />
          </div>
        </div>
      </div>
    );
  };
  
  const SkillItem = ({ label }) => {
    return (
      <div className="p-4 bg-gray-200 rounded-md">
        <p>{label}</p>
      </div>
    );
  };

  export default Skills;