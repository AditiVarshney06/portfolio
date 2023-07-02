import React from 'react'
import res from './resume.docx';
const Title = ({des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des} </h1>
      <h4><a href='res' download="res">Download</a></h4>
    </div>
  );
}

export default Title