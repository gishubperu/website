import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: 'hgi-ai-laptop',
      title: 'Desarrollo de Software Geoespacial',
      description: 'Aplicaciones SIG para web, móvil y desktop',
      features: [
        'Monitoreo geográfico en tiempo real',
        'Integración con ERP, CRM, Oracle',
        'PostgreSQL/PostGIS'
      ],
      gradient: 'from-emerald-500 to-blue-500'
    },
    {
      icon: 'hgi-ai-brain-05',
      title: 'Inteligencia Artificial y Machine Learning',
      description: 'Modelos predictivos y análisis espacial',
      features: [
        'Clasificación automática de coberturas',
        'Automatización de flujos de trabajo',
        'Análisis predictivo geoespacial'
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'hgi-satellite-01',
      title: 'Teledetección y Análisis Satelital',
      description: 'Procesamiento de imágenes satelitales',
      features: [
        'Sentinel, Landsat, MODIS',
        'Índices NDVI, NDWI, NBR, SAVI',
        'Monitoreo agrícola y forestal'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'hgi-cloud-server',
      title: 'Infraestructura de Datos Espaciales (IDE)',
      description: 'Implementación de nodos IDE',
      features: [
        'GeoServer, MapServer, QGIS Server',
        'Estándares OGC (WMS, WFS, WCS)',
        'Catálogos de metadatos'
      ],
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: 'hgi-database-01',
      title: 'Bases de Datos Espaciales',
      description: 'Diseño y optimización de bases espaciales',
      features: [
        'Gestión de Big Geodata',
        'Consultas avanzadas',
        'Optimización de rendimiento'
      ],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: 'hgi-artificial-intelligence-05',
      title: 'Consultoría y Asesoría',
      description: 'Diseño de arquitecturas geoespaciales',
      features: [
        'Estrategias de transformación digital',
        'Auditoría de sistemas SIG',
        'Capacitación especializada'
      ],
      gradient: 'from-orange-500 to-emerald-500'
    }
  ];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 to-blue-950/30"></div>
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
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones geoespaciales integrales con tecnología de vanguardia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 h-full hover:border-emerald-400/50 transition-all overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>

                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-500/50 transition-all`}
                    >
                      <i className={`hgi-stroke ${service.icon} text-4xl text-white`}></i>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="hgi-stroke hgi-location-check-01 text-emerald-400 mr-2 mt-1 flex-shrink-0"></i>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-emerald-500/10 to-transparent group-hover:h-full transition-all duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
