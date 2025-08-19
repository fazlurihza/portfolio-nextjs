'use client'

import React from 'react'
import { Code, Smartphone, Globe, Calendar, Github, ExternalLink, Star, Layers, Users } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Projects() {
    const dataScienceProjects = [
        {
            title: "Music Preferences in Big Cities",
            category: "Data Science",
            period: "January 2024",
            description: "Explored user data from Y.Music to compare listening habits in Springfield and Shelbyville, focusing on data preprocessing and hypothesis testing to uncover differences in activity and genre preferences.",
            technologies: ["Python", "Pandas", "Data Cleaning", "Hypothesis Testing"],
            github: "https://github.com/fazlurihza/My-First-Project",
            demo: null,
            status: "Completed",
            featured: false
        },
        {
            title: "Integrated Project",
            category: "Data Science & Analytics",
            period: "February 2024",
            description: "End-to-end project covering data cleaning, EDA, and hypothesis testing, delivering actionable business insights through professional analysis and reporting.",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis", "Business Insights"],
            github: "https://github.com/fazlurihza/Integrated-Projects",
            demo: null,
            status: "Completed",
            featured: false
        },
        {
            title: "Gold Recovery Prediction",
            category: "Machine Learning",
            period: "May 2024",
            description: "Built and evaluated predictive models to estimate gold recovery efficiency in mining operations, optimizing production through data-driven insights.",
            technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Machine Learning", "Model Evaluation"],
            github: "https://github.com/fazlurihza/Gold-Recovery",
            demo: null,
            status: "Completed",
            featured: false
        },   
        {
            title: "Customer Churn Prediction – Interconnect Telecom",
            category: "Machine Learning & Predictive Analytics",
            period: "June 2024",
            description: "Developed predictive models to identify customers likely to churn. Gradient Boosting achieved AUC-ROC 0.84 and Accuracy 79%, enabling actionable strategies to improve customer retention.",
            technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Logistic Regression", "Random Forest", "Gradient Boosting", "AUC-ROC"],
            github: "https://github.com/fazlurihza/Final-Interconnect",
            demo: null,
            status: "Completed",
            featured: true
        }
    ]

    const dataAnalysisProjects = [
        {
            title: "Credit Scoring Analysis",
            category: "Data Analysis",
            period: "February 2024",
            description: "Explored a bank loan dataset to identify factors influencing loan default, focusing on income, family status, loan purpose, and children, with hypothesis-driven analysis to uncover key risk drivers.",
            technologies: ["Python", "Pandas", "Data Cleaning", "Exploratory Data Analysis", "Hypothesis Testing"],
            github: "https://github.com/fazlurihza/Project-2",
            demo: null,
            status: "Completed",
            featured: false
        },
        {
            title: "Vehicle Price Analysis",
            category: "Data Analysis",
            period: "March 2024",
            description: "Explored a vehicle dataset to uncover key factors affecting car prices, focusing on mileage, model year, and technical features through data preprocessing and exploratory analysis.",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "Exploratory Data Analysis"],
            github: "https://github.com/fazlurihza/Project-3-vehicle-price-analysis",
            demo: null,
            status: "Completed",
            featured: false
        },
        {
            title: "Megaline Revenue Analysis",
            category: "Data Analysis",
            period: "March 2024",
            description: "Analyzed client usage data to compare revenue between Surf and Ultimate prepaid plans, applying statistical testing to determine the more profitable plan and guide advertising strategies.",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Testing"],
            github: "https://github.com/fazlurihza/Project-4-Megaline-analyst",
            demo: null,
            status: "Completed",
            featured: true
        },
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