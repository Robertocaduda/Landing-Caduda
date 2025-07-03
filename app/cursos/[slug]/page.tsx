"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Clock, Award, BookOpen, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const courseData = {
  profissionalizantes: {
    title: "Cursos Profissionalizantes",
    description: "Acelere sua carreira com cursos práticos de 6 a 12 meses",
    color: "bg-[#2563eb]",
    courses: [
      "OPERADOR DE COMPUTADOR",
      "PROGRAMADOR MASTER",
      "DESENVOLVEDOR WEB",
      "GAMES CREATOR",
      "PROJETISTA ALTO NÍVEL",
      "VÍDEO CREATOR PROFISSIONAL",
      "YOUTUBER",
      "OPERADOR DE DRONE",
      "DESIGNER GRÁFICO",
      "SOCIAL MÉDIA PRO",
      "VENDEDOR DIGITAL",
      "INGLÊS FLUENTE",
      "PROFESSOR DO FUTURO",
      "CRIANÇAS DO FUTURO",
      "MELHOR IDADE",
      "LÍDER DO FUTURO",
      "MESTRE EM EXCEL",
      "AUXILIAR DE CONTÁBIL",
      "AUXILIAR DE ESCRITÓRIO",
      "ADMINISTRAÇÃO DE PESSOAL",
      "SEGURANÇA DA SAÚDE",
      "CUIDADOR DE IDOSOS",
      "OPERADOR DE LOGÍSTICA",
      "INGLÊS INTRODUTÓRIO",
      "INGLÊS BÁSICO",
      "INGLÊS INTERMEDIÁRIO",
      "INGLÊS AVANÇADO",
      "INGLÊS KIDS",
      "INGLÊS PARA HOTELARIA E TURISMO",
      "INGLÊS PARA NEGÓCIOS",
      "INGLÊS PARA VIAGENS",
    ],
    features: [
      "Duração de 6 a 12 meses",
      "Certificado reconhecido",
      "Metodologia prática",
      "Suporte pedagógico completo",
    ],
  },
  tecnicos: {
    title: "Cursos Técnicos",
    description: "Formação técnica completa com reconhecimento MEC",
    color: "bg-[#dc2626]",
    courses: [
      "CURSO TÉCNICO EM ADMINISTRAÇÃO",
      "CURSO TÉCNICO EM AGENTE COMUNITÁRIO DE SAÚDE",
      "CURSO TÉCNICO EM AGRIMENSURA",
      "CURSO TÉCNICO EM AGRONEGÓCIO",
      "CURSO TÉCNICO EM ALIMENTAÇÃO ESCOLAR",
      "CURSO TÉCNICO EM AUTOMAÇÃO INDUSTRIAL",
      "CURSO TÉCNICO EM COMÉRCIO EXTERIOR",
      "CURSO TÉCNICO EM CONTABILIDADE",
      "CURSO TÉCNICO EM EDIFICAÇÕES",
      "CURSO TÉCNICO EM ELETRÔNICA",
      "CURSO TÉCNICO EM ELETROTÉCNICA",
      "CURSO TÉCNICO EM ESTÉTICA",
      "CURSO TÉCNICO EM FINANÇAS",
      "CURSO TÉCNICO EM GUIA DE TURISMO (COMPLETO)",
      "CURSO TÉCNICO EM GUIA DE TURISMO INTERNACIONAL",
      "CURSO TÉCNICO EM GUIA DE TURISMO NACIONAL",
      "CURSO TÉCNICO EM GUIA DE TURISMO NACIONAL E REGIONAL",
      "CURSO TÉCNICO EM GUIA DE TURISMO REGIONAL",
      "CURSO TÉCNICO EM INFORMÁTICA PARA INTERNET",
      "CURSO TÉCNICO EM LOGÍSTICA",
      "CURSO TÉCNICO EM MARKETING",
      "CURSO TÉCNICO EM MECÂNICA",
      "CURSO TÉCNICO EM MEIO AMBIENTE",
      "CURSO TÉCNICO EM MINERAÇÃO",
      "CURSO TÉCNICO EM RECURSOS HUMANOS",
      "CURSO TÉCNICO EM REDES DE COMPUTADORES",
      "CURSO TÉCNICO EM SECRETARIA ESCOLAR",
      "CURSO TÉCNICO EM SECRETARIADO",
      "CURSO TÉCNICO EM SEGURANÇA DO TRABALHO",
      "CURSO TÉCNICO EM SERVIÇOS JURÍDICOS",
      "CURSO TÉCNICO EM SERVIÇOS PÚBLICOS",
      "CURSO TÉCNICO EM TRANSAÇÕES IMOBILIÁRIAS",
      "CURSO TÉCNICO EM VENDAS",
      "CURSO TÉCNICO EM VIGILÂNCIA EM SAÚDE",
      "ESPECIALIZAÇÃO EM GUIA EM ATRATIVO TURÍSTICO NATURAL",
      "ESPECIALIZAÇÃO EM INFORMAÇÃO E DOCUMENTAÇÃO",
      "ESPECIALIZAÇÃO TÉCNICA EM GESTÃO DE ARQUIVOS E BIBLIOTECA",
    ],
    features: ["Reconhecimento MEC", "Duração de 18 a 24 meses", "Formação técnica completa", "Alta empregabilidade"],
  },
  "graduacao-licenciatura": {
    title: "Graduação Licenciatura",
    description: "Licenciatura para formar educadores qualificados",
    color: "bg-[#7c3aed]",
    courses: [
      "ANDRAGOGIA",
      "ARTES VISUAIS",
      "CIÊNCIAS BIOLÓGICAS",
      "CIÊNCIAS DA RELIGIÃO",
      "CIÊNCIAS SOCIAIS",
      "COMPUTAÇÃO E INFORMÁTICA",
      "EDUCAÇÃO ESPECIAL",
      "EDUCAÇÃO FÍSICA",
      "FILOSOFIA",
      "FÍSICA",
      "GEOGRAFIA",
      "HISTÓRIA",
      "LETRAS ESPANHOL",
      "LETRAS INGLÊS",
      "LETRAS LÍNGUA PORTUGUESA E LIBRAS",
      "LETRAS PORTUGUÊS",
      "LETRAS PORTUGUÊS E ESPANHOL",
      "LETRAS PORTUGUÊS E FRANCÊS",
      "LETRAS PORTUGUÊS E INGLÊS",
      "MATEMÁTICA",
      "PEDAGOGIA",
      "PSICOPEDAGOGIA",
      "QUÍMICA",
      "SOCIOLOGIA",
      "TURISMO",
    ],
    features: [
      "Diploma reconhecido pelo MEC",
      "Duração de 4 a 5 anos",
      "Formação para docência",
      "Metodologia inovadora",
    ],
  },
  "graduacao-segunda-licenciatura": {
    title: "Graduação Segunda Licenciatura",
    description: "Segunda licenciatura em tempo reduzido",
    color: "bg-[#059669]",
    courses: [
      "ARTES VISUAIS",
      "CIÊNCIAS DA RELIGIÃO",
      "EDUCAÇÃO ESPECIAL",
      "EDUCAÇÃO FÍSICA",
      "FILOSOFIA",
      "GEOGRAFIA",
      "HISTÓRIA",
      "LETRAS",
      "LETRAS – PORTUGUÊS E ESPANHOL",
      "LETRAS – PORTUGUÊS E INGLÊS",
      "LETRAS – PORTUGUÊS E LIBRAS",
      "MATEMÁTICA",
      "PEDAGOGIA",
      "SOCIOLOGIA",
    ],
    features: ["Tempo reduzido", "Aproveitamento de disciplinas", "Diploma reconhecido", "Flexibilidade de horários"],
  },
  "graduacao-formacao-pedagogica": {
    title: "Graduação Formação Pedagógica",
    description: "Habilite-se para lecionar com excelência",
    color: "bg-[#ea580c]",
    courses: [
      "ARTES VISUAIS",
      "CIÊNCIAS DA RELIGIÃO",
      "EDUCAÇÃO ESPECIAL",
      "EDUCAÇÃO FÍSICA",
      "FILOSOFIA",
      "GEOGRAFIA",
      "HISTÓRIA",
      "LETRAS",
      "LETRAS – PORTUGUÊS E ESPANHOL",
      "LETRAS – PORTUGUÊS E INGLÊS",
      "LETRAS – PORTUGUÊS E LIBRAS",
      "MATEMÁTICA",
      "PEDAGOGIA",
      "SOCIOLOGIA",
    ],
    features: ["Habilitação para docência", "Metodologias modernas", "Certificação válida", "Suporte pedagógico"],
  },
  "graduacao-bacharelado": {
    title: "Graduação",
    description: "Graduação completa com metodologia inovadora",
    color: "bg-[#8b5cf6]",
    courses: [
      "ADMINISTRAÇÃO",
      "ADMINISTRAÇÃO PÚBLICA",
      "ARQUIVOLOGIA",
      "ARTES VISUAIS",
      "BIBLIOTECONOMIA",
      "BIOMEDICINA",
      "CIÊNCIA DA COMPUTAÇÃO",
      "CIÊNCIA DE DADOS E INTELIGÊNCIA ARTIFICIAL",
      "CIÊNCIAS CONTÁBEIS",
      "CIÊNCIAS DA NATUREZA",
      "CIÊNCIAS ECONÔMICAS",
      "CIÊNCIAS EXATAS",
      "CIÊNCIAS HUMANAS",
      "CIÊNCIAS IMOBILIÁRIAS",
      "CIÊNCIAS POLÍTICAS",
      "CIÊNCIAS SOCIAIS",
      "ECONOMIA",
    ],
    features: ["Formação completa", "Reconhecimento MEC", "Base sólida profissional", "Metodologia inovadora"],
  },
  "graduacao-tecnologo": {
    title: "Graduação Tecnólogo",
    description: "Especialização tecnológica em foco",
    color: "bg-[#0891b2]",
    courses: ["AGENTE COMUNITÁRIO DE SAÚDE", "AGRONEGÓCIOS", "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS"],
    features: ["Foco específico", "Duração otimizada", "Tecnologia aplicada", "Alta demanda no mercado"],
  },
  "pos-graduacao": {
    title: "Pós-Graduação",
    description: "Especialize-se e destaque-se no mercado",
    color: "bg-[#7c2d12]",
    courses: ["AGRONEGÓCIO", "COMUNICAÇÃO E DESIGN", "DIREITO"],
    features: [
      "Especialização avançada",
      "Professores mestres e doutores",
      "Diferencial competitivo",
      "Networking qualificado",
    ],
  },
  "cursos-livres": {
    title: "Cursos Livres",
    description: "Aprenda sem limites com flexibilidade total",
    color: "bg-[#16a34a]",
    courses: ["ADMINISTRAÇÃO", "BELEZA", "COMUNICAÇÃO E VENDAS"],
    features: ["Acesso livre", "Início imediato", "Custo acessível", "Aprendizado contínuo"],
  },
}

