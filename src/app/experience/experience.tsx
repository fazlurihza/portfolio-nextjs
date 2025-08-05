'use client'

import React from 'react'
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Building2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Experience() {
    const workExperience = [
        {
            title: "Digital Marketing & Business Analysis",
            company: "Hasta Creative Space",
            location: "Malang, Indonesia",
            period: "May 2022 - Sep 2022",
            description: "Planned and executed digital marketing strategies to enhance brand presence across social media platforms. Conducted market and customer behavior analysis to support data-driven decision-making. Created performance reports using Google Analytics and Excel to track campaign effectiveness and identify business opportunities.",
            skills: ["Social Media Management", "Business Analysis", "Google Analytics", "Digital Marketing", "Market Research", "Data Visualization"]
        },
        {
            title: "Administrative Staff Intern",
            company: "AJB Bumiputera 1912",
            location: "Malang, Indonesia",
            period: "Jun 2019 - Aug 2019",
            description: "Managed administrative documentation and filing systems to support daily office operations. Assisted in the preparation of monthly financial reports and coordinated data entry tasks to ensure accuracy and consistency. Supported internal communications and employee training programs.",
            skills: ["Administrative Support", "Data Entry", "Microsoft Excel", "Financial Reporting"]
        }
    ]

    const education = [
        {
            degree: "Master of Computer Science",
            institution: "Universitas Brawijaya",
            location: "Malang, Indonesia",
            period: "2022 - 2025",
            gpa: "GPA: 3.81/4.00",
            description: "Currently pursuing a Master's degree in Computer Science with a specialization in Artificial Intelligence and Data Science. Focused on machine learning, data mining, and image processing, with hands-on experience in developing intelligent systems and conducting data-driven research.",
            subjects: ["Machine Learning", "Data Mining", "Deep Learning", "Computer Vision", "Big Data Analytics"]
        },
        {
            degree: "Bachelor of Economics",
            institution: "Universitas Gajayana",
            location: "Malang, Indonesia",
            period: "2016 - 2022",
            gpa: "GPA: 3.46/4.00",
            description: "Completed undergraduate studies in Economics with a strong focus on data analysis, statistics, and economic modeling. Developed quantitative research skills and applied statistical tools to evaluate economic trends and support data-driven policy insights.",
            subjects: ["Statistical Analysis", "Econometrics", "Macroeconomics", "Microeconomics", "Research Methodology", "Data Interpretation"]
        }
    ]

    const achievements = [
        {
            title: "Data Scientist Bootcamp",
            organization: "TripleTen",
            date: "June 2024",
            description: "Completed an intensive 9-month data science program covering Python, data wrangling, SQL, machine learning (supervised & unsupervised), time series, NLP, and computer vision. Finalized with an integrated project and career success program.",
            type: "Bootcamp"
        },
        {
            title: "Fundamentals of Data Science",
            organization: "Dicoding Indonesia",
            date: "April 2025",
            description: "Learned core data science concepts including data types, analysis cycles, supporting tools (SQL, NoSQL, Excel, SPSS, Tableau), and basic machine learning applications. Completed course with final exam and portfolio exploration.",
            type: "Certification"
        }
        
    ]

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-white" data-aos-duration="1000" data-aos="fade-down">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12" data-aos-delay="600" data-aos="fade-down">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        My <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A journey through my professional growth, education, and achievements
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8"  data-aos-delay="600" data-aos="fade-up">
                    <Tabs defaultValue="work" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-lg">
                            <TabsTrigger 
                                value="work" 
                                className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all duration-200"
                            >
                                <Briefcase className="w-4 h-4" />
                                <span className="hidden sm:inline">Work Experience</span>
                                <span className="sm:hidden">Work</span>
                            </TabsTrigger>
                            <TabsTrigger 
                                value="education" 
                                className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all duration-200"
                            >
                                <GraduationCap className="w-4 h-4" />
                                <span className="hidden sm:inline">Education</span>
                                <span className="sm:hidden">Education</span>
                            </TabsTrigger>
                            <TabsTrigger 
                                value="achievements" 
                                className="flex items-center gap-2 px-4 py-3 rounded-md data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all duration-200"
                            >
                                <Award className="w-4 h-4" />
                                <span className="hidden sm:inline">Achievements</span>
                                <span className="sm:hidden">Awards</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="work" className="space-y-6">
                            {workExperience.map((job, index) => (
                                <div key={index} className="border-l-4 border-gray-800 pl-6 pb-8 relative">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-800 rounded-full"></div>
                                    <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                                                <div className="flex items-center gap-2 text-gray-600 mt-1">
                                                    <Building2 className="w-4 h-4" />
                                                    <span className="font-medium">{job.company}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:items-end gap-1">
                                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{job.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{job.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.skills.map((skill, skillIndex) => (
                                                <span 
                                                    key={skillIndex}
                                                    className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TabsContent>

                        <TabsContent value="education" className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="border-l-4 border-gray-800 pl-6 pb-8 relative">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-800 rounded-full"></div>
                                    <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                                                <div className="flex items-center gap-2 text-gray-600 mt-1">
                                                    <GraduationCap className="w-4 h-4" />
                                                    <span className="font-medium">{edu.institution}</span>
                                                </div>
                                                <div className="text-gray-500 text-sm mt-1">{edu.gpa}</div>
                                            </div>
                                            <div className="flex flex-col sm:items-end gap-1">
                                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{edu.period}</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{edu.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed mb-4">{edu.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.subjects.map((subject, subjectIndex) => (
                                                <span 
                                                    key={subjectIndex}
                                                    className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm font-medium"
                                                >
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TabsContent>

                        <TabsContent value="achievements" className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-xl shadow-lg transition-all duration-300">
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Award className="w-5 h-5 text-gray-800" />
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        achievement.type === 'Competition' ? 'bg-blue-100 text-blue-800' :
                                                        achievement.type === 'Certification' ? 'bg-green-100 text-green-800' :
                                                        'bg-purple-100 text-purple-800'
                                                    }`}>
                                                        {achievement.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h3>
                                                <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                                                    <Building2 className="w-4 h-4" />
                                                    <span>{achievement.organization}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{achievement.date}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
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