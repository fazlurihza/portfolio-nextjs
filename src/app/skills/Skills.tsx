'use client'

import React from 'react'
import { Code, Palette, Database, Wrench } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Skills() {
    const dataScientistSkills = [
        { name: "Python", level: 90, category: "Programming" },
        { name: "R", level: 75, category: "Programming" },
        { name: "Pandas", level: 90, category: "Library" },
        { name: "NumPy", level: 85, category: "Library" },
        { name: "scikit-learn", level: 85, category: "Machine Learning" },
        { name: "TensorFlow", level: 70, category: "Deep Learning" },
        { name: "Keras", level: 70, category: "Deep Learning" },
        { name: "Matplotlib", level: 80, category: "Visualization" },
        { name: "Seaborn", level: 75, category: "Visualization" },
        { name: "Jupyter Notebook", level: 90, category: "Tool" },
        { name: "SQL", level: 80, category: "Database" }
    ]

    const dataAnalysisSkills = [
        { name: "Excel", level: 90, category: "Tool" },
        { name: "Power BI", level: 85, category: "Visualization" },
        { name: "Tableau", level: 80, category: "Visualization" },
        { name: "Python", level: 85, category: "Programming" },
        { name: "Pandas", level: 85, category: "Library" },
        { name: "NumPy", level: 80, category: "Library" },
        { name: "SQL", level: 80, category: "Database" },
        { name: "Google Data Studio", level: 75, category: "Visualization" },
        { name: "Statistics", level: 80, category: "Analysis" }
    ]

    const SkillCard = ({ skill }: { skill: { name: string; level: number; category: string } }) => (
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
            </div>
            <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-gradient-to-r from-gray-800 to-gray-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                    ></div>
                </div>
            </div>
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {skill.category}
            </span>
        </div>
    )

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20" data-aos="fade-down">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12" data-aos-delay="600" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        My <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Keahlian utama saya di bidang Data Science dan Data Analysis.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8" data-aos-delay="600" data-aos="fade-up">
                    <Tabs defaultValue="datascientist" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-lg">
                            <TabsTrigger 
                                value="datascientist" 
                                className="flex items-center gap-2 px-3 py-3 rounded-md data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all duration-200"
                            >
                                <Code className="w-4 h-4" />
                                <span>Data Scientist</span>
                            </TabsTrigger>
                            <TabsTrigger 
                                value="dataanalysis" 
                                className="flex items-center gap-2 px-3 py-3 rounded-md data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all duration-200"
                            >
                                <Palette className="w-4 h-4" />
                                <span>Data Analysis</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="datascientist" className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {dataScientistSkills.map((skill, index) => (
                                    <SkillCard key={index} skill={skill} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="dataanalysis" className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {dataAnalysisSkills.map((skill, index) => (
                                    <SkillCard key={index} skill={skill} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}