import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">О компании</h1>
        <p className="mb-8 text-lg text-gray-700">
          текст
        </p>
        <div className="mx-auto flex max-w-lg items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div>
            <div className="text-xl font-medium text-black dark:text-white">текст</div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              текст
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
