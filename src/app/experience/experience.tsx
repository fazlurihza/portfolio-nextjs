'use client'

import React from 'react'
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Building2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

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
            gpa: "GPA: 3.80/4.00",
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
            description: "Completed a 9-month intensive program covering the full data science pipeline: Python, Data Wrangling, Statistical Data Analysis, SQL, Machine Learning (supervised, unsupervised, time series, NLP, computer vision), and Final Capstone Project. Developed strong foundations in both theory and hands-on projects, with career readiness training included.",
            type: "Bootcamp",
            certificateImage: "/F:/portofolio/public/202402DSIND000092.pdf" 
        },
        {
            title: "Fundamentals of Data Science",
            organization: "Dicoding Academy",
            date: "April 2025",
            description: "Mastered fundamental concepts of data science, including data types, data-driven decision making, statistical analysis, and introduction to machine learning. Learned supporting technologies and tools such as SQL, Excel, Tableau, and Python. Completed with final evaluation and case-based exercises.",
            type: "Course",
            certificateImage: "/F:/portofolio/public/sertifikat_course_615_3388023_290425033629.pdf"
        },
        {
            title: "Career Insights in Data Analytics",
            organization: "DQLab",
            date: "July 2025",
            description: "Gained exposure to the data analytics career landscape, including industry expectations, essential tools, and practical guidance for building a career path as a Data Analyst. Explored real case studies to understand the application of analytics in business decision-making.",
            type: "Workshop",
            certificateImage: "/F:/portofolio/public/Sertifikat_FAZLUR IHZANURAHMAN_Wawasan Karir dalam Bidang Data Analytics-1.pdf"
        },
        {
            title: "Fundamental of Data Analyst",
            organization: "DQlab",
            date: "February 2024",
            description: "Completed a comprehensive foundation course in data analysis covering exploratory data analysis (EDA), data cleaning, and basic visualization techniques. Learned practical skills in Python and SQL for handling structured datasets, with emphasis on real-world business problem solving.",
            type: "Course",
            certificateImage: "/F:/portofolio/public/Sertifikat_FAZLUR IHZANURAHMAN_Fundamental of Data Analyst.pdf"
        }
        
    ]

    // Tambahkan mapping warna untuk setiap type
    const typeColorMap: Record<string, string> = {
        Bootcamp: "bg-blue-100 text-blue-800",
        Course: "bg-green-100 text-green-800",
        Workshop: "bg-yellow-100 text-yellow-800",
        Certification: "bg-purple-100 text-purple-800",
        Competition: "bg-pink-100 text-pink-800",
        // tambahkan type lain jika perlu
    }

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
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium ${typeColorMap[achievement.type] || "bg-gray-200 text-gray-800"}`}
                                                    >
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
                                        <p className="text-gray-600 leading-relaxed mb-4">{achievement.description}</p>
                                        {achievement.certificateImage && (
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm">
                                                        View Certificate
                                                    </button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-lg">
                                                    <img
                                                        src={achievement.certificateImage}
                                                        alt={`Certificate for ${achievement.title}`}
                                                        className="w-full h-auto rounded shadow"
                                                    />
                                                </DialogContent>
                                            </Dialog>
                                        )}
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