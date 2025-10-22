import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Nosotros</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/20">
                <img
                  src="https://public.youware.com/users-website-assets/prod/669a17a7-849d-40c3-bb37-d3b5dff16823/8cea4fadcd59440ab3e6829c6d734111.jpg"
                  alt="GIS Technology"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
              </div>
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <i className="hgi-stroke hgi-artificial-intelligence-05 text-4xl text-white"></i>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-emerald-400 font-semibold">GISHUB</span> es una empresa peruana especializada en el tratamiento, análisis y visualización de datos geoespaciales.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Contamos con un equipo multidisciplinario de profesionales en geografía, ingeniería, programación, ciencia de datos y teledetección, con experiencia en minería, medio ambiente, agricultura, energía, recursos hídricos, desarrollo urbano y cambio climático.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nuestra experiencia incluye la implementación de sistemas georreferenciados, la creación de nodos IDE, y la integración de bases de datos espaciales y alfanuméricas.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-2xl p-8 mt-8"
              >
                <p className="text-xl font-semibold text-emerald-400 italic">
                  "Combinamos tecnología, conocimiento y visión para generar soluciones geoespaciales de impacto."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
