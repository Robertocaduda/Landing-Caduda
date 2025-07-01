"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Code,
  Briefcase,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Star,
  CheckCircle,
  Plus,
  Minus,
} from "lucide-react"
import { useState } from "react"

export default function InstitutoCadudaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const partners = [
    { name: "Anhanguera", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Estácio", logo: "/placeholder.svg?height=60&width=120" },
    { name: "UniDomBosco", logo: "/placeholder.svg?height=60&width=120" },
    { name: "UniCV", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CPET", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const courseCategories = [
    {
      title: "Profissionalizantes",
      icon: Code,
      courses: ["Desenvolvedor Web", "Social Media Pro", "Cuidador de Idosos", "Marketing Digital"],
      color: "bg-[#0A4D8C]",
    },
    {
      title: "Técnicos",
      icon: Briefcase,
      courses: ["Técnico em Administração", "Logística", "Estética", "Informática"],
      color: "bg-[#37AADD]",
    },
    {
      title: "Graduação",
      icon: GraduationCap,
      courses: ["Engenharia de Software", "Nutrição", "Psicopedagogia", "Administração"],
      color: "bg-[#F5A623]",
    },
    {
      title: "Pós-Graduação",
      icon: Award,
      courses: ["Direito Digital", "Saúde Coletiva", "Tecnologia da Informação", "Gestão"],
      color: "bg-[#0A4D8C]",
    },
    {
      title: "Cursos Livres",
      icon: BookOpen,
      courses: ["Marketing Digital", "Psicologia", "Design Gráfico", "Idiomas"],
      color: "bg-[#37AADD]",
    },
    {
      title: "EJA",
      icon: Users,
      courses: ["Módulo Administrativo", "Marketing", "Matemática", "Português"],
      color: "bg-[#F5A623]",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      course: "Marketing Digital",
      photo: "/placeholder.svg?height=80&width=80",
      text: "O Instituto Caduda transformou minha carreira! O suporte é excepcional e os professores são muito qualificados.",
    },
    {
      name: "João Santos",
      course: "Técnico em Administração",
      photo: "/placeholder.svg?height=80&width=80",
      text: "Excelente metodologia de ensino. Consegui me formar e já estou trabalhando na área. Recomendo!",
    },
    {
      name: "Ana Costa",
      course: "Graduação em Nutrição",
      photo: "/placeholder.svg?height=80&width=80",
      text: "A flexibilidade do EAD me permitiu conciliar estudos com trabalho. Hoje sou uma nutricionista realizada!",
    },
    {
      name: "Carlos Oliveira",
      course: "Pós-Graduação em Direito",
      photo: "/placeholder.svg?height=80&width=80",
      text: "Professores experientes e conteúdo atualizado. O Instituto Caduda é referência em educação de qualidade.",
    },
    {
      name: "Lucia Ferreira",
      course: "Cuidador de Idosos",
      photo: "/placeholder.svg?height=80&width=80",
      text: "Curso muito prático e humanizado. Me preparou completamente para atuar na área com segurança e competência.",
    },
  ]

  const faqs = [
    {
      question: "Como funciona o ensino à distância (EAD)?",
      answer:
        "Nosso EAD oferece flexibilidade total com aulas online, material didático digital, suporte pedagógico 24h e encontros virtuais com professores. Você estuda no seu ritmo, quando e onde quiser.",
    },
    {
      question: "Os certificados são reconhecidos pelo MEC?",
      answer:
        "Sim! Todos os nossos cursos técnicos, graduação e pós-graduação são reconhecidos pelo MEC. Os cursos livres e profissionalizantes seguem as normas do mercado de trabalho.",
    },
    {
      question: "Qual o prazo para conclusão dos cursos?",
      answer:
        "Varia conforme o curso: Livres (3-6 meses), Profissionalizantes (6-12 meses), Técnicos (18-24 meses), Graduação (4-5 anos), Pós-graduação (12-18 meses).",
    },
    {
      question: "Existe suporte pedagógico?",
      answer:
        "Sim! Oferecemos suporte pedagógico completo com tutores especializados, plantão de dúvidas, fóruns de discussão e atendimento personalizado.",
    },
    {
      question: "Como são as avaliações?",
      answer:
        "As avaliações são realizadas online através da nossa plataforma, com provas, trabalhos práticos e atividades interativas. Tudo pensado para facilitar seu aprendizado.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <img src="/logo-instituto-caduda.png" alt="Instituto Caduda" className="h-12 w-auto" />
            </motion.div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-8">
              {["Sobre", "Cursos", "EJA", "Contato"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-[#0A4D8C] font-medium transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            {/* Menu Mobile */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Menu Mobile Expandido */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <nav className="flex flex-col space-y-4">
                {["Sobre", "Cursos", "EJA", "Contato"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-gray-700 hover:text-[#0A4D8C] font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-[#0A4D8C] to-[#37AADD] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Educação de Qualidade que <span className="text-[#F5A623]">Transforma Vidas</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl mb-8 text-blue-100 leading-relaxed">
                Mais de 2.000 opções de cursos presenciais e EAD, com suporte incomparável e metodologia comprovada
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("cursos")}
                  className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0A4D8C] font-semibold px-8 py-4 rounded-xl text-lg"
                >
                  Conheça Nossos Cursos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contato")}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0A4D8C] font-semibold px-8 py-4 rounded-xl text-lg"
                >
                  Fale com um Consultor
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Ensino à Distância"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#F5A623]/20 blur-3xl"></div>
      </section>

      {/* Missão & Parcerias */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0A4D8C] mb-4">Nossas Parcerias</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as melhores instituições de ensino do país para oferecer educação de excelência
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção do Fundador */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Roberto Caduda"
                className="w-80 h-80 rounded-full mx-auto lg:mx-0 shadow-2xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-[#0A4D8C] mb-6">Roberto Caduda</h2>
              <h3 className="text-xl text-[#F5A623] font-semibold mb-6">Fundador e Diretor Pedagógico</h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Com mais de 30 anos dedicados à educação, Roberto Caduda iniciou sua jornada aos 14 anos, movido pela
                  paixão de transformar vidas através do conhecimento.
                </p>
                <p>
                  Ex-Secretário Municipal de Educação e professor de Língua Portuguesa, Roberto acumula vasta
                  experiência em gestão educacional e metodologias de ensino inovadoras.
                </p>
                <p>
                  Sua visão de democratizar o acesso à educação de qualidade deu origem ao Instituto Caduda, que hoje é
                  referência em ensino presencial e à distância.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-[#0A4D8C]">
                  <Award className="h-5 w-5" />
                  <span className="font-medium">30+ anos de experiência</span>
                </div>
                <div className="flex items-center space-x-2 text-[#0A4D8C]">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Ex-Secretário de Educação</span>
                </div>
                <div className="flex items-center space-x-2 text-[#0A4D8C]">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">Professor de Português</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grade de Cursos */}
      <section id="cursos" className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A4D8C] mb-4">Nossos Cursos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 2.000 opções de cursos para impulsionar sua carreira e realizar seus sonhos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                  <div className={`${category.color} p-6 text-white`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <category.icon className="h-8 w-8" />
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {category.courses.map((course, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#37AADD] flex-shrink-0" />
                          <span className="text-gray-700">{course}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-[#0A4D8C] hover:bg-[#0A4D8C]/90">
                      Ver Todos os Cursos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EJA Section */}
      <section id="eja" className="py-20 bg-gradient-to-r from-[#37AADD] to-[#0A4D8C] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Educação de Jovens e Adultos (EJA)</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nunca é tarde para realizar o sonho de concluir os estudos. Nossa EJA oferece flexibilidade total para sua
              rotina
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Módulo Administrativo", "Marketing", "Matemática", "Português"].map((module, index) => (
              <motion.div
                key={module}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <Calculator className="h-12 w-12 mx-auto mb-4 text-[#F5A623]" />
                <h3 className="text-xl font-semibold mb-2">{module}</h3>
                <p className="text-blue-100">Metodologia adaptada para adultos</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0A4D8C] font-semibold px-8 py-4 rounded-xl text-lg"
            >
              Saiba Mais sobre EJA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Carrossel de Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A4D8C] mb-4">O que Nossos Alunos Dizem</h2>
            <p className="text-xl text-gray-600">Histórias reais de transformação através da educação</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F7F7F7] rounded-2xl p-8 text-center"
            >
              <img
                src={testimonials[currentTestimonial].photo || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#F5A623] fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
              <h4 className="text-xl font-semibold text-[#0A4D8C]">{testimonials[currentTestimonial].name}</h4>
              <p className="text-[#37AADD] font-medium">{testimonials[currentTestimonial].course}</p>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0A4D8C] text-white p-3 rounded-full hover:bg-[#0A4D8C]/90 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0A4D8C] text-white p-3 rounded-full hover:bg-[#0A4D8C]/90 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-[#0A4D8C]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A4D8C] mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas sobre nossos cursos e metodologia</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-md">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-[#0A4D8C] pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="h-5 w-5 text-[#37AADD] flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-[#37AADD] flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A4D8C] mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">Estamos prontos para ajudar você a começar sua jornada educacional</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#0A4D8C] mb-6">Fale Conosco</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#37AADD] p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A4D8C]">Telefone</p>
                      <p className="text-gray-600">(79) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#37AADD] p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A4D8C]">E-mail</p>
                      <p className="text-gray-600">contato@institutocaduda.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#0A4D8C] mb-4">Nossos Endereços</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#F5A623] p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A4D8C]">Matriz - Poço Verde/SE</p>
                      <p className="text-gray-600">Rua Principal, 123 - Centro</p>
                      <p className="text-gray-600">CEP: 49400-000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#F5A623] p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A4D8C]">Filial - Fátima/BA</p>
                      <p className="text-gray-600">Av. Central, 456 - Centro</p>
                      <p className="text-gray-600">CEP: 44300-000</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-[#0A4D8C] font-medium">
                          Nome Completo *
                        </Label>
                        <Input
                          id="nome"
                          placeholder="Seu nome completo"
                          className="border-gray-300 focus:border-[#37AADD] focus:ring-[#37AADD]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-[#0A4D8C] font-medium">
                          Telefone *
                        </Label>
                        <Input
                          id="telefone"
                          placeholder="(00) 00000-0000"
                          className="border-gray-300 focus:border-[#37AADD] focus:ring-[#37AADD]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#0A4D8C] font-medium">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="border-gray-300 focus:border-[#37AADD] focus:ring-[#37AADD]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="curso" className="text-[#0A4D8C] font-medium">
                        Curso de Interesse
                      </Label>
                      <Input
                        id="curso"
                        placeholder="Qual curso você tem interesse?"
                        className="border-gray-300 focus:border-[#37AADD] focus:ring-[#37AADD]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-[#0A4D8C] font-medium">
                        Mensagem
                      </Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Conte-nos mais sobre seus objetivos..."
                        rows={4}
                        className="border-gray-300 focus:border-[#37AADD] focus:ring-[#37AADD]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#0A4D8C] hover:bg-[#0A4D8C]/90 text-white font-semibold py-4 rounded-xl text-lg"
                    >
                      Enviar Mensagem
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#0A4D8C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="lg:col-span-2">
              <img
                src="/logo-instituto-caduda.png"
                alt="Instituto Caduda"
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-blue-200 mb-6 leading-relaxed">
                Há mais de 30 anos transformando vidas através da educação de qualidade. Oferecemos cursos presenciais e
                EAD com metodologia inovadora e suporte completo.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#37AADD] p-3 rounded-lg hover:bg-[#37AADD]/80 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-[#37AADD] p-3 rounded-lg hover:bg-[#37AADD]/80 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-[#37AADD] p-3 rounded-lg hover:bg-[#37AADD]/80 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="bg-[#37AADD] p-3 rounded-lg hover:bg-[#37AADD]/80 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#sobre" className="text-blue-200 hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#cursos" className="text-blue-200 hover:text-white transition-colors">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#eja" className="text-blue-200 hover:text-white transition-colors">
                    EJA
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-blue-200 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Informações Legais */}
            <div>
              <h4 className="text-xl font-bold mb-6">Informações</h4>
              <div className="space-y-3 text-blue-200">
                <p>
                  <strong>CNPJ:</strong> 12.345.678/0001-90
                </p>
                <p>
                  <strong>Redes Sociais:</strong> @institutocaduda
                </p>
                <p>
                  <strong>E-mail:</strong> contato@institutocaduda.com.br
                </p>
                <p>
                  <strong>Telefone:</strong> (79) 99999-9999
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center">
            <p className="text-blue-200">
              © 2024 Instituto Caduda. Todos os direitos reservados. | Desenvolvido com ❤️ para transformar vidas através
              da educação.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
