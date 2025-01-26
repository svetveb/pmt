import React from 'react';

const About = () => {
  return (
    <div className="ml-6 pt-1">
      <h1 className="text-lg font-semibold">О компании</h1>
      <p>Здесь будет информация о компании.</p>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-gray p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div className="text-xl font-medium text-black dark:text-white">О компании</div>
        </div>
      </div>
    </div>
  );
};

export default About;