export default function CursosPage() {
  const params = useParams()
  const slug = params.slug as string
  const data = courseData[slug as keyof typeof courseData]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Categoria não encontrada</h1>
          <Link href="/">
            <Button>Voltar ao Início</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img src="/logo-instituto-caduda.png" alt="Instituto Caduda" className="h-12 w-auto" />
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`${data.color} text-white py-20`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">{data.description}</p>
            <div className="flex flex-wrap justify-center gap-6">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lista de Cursos */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A4D8C] mb-4">Todos os Cursos Disponíveis</h2>
            <p className="text-xl text-gray-600">
              Escolha o curso ideal para sua carreira e comece sua transformação hoje mesmo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className={`${data.color} p-2 rounded-lg flex-shrink-0`}>
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[#0A4D8C] mb-2">{course}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Flexível</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4" />
                            <span>Certificado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-[#0A4D8C] mb-6">Pronto para Começar?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos educacionais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#0A4D8C] hover:bg-[#0A4D8C]/90 text-white font-semibold px-8 py-4 rounded-xl text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora: +55 79 8836-7709
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#0A4D8C] text-[#0A4D8C] hover:bg-[#0A4D8C] hover:text-white font-semibold px-8 py-4 rounded-xl text-lg bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A4D8C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img
              src="/logo-instituto-caduda.png"
              alt="Instituto Caduda"
              className="h-12 w-auto brightness-0 invert mx-auto mb-6"
            />
            <p className="text-blue-200 mb-6">© 2025 Instituto Caduda. Todos os direitos reservados.</p>
            <Link href="/">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A4D8C] bg-transparent"
              >
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
