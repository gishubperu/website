import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'Equipo Geográfico',
      role: 'Análisis Territorial',
      icon: 'hgi-maps-global-01',
      color: 'from-emerald-500 to-blue-500'
    },
    {
      name: 'Equipo de Ingeniería',
      role: 'Desarrollo de Software',
      icon: 'hgi-ai-programming',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Equipo de Data Science',
      role: 'Ciencia de Datos',
      icon: 'hgi-chart-bubble-01',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Equipo de Teledetección',
      role: 'Análisis Satelital',
      icon: 'hgi-satellite-01',
      color: 'from-pink-500 to-emerald-500'
    }
  ];

  return (
    <section id="equipo" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>

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
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Equipo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestro equipo está compuesto por especialistas en geografía, ingeniería, análisis SIG, ciencia de datos y programación, comprometidos con la innovación, la investigación y la enseñanza continua.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 text-center hover:border-emerald-400/50 transition-all">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-500/50 transition-all`}
                    >
                      <i className={`hgi-stroke ${member.icon} text-5xl text-white`}></i>
                    </motion.div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-2xl opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-emerald-400 font-medium mb-4">{member.role}</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/20">
              <img
                src="https://public.youware.com/users-website-assets/prod/669a17a7-849d-40c3-bb37-d3b5dff16823/fb87069055744769a88867a819a02139.jpg"
                alt="GISHUB Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center pb-8">
                <p className="text-white text-2xl font-bold">Equipo Multidisciplinario GISHUB</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
