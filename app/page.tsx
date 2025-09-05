'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code2, Brain, Database, Globe, Smartphone, Cloud, ChevronDown, Calendar, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skills = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python", "C++"],
  "Frontend": ["React", "Next.js", "React Native", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
  "Backend": ["Node.js", "NestJS", "Express.js", "RESTful APIs"],
  "AI/ML": ["PyTorch", "Deep Learning", "Machine Learning", "Data Analysis", "Statistics"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "TypeORM", "Prisma"],
  "Tools & DevOps": ["Docker", "Git", "GitHub", "Vercel", "AWS"]
}

const experiences = [
  {
    title: "Développeur Full Stack",
    company: "Make Design & Code Limitless (MDCL)",
    period: "Avril 2024 - Présent (1 an 5 mois)",
    type: "À distance",
    description: [
      "Développement d'applications web en React, Next.js, NestJS, MongoDB et MySQL",
      "Construction d'une application web et dashboard pour la vente de billets d'un club sportif",
      "Maintenance et mise en place de plateformes pour des événements en ligne et guichets physiques"
    ]
  },
  {
    title: "Développeur React Native Expo", 
    company: "Doci",
    period: "Novembre 2024 - Février 2025 (4 mois)",
    type: "À distance",
    description: [
      "Développement d'une plateforme mobile pour la recherche de terrains de sport à proximité",
      "Utilisation de React Native Expo et TypeScript pour une expérience utilisateur fluide"
    ]
  },
  {
    title: "Développeur Next.js",
    company: "Miles Republic", 
    period: "Octobre 2024 - Décembre 2024 (3 mois)",
    type: "À distance (France)",
    description: [
      "Mise en place d'un nouveau design pour certaines pages du site",
      "Intégration d'une carte Mapbox pour les participants aux courses",
      "Développement d'applications web avec Next.js, PostgreSQL, Prisma et Docker"
    ]
  },
  {
    title: "Développeur React, Node.js & React Native",
    company: "MNDPT",
    period: "Madagascar 1 an",
    type: "Temps plein", 
    description: [
      "Participation au développement d'applications web et mobiles avec React, Node.js, Express, React Native et PostgreSQL",
      "Construction d'un dashboard et d'une application de suivi de recensement"
    ]
  },
  {
    title: "Stagiaire en Deep Learning",
    company: "Laboratoire d'Informatique et Mathématiques Appliquées (LIMA)",
    period: "En cours",
    type: "Université d'Antananarivo",
    description: [
      "Contribution à un projet de recherche pour développer un modèle d'apprentissage profond pour la langue malgache",
      "Construction d'un GEC (Grammatical Error Correction)",
      "Conception et entraînement de modèles avec PyTorch",
      "Analyse approfondie des données textuelles malgaches"
    ]
  }
]

const education = [
  {
    degree: "Master 1 & 2 en Informatique Statistique et Analyse de Données (MISA)",
    school: "Université d'Antananarivo, Madagascar",
    period: "Depuis 2022 - En phase de finalisation",
    specialization: "Spécialisation en Deep Learning"
  },
  {
    degree: "Licence en Informatique Statistique et Analyse de Données (MISA)", 
    school: "Université d'Antananarivo, Madagascar",
    period: "2021 - 2022"
  },
  {
    degree: "Première et deuxième années en Mathématiques",
    school: "Université d'Antananarivo, Madagascar", 
    period: "2018 - 2020"
  }
]

const certifications = [
  "Formation Huawei 'Seeds for the Future' (2023)",
  "Certification NVIDIA 'Fundamentals of Deep Learning' (Décembre 2022)"
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'contact']
      const scrollY = window.scrollY
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Manitra Luc
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'experience', label: 'Expérience' },
                { id: 'skills', label: 'Compétences' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-white/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,219,226,0.1),transparent_50%)]"></div>
        
        <div className={`max-w-4xl mx-auto text-center px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Randriamanantena Manitra Luc
            </h1>
            <div className="text-xl md:text-2xl text-white/80 mb-8">
              Étudiant en Master MISA • Spécialiste Deep Learning • Développeur Full Stack
            </div>
            <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              Passionné par les technologies avancées telles que le machine learning, le deep learning, 
              le développement web et mobile, ainsi que la data science. Spécialisé en Deep Learning 
              avec une expertise solide dans React, Next.js, Python et PyTorch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('about')}
            >
              Découvrir mon profil
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Me contacter
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">3+</div>
              <div className="text-sm text-white/60">Années d'études MISA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">5+</div>
              <div className="text-sm text-white/60">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">10+</div>
              <div className="text-sm text-white/60">Technologies maîtrisées</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              À propos de moi
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Découvrez mon parcours académique et professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Brain className="h-8 w-8 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Formation académique</h3>
                  </div>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-cyan-400 pl-6">
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-cyan-400 font-medium">{edu.school}</p>
                        <p className="text-white/60 text-sm">{edu.period}</p>
                        {edu.specialization && (
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 mt-2">
                            {edu.specialization}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Globe className="h-8 w-8 text-indigo-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Langues</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-white">Malgache</span>
                      <Badge className="bg-green-500/20 text-green-300 border-green-400/30">Natif</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Français</span>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">B2</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Anglais</span>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">Intermédiaire</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-white/80">{cert}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Expérience professionnelle
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Mon parcours professionnel et mes contributions
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-cyan-400 font-medium mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period} • {exp.type}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-white/80 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Compétences techniques
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Technologies et outils que je maîtrise
            </p>
          </div>

          <div className="grid gap-8">
            {Object.entries(skills).map(([category, skillsList], index) => (
              <Card key={category} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {category === "Programming Languages" && <Code2 className="h-6 w-6 text-cyan-400 mr-4" />}
                    {category === "Frontend" && <Globe className="h-6 w-6 text-blue-400 mr-4" />}
                    {category === "Backend" && <Database className="h-6 w-6 text-indigo-400 mr-4" />}
                    {category === "AI/ML" && <Brain className="h-6 w-6 text-purple-400 mr-4" />}
                    {category === "Databases" && <Database className="h-6 w-6 text-green-400 mr-4" />}
                    {category === "Tools & DevOps" && <Cloud className="h-6 w-6 text-orange-400 mr-4" />}
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillsList.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-400/30 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 px-4 py-2"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Restons en contact
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter de projets ou d'opportunités
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
                  
                  <div className="flex items-center group">
                    <Mail className="h-6 w-6 text-cyan-400 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:randiluc@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        randiluc@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <Phone className="h-6 w-6 text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-medium">Téléphone</p>
                      <a href="tel:+261346346350" className="text-blue-400 hover:text-blue-300 transition-colors">
                        +261 34 63 463 50
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <MapPin className="h-6 w-6 text-indigo-400 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-medium">Localisation</p>
                      <p className="text-indigo-400">Antananarivo, Madagascar</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <Linkedin className="h-6 w-6 text-purple-400 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/manitra-luc-randriamanantena-7975b1227/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                      >
                        Mon profil LinkedIn
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Disponibilité</h3>
                  <p className="text-white/80 mb-6">
                    Je suis actuellement disponible pour des projets freelance et des opportunités à temps partiel. 
                    Ouvert aux collaborations sur des projets innovants en IA et développement logiciel.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-white/80">Disponible pour missions freelance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-white/80">Travail à distance privilégié</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-white/80">Collaboration sur projets R&D</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:randiluc@gmail.com"
              className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/20 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/manitra-luc-randriamanantena-7975b1227/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <p className="text-white/60">
            © 2024 Randriamanantena Manitra Luc. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}