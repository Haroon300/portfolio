import React from 'react'

export const Education = () => {
  return (
    <div>
<div className="w-full flex items-center justify-center h-10 bg-black text-white">
            Education
          </div>
          <div className="md:w-2/3">
            <EducationItem
              title="Bachelor"
              degree="Computer Science"
              institution="University Of Karachi UBIT"
              year="2024"
            />
            <EducationItem
              title="Diploma of Associate Engineer"
              degree="Software Technology"
              institution="Aligarh Institute of Technology"
              year="2021-2023"
            />
            <EducationItem
              title="Intermediate"
              degree="Pre Engineering"
              institution="Govt.Degree College Gulzar-E-Hijri"
              year="2019-2020"
            />
            <EducationItem
              title="Matric"
              degree="Computer Science"
              institution="Gulf Schooling System"
              year="2017-2018"
            />
          </div>        
    </div>
  )
}

const EducationItem = ({ title, degree, institution, year }) => {
    return (
      <div className="h-24 mt-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h2 className="text-lg">{degree}</h2>
        <p>{institution}</p>
        <p className='text-gray-500'>{year}</p>
      </div>
    );
  };