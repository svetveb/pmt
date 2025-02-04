import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="flex flex-col lg:flex-row items-center w-full py-20">
      <div className="max-w-2xl mb-8 lg:w-1/2 mx-auto">
        <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 text-center lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
          Свяжитесь с нами
        </h2>
        <form className="max-w-md mx-auto mt-8">
          <input
            type="text"
            placeholder="Ваше имя"
            className="border p-3 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
            required
          />
          <input
            type="email"
            placeholder="Ваш email"
            className="border p-3 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
            required
          />
          <textarea
            placeholder="Ваше сообщение"
            className="border p-3 w-full mb-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Отправить
          </button>
        </form>
      </div>

      <div className="flex justify-center lg:w-1/2">
        <div className="mx-auto flex max-w-lg items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Если у вас есть вопросы, не стесняйтесь обращаться к нам!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
