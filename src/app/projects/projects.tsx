'use client'

import React from 'react'
import { Code, Smartphone, Globe, Calendar, Github, ExternalLink, Star, Layers, Users } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Projects() {
    const dataScienceProjects = [
        {
            title: "Customer Churn Prediction",
            category: "Data Science",
            period: "Jan 2025 - Feb 2025",
            description: "Membangun model machine learning untuk memprediksi churn pelanggan pada perusahaan telekomunikasi. Analisis data, feature engineering, dan deployment model menggunakan Flask.",
            technologies: ["Python", "scikit-learn", "Pandas", "Flask", "Heroku"],
            github: "https://github.com/username/churn-prediction",
            demo: null,
            status: "Completed",
            featured: true
        },
        {
            title: "Sentiment Analysis Twitter",
            category: "Natural Language Processing",
            period: "Mar 2025 - Apr 2025",
            description: "Analisis sentimen tweet terkait produk menggunakan NLP dan visualisasi hasil dengan dashboard interaktif.",
            technologies: ["Python", "NLTK", "Streamlit", "Matplotlib"],
            github: "https://github.com/username/twitter-sentiment",
            demo: null,
            status: "Completed",
            featured: false
        },
        {
            title: "Image Classification for Medical Diagnosis",
            category: "Deep Learning",
            period: "May 2025 - Jun 2025",
            description: "Klasifikasi citra X-ray untuk deteksi penyakit paru-paru menggunakan CNN dan transfer learning.",
            technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
            github: "https://github.com/username/medical-image-classification",
            demo: null,
            status: "In Progress",
            featured: false
        }
    ]

    const dataAnalysisProjects = [
        {
            title: "Sales Data Dashboard",
            category: "Data Analysis & Visualization",
            period: "Jul 2025 - Aug 2025",
            description: "Membuat dashboard interaktif untuk analisis penjualan retail menggunakan Power BI dan Python.",
            technologies: ["Power BI", "Python", "Pandas"],
            github: "https://github.com/username/sales-dashboard",
            demo: null,
            status: "Completed",
            featured: true
        },
        {
            title: "Exploratory Data Analysis COVID-19",
            category: "Data Analysis",
            period: "Sep 2024 - Oct 2024",
            description: "Analisis data COVID-19 global, visualisasi tren kasus, dan insight menggunakan Jupyter Notebook.",
            technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
            github: "https://github.com/username/covid19-eda",
            demo: null,
            status: "Completed",
            featured: false
        }
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-100 text-green-800'
            case 'In Progress':
                return 'bg-blue-100 text-blue-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-white" data-aos="fade-down">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12" data-aos-delay="600" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        My <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore my Data Science and Analytics projects. Visit GitHub for source code and complete documentation.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8" data-aos-delay="600" data-aos="fade-up">
                    <Tabs defaultValue="datascience" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-lg">
                            <TabsTrigger
                                value="datascience"
                                className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all duration-200"
                            >
                                <Code className="w-4 h-4" />
                                <span>Data Science</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="dataanalysis"
                                className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all duration-200"
                            >
                                <Globe className="w-4 h-4" />
                                <span>Data Analysis</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="datascience" className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {dataScienceProjects.map((project, index) => (
                                    <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Code className="w-5 h-5 text-gray-800" />
                                                    {project.featured && (
                                                        <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                                                            <Star className="w-3 h-3" />
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                                                <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                                        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
                                            <Calendar className="w-3 h-3" />
                                            <span>{project.period}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-800 text-white rounded text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                className="flex items-center gap-1 px-3 py-2 shadow-lg hover:-translate-y-1 transition-all bg-gray-800 text-white rounded-lg hover:bg-gray-700  text-xs font-medium flex-1 justify-center"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-3 h-3" />
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="dataanalysis" className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {dataAnalysisProjects.map((project, index) => (
                                    <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Globe className="w-5 h-5 text-gray-800" />
                                                    {project.featured && (
                                                        <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                                                            <Star className="w-3 h-3" />
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                                                <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                                        <div className="flex items-center gap-1 text-gray-500 text-xs mb-4">
                                            <Calendar className="w-3 h-3" />
                                            <span>{project.period}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-800 text-white rounded text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                className="flex items-center gap-1 px-3 py-2 shadow-lg hover:-translate-y-1 transition-all bg-gray-800 text-white rounded-lg hover:bg-gray-700  text-xs font-medium flex-1 justify-center"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-3 h-3" />
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}