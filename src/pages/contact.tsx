import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Ваше имя"
            className="border p-2 w-full mb-4"
            required
          />
          <input
            type="email"
            placeholder="Ваш email"
            className="border p-2 w-full mb-4"
            required
          />
          <textarea
            placeholder="Ваше сообщение"
            className="border p-2 w-full mb-4"
            rows={5}
            required
          ></textarea>
          <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


