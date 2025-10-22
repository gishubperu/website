import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    { icon: 'hgi-linkedin-01', name: 'LinkedIn', color: 'hover:text-blue-400', url: 'https://www.linkedin.com/company/gishubperu/' },
    { icon: 'hgi-youtube', name: 'YouTube', color: 'hover:text-red-500', url: 'https://www.youtube.com/@gishub' },
    { icon: 'hgi-facebook-01', name: 'Facebook', color: 'hover:text-blue-400', url: 'https://www.facebook.com/gishub' },
    //{ icon: 'hgi-instagram', name: 'Instagram', color: 'hover:text-pink-500', url:  ''},
    //{ icon: 'hgi-github', name: 'Github', color: 'hover:text-blue-400', url: ''},
    {
      icon: 'hgi-whatsapp',
      name: "WhatsApp",
      color: "hover:text-green-400",
      url: "https://wa.me/51942643999",
    },
  ];

  const contactInfo = [
    {
      icon: 'hgi-location-01',
      title: 'Ubicación',
      content: 'Ica, Perú',
      gradient: 'from-emerald-500 to-blue-500'
    },
    {
      icon: 'hgi-whatsapp',
      title: "WhatsApp",
      content: '+51 942 643 999',
      url: "https://wa.me/51942643999",
    },
    {
      icon: 'hgi-mail-01',
      title: 'Email',
      content: 'info@gishub.pe',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'hgi-global',
      title: 'Website',
      content: 'www.gishub.pe',
      gradient: 'from-pink-500 to-emerald-500'
    }
  ];

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-blue-950/30"></div>
        {/* Animated Circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Contáctanos</span>
            </h2>
            <p className="text-xl text-gray-300">
              Estamos listos para transformar tus datos en soluciones inteligentes
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-400/50 transition-all group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all`}>
                    <i className={`hgi-stroke ${info.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">{info.title}</h3>
                  <p className="text-white font-medium">{info.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Main Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-3xl p-12 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Company Info */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <i className="hgi-stroke hgi-globe text-3xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">GISHUB</h3>
                      <p className="text-emerald-400">Innovación Geoespacial Inteligente</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 mb-8">
                    Especialistas en soluciones geoespaciales que integran SIG, IA, Teledetección, Machine Learning y Big Data.
                  </p>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold mb-4">Síguenos en redes sociales:</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.url}
                          target='blank'
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                        >
                          <i className={`hgi-stroke ${social.icon} text-xl`}></i>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl">
                    <img
                      src="https://public.youware.com/users-website-assets/prod/669a17a7-849d-40c3-bb37-d3b5dff16823/5d02858c62504a98ac72097a138d1f12.jpg"
                      alt="Satellite Technology"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
                  </div>
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-4 shadow-lg"
                  >
                    <i className="hgi-stroke hgi-ai-brain-05 text-4xl text-white"></i>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
