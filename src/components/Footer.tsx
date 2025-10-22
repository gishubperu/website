import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-slate-900 to-black py-12 border-t border-emerald-500/20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        {/* Logo and Tagline */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
                                <i className="hgi-stroke hgi-globe text-2xl text-white"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">GISHUB S.A.C.</h3>
                                <p className="text-sm text-emerald-400">Innovación Geoespacial Inteligente</p>
                            </div>
                        </motion.div>

                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} GISHUB S.A.C. | Todos los derechos reservados
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Ica, Perú
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex space-x-6"
                        >
                            {[
                                { icon: 'hgi-mail-01', href: 'mailto:info@gishub.pe' },
                                { icon: 'hgi-mobile-programming-02', href: 'tel:+51942643999' },
                                { icon: 'hgi-global', href: 'https://www.gishub.pe' },
                                { icon: 'hgi-whatsapp', href: 'https://wa.me/51942643999' }
                            ].map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    target='blank'
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/20 transition-all"
                                >
                                    <i className={`hgi-stroke ${link.icon} text-lg`}></i>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Animated Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-8 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent origin-center"
                    ></motion.div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
