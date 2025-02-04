import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center w-full py-20">
      <div className="max-w-2xl mb-8 lg:w-1/2">
        <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl xl:text-6xl dark:text-white">
          О компании
        </h1>
        <p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
          текст
        </p>
      </div>

      <div className="flex justify-center lg:justify-end lg:w-1/2">
        <div className="mx-auto flex max-w-lg items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              картинка
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {/* Дополнительный текст */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
