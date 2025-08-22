'use client'

import React, { useState } from 'react'
import { Download, Briefcase, Mail, MapPin, GraduationCap, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast, Toaster } from 'sonner'
import emailjs from 'emailjs-com'

export default function Page() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
    const [isCVDialogOpen, setIsCVDialogOpen] = useState(false)

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            toast.error('Please fill in all required fields')
            return
        }

        try {
            await emailjs.send(
                'service_nhfhfcl',
                'template_fzj5bk1',
                {
                    name: contactForm.name,      // harus 'name' bukan 'from_name'
                    email: contactForm.email,    // harus 'email' bukan 'from_email'
                    message: contactForm.message,
                },
                'Da7kjQoWfC9Wca4Jm'
            )
            toast.success('Message sent successfully!', {
                description: `Thank you ${contactForm.name}! I'll get back to you soon.`,
            })
            setContactForm({ name: '', email: '', message: '' })
            setIsContactDialogOpen(false)
        } catch (error) {
            toast.error('Failed to send message. Please try again later.')
        }
    }

    const handleCVDownload = () => {
        toast.success('CV Downloaded!', {
            description: 'Thank you for your interest in my profile.',
        })
        setIsCVDialogOpen(false)
        const link = document.createElement('a')
        link.href = '/Data_Scientist_fazlur.pdf'
        link.download = 'Data_Scientist_fazlur.pdf'
        link.click()
    }

    return (
        <>
            <Toaster position="top-center" />
            <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-white" data-aos-duration="1000" data-aos="fade-down">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-12" data-aos-delay="600" data-aos="fade-down">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            About <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Passionate about uncovering insights from data and transforming complex information into impactful, data-driven solutions.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="relative flex justify-center" data-aos-delay="600" data-aos="fade-left">
                            <div className="aspect-square w-full max-w-md">
                                <img
                                    src="/fafas.jpg"
                                    alt="Fazlur Ihzanurahman - Computers Science UB"
                                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="relative" data-aos-delay="600" data-aos="fade-right">
                            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 h-full">
                                <div className="space-y-6">
                                    <div className="pb-6 border-b border-gray-200">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Hello There!</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            I’m a Computer Science student passionate about data science and analytics. I love working with data to discover insights and create solutions that drive better decisions.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3 p-3 rounded-lg shadow-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                                            <div className="w-10 h-10 bg-gray-800 rounded-lg  flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Name</p>
                                                <p className="text-gray-900 font-semibold">Fazlur Ihzanurahman</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Living in</p>
                                                <p className="text-gray-900 font-semibold">Malang, Indonesia</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Education</p>
                                                <p className="text-gray-900 font-semibold">Computer Science - UB</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Email</p>
                                                <p className="text-gray-900 font-semibold">by.fazlurihza@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Phone</p>
                                                <p className="text-gray-900 font-semibold">+62 813-7323-0205</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Status</p>
                                                <p className="text-gray-900 font-semibold">Available for Work</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-200">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Interests & Focus</h4>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                                Data Scientist
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                                Data Analyst
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Dialog open={isCVDialogOpen} onOpenChange={setIsCVDialogOpen}>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        className="bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group text-base sm:text-lg font-medium"
                                                    >
                                                        <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                                        Download My CV
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[500px]">
                                                    <DialogHeader>
                                                        <DialogTitle className="flex items-center gap-2">
                                                            <Download className="w-5 h-5" />
                                                            Download My CV
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Get my latest resume with all my experience and skills.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="space-y-4">
                                                        <div className="p-4 bg-gray-50 rounded-lg">
                                                           <h4 className="font-semibold text-gray-900 mb-2">What&apos;s included:</h4>
                                                            <ul className="text-sm text-gray-600 space-y-1">
                                                                <li className="flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
                                                                    Professional experience & skills
                                                                </li>
                                                                <li className="flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
                                                                    Education & certifications
                                                                </li>
                                                                <li className="flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
                                                                    Portfolio highlights
                                                                </li>
                                                                <li className="flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
                                                                    Contact information
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <Button
                                                            onClick={handleCVDownload}
                                                            className="w-full hover:-translate-y-1 shadow-lg transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                            Download CV (PDF)
                                                        </Button>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>

                                            <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group text-base sm:text-lg font-medium"
                                                    >
                                                        <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                                        Hire Me Now
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[500px]">
                                                    <DialogHeader>
                                                        <DialogTitle className="flex items-center gap-2">
                                                            <Mail className="w-5 h-5" />
                                                            Let&apos;s Work Together
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Tell me about your project and I&apos;ll get back to you as soon as possible.
                                                        </DialogDescription>
                                                    </DialogHeader>

                                                    <form onSubmit={handleContactSubmit} className="space-y-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="about-name">Name *</Label>
                                                            <Input
                                                                id="about-name"
                                                                placeholder="Your name"
                                                                value={contactForm.name}
                                                                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="about-email">Email *</Label>
                                                            <Input
                                                                id="about-email"
                                                                type="email"
                                                                placeholder="your@email.com"
                                                                value={contactForm.email}
                                                                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="about-message">Message *</Label>
                                                            <Textarea
                                                                id="about-message"
                                                                placeholder="Tell me about your project..."
                                                                value={contactForm.message}
                                                                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                                                rows={4}
                                                            />
                                                        </div>
                                                        <Button
                                                            type="submit"
                                                            className="w-full hover:-translate-y-1 shadow-lg transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <Send className="w-4 h-4" />
                                                            Send Message
                                                        </Button>
                                                    </form>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}