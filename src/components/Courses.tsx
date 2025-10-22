
import { motion } from 'framer-motion';

const Courses = () => {
  const courses = [
    {
      icon: 'hgi-earth',
      title: 'SIG aplicado al medio ambiente',
      topics: ['Recursos naturales', 'Análisis ambiental', 'Gestión territorial'],
      level: 'Intermedio'
    },
    {
      icon: 'hgi-ai-programming',
      title: 'Análisis geoespacial con Python',
      topics: ['QGIS', 'ArcGIS', 'Geopandas', 'Automatización'],
      level: 'Avanzado'
    },
    {
      icon: 'hgi-satellite-01',
      title: 'Teledetección y Google Earth Engine',
      topics: ['Procesamiento satelital', 'Índices espectrales', 'Cloud computing'],
      level: 'Avanzado'
    },
    {
      icon: 'hgi-ai-brain-05',
      title: 'Machine Learning Geoespacial',
      topics: ['Clasificación', 'Predicción', 'Deep learning'],
      level: 'Avanzado'
    },
    {
      icon: 'hgi-database-01',
      title: 'Bases de datos espaciales',
      topics: ['PostGIS', 'Oracle Spatial', 'Optimización'],
      level: 'Intermedio'
    },
    {
      icon: 'hgi-cloud-server',
      title: 'Implementación de nodos IDE',
      topics: ['GeoServer', 'QGIS Server', 'Estándares OGC'],
      level: 'Avanzado'
    },
    {
      icon: 'hgi-chart-bubble-01',
      title: 'Análisis de Big Data geoespacial',
      topics: ['Spark', 'Hadoop', 'Procesamiento distribuido'],
      level: 'Experto'
    }
  ];

  return (
    <section id="cursos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Cursos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              En GISHUB, convertimos la experiencia en aprendizaje
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold text-emerald-400 italic"
            >
              "Aprende con quienes aplican lo que enseñan."
            </motion.p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/50 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all`}>
                    <i className={`hgi-stroke ${course.icon} text-2xl text-white`}></i>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                    {course.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">{course.title}</h3>

                {/* Topics */}
                <div className="space-y-2">
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center">
                      <i className="hgi-stroke hgi-location-check-01 text-emerald-400 text-sm mr-2"></i>
                      <span className="text-sm text-gray-400">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modalities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Modalidades de Estudio</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'hgi-home-01', title: 'Presencial', desc: 'Clases prácticas en nuestras instalaciones' },
                  { icon: 'hgi-ai-laptop', title: 'Virtual', desc: 'Plataforma online con acompañamiento' },
                  { icon: 'hgi-user-roadside', title: 'Corporativa', desc: 'Programas in-house personalizados' }
                ].map((mode, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <i className={`hgi-stroke ${mode.icon} text-3xl text-white`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{mode.title}</h4>
                    <p className="text-sm text-gray-400">{mode.desc}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-emerald-400 font-medium mt-8">
                Enfoque práctico con certificación
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
