import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xovelrrj");

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-slate-900 py-20" aria-label="Section de contact">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Me contacter</h2>
            <p className="text-green-400 mt-4 max-w-2xl mx-auto text-xl font-medium">
              Merci pour votre message !
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-slate-900 py-20" aria-label="Section de contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Me contacter</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Une question, une proposition de projet ou simplement envie d'échanger ? N'hésitez pas à me contacter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-slate-800 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <fieldset className="space-y-4">
                <legend className="sr-only">Formulaire de contact</legend>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
              </fieldset>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Coordonnées</h3>
            <address className="not-italic space-y-6">
              <div className="flex items-start">
                <Mail className="text-emerald-500 mr-4 mt-1" size={20} aria-hidden="true" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:pro.gnahiet@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    pro.gnahiet@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Linkedin className="text-emerald-500 mr-4 mt-1" size={20} aria-hidden="true" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/any-gnahiet-075339234/" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    https://www.linkedin.com/in/any-gnahiet-075339234/
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Github className="text-emerald-500 mr-4 mt-1" size={20} aria-hidden="true" />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a href="https://github.com/eosfel97" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    https://github.com/eosfel97
                  </a>
                </div>
              </div>
            </address>
            <div className="mt-10">
              <h4 className="font-medium mb-4">Disponibilité</h4>
              <p className="text-gray-400 mb-4">
                Je suis actuellement disponible pour des projets freelance ou des opportunités de collaboration à long terme.
              </p>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-green-400">Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
