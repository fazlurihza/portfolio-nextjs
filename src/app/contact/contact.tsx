'use client'

import { useState } from 'react'
import { Github, Linkedin, Twitter, Instagram, Mail, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast, Toaster } from 'sonner'

export default function Contact() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const socialMediaCards = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            handle: '@Fazlurihza',
            description: 'Connect with me professionally and see my career journey',
            href: 'https://www.linkedin.com/in/fazlurihza',
            color: 'hover:bg-blue-50 hover:border-blue-200',
            iconColor: 'text-blue-600'
        },
        {
            name: 'GitHub',
            icon: Github,
            handle: '@Fazlurihza',
            description: 'Check out my latest projects and open source contributions',
            href: 'https://github.com/fazlurihza',
            color: 'hover:bg-gray-50 hover:border-gray-300',
            iconColor: 'text-gray-800'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            handle: '@Fazlur_Ihza',
            description: 'Follow me for tech insights and development tips',
            href: 'https://x.com/Fazlur_Ihza',
            color: 'hover:bg-blue-50 hover:border-blue-200',
            iconColor: 'text-blue-400'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            handle: '@Fafasihza',
            description: 'Behind the scenes of my development journey',
            href: 'https://www.instagram.com/fafasihza',
            color: 'hover:bg-pink-50 hover:border-pink-200',
            iconColor: 'text-pink-600'
        }
    ]

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault()

        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            toast.error('Please fill in all required fields')
            return
        }

        toast.success('Message sent successfully!', {
            description: `Thank you ${contactForm.name}! I'll get back to you within 24 hours.`,
        })

        setContactForm({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    return (
        <>
            <Toaster position="top-center" />
            <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20" data-aos="fade-down">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-12" data-aos-delay="600" data-aos="fade-down">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Get In <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Touch</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together
                        </p>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8" data-aos-delay="600" data-aos="fade-left">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MessageSquare className="w-6 h-6" />
                                    Connect With Me
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Follow me on social media to stay updated with my latest projects, tech insights, and development journey. Let&apos;s connect and build something great together!
                                </p>

                            </div>

                            <div className="space-y-4">
                                {socialMediaCards.map((social) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`block bg-white rounded-lg border border-gray-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${social.color}`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <Icon className={`w-8 h-8 ${social.iconColor}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="font-bold text-gray-900">{social.name}</h4>
                                                        <span className="text-sm text-gray-500">{social.handle}</span>
                                                    </div>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        {social.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="space-y-8" data-aos-delay="600" data-aos="fade-right">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Mail className="w-6 h-6" />
                                    Contact Form
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Have a project in mind? Send me a message and I&apos;ll get back to you as soon as possible.
                                </p>

                            </div>

                            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-lg">
                                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    Send Me a Message
                                </h4>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="contact-name">Name *</Label>
                                            <Input
                                                id="contact-name"
                                                placeholder="Your full name"
                                                value={contactForm.name}
                                                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="contact-email">Email *</Label>
                                            <Input
                                                id="contact-email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={contactForm.email}
                                                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="contact-subject">Subject</Label>
                                        <Input
                                            id="contact-subject"
                                            placeholder="Project inquiry, collaboration, etc."
                                            value={contactForm.subject}
                                            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="contact-message">Message *</Label>
                                        <Textarea
                                            id="contact-message"
                                            placeholder="Tell me about your project, requirements, timeline, and budget..."
                                            value={contactForm.message}
                                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                            rows={6}
                                            
                                        />
                                    </div>

                                    <Button
                                        onClick={handleSubmit}
                                        className="w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
                                    >
                                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                                        Send Message
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}