import { motion } from 'framer-motion';

const Vision = () => {
  const values = [
    {
      icon: 'hgi-ai-innovation-01',
      title: 'Innovación',
      description: 'Aplicamos tecnología de vanguardia'
    },
    {
      icon: 'hgi-chart-line-data-01',
      title: 'Precisión',
      description: 'Garantizamos calidad en los datos'
    },
    {
      icon: 'hgi-user-roadside',
      title: 'Colaboración',
      description: 'Trabajamos con nuestros clientes y aliados'
    },
    {
      icon: 'hgi-sustainable-energy',
      title: 'Compromiso',
      description: 'Enfocamos esfuerzos en resultados sostenibles'
    },
    {
      icon: 'hgi-ai-learning',
      title: 'Aprendizaje continuo',
      description: 'Compartimos conocimiento y experiencia'
    }
  ];

  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-emerald-950/50"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-emerald-500/10 rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visión y <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Valores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <i className="hgi-stroke hgi-flag-01 text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">Visión</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ser líderes en innovación geoespacial en Latinoamérica, integrando tecnología, datos e inteligencia territorial para una gestión sostenible.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/30 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                  <i className="hgi-stroke hgi-navigation-04 text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Misión</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Proporcionar soluciones geoespaciales que impulsen la transformación digital y el desarrollo sostenible.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-bold text-white text-center mb-12">Nuestros Valores</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 text-center hover:border-emerald-400/50 transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all">
                    <i className={`hgi-stroke ${value.icon} text-3xl text-white`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
