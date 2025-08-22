'use client'

import { useState } from 'react'
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Mail, MapPin, Send, Calendar, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast, Toaster } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { TypeAnimation } from 'react-type-animation'
import Image from "next/image"
import emailjs from 'emailjs-com'

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/fazlurihza', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'GitHub', href: 'https://github.com/fazlurihza', icon: Github, color: 'hover:text-gray-900' },
    { name: 'Twitter', href: 'https://x.com/Fazlur_Ihza', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://www.instagram.com/fafasihza', icon: Instagram, color: 'hover:text-pink-600' },
]

export default function HeroSection() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            toast.error('Please fill in all required fields')
            return
        }

        try {
            await emailjs.send(
                'service_nhfhfcl', // service_id kamu
                'template_fzj5bk1', // template_id kamu
                {
                    name: contactForm.name,      // pastikan sama dengan variabel di template EmailJS
                    email: contactForm.email,
                    message: contactForm.message,
                },
                'Da7kjQoWfC9Wca4Jm' // public key kamu
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

    return (
        <>
            <Toaster position="top-center" />
            <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-white" data-aos="fade-down" data-aos-duration="1000">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div className="space-y-6 sm:space-y-8" data-aos-delay="600" data-aos="fade-left">
                            <Badge className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 text-sm font-medium" data-aos-delay="600" data-aos="fade-down">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Available for freelance work
                            </Badge>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="space-y-3 sm:space-y-4">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                        Hi, I&apos;m{' '}
                                        <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                            Fazlur Ihzanurahman
                                        </span>
                                    </h1>

                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
                                             <TypeAnimation
                                                sequence={[
                                                    "Data Scientist",
                                                    2000,
                                                    "Data Analyst",
                                                    2000,
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                repeat={Infinity}
                                            />
                                        </h2>
                                    </div>
                                </div>

                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md sm:max-w-xl">
                                    I turn complex data into actionable insights and impactful stories. 
                                    With 2+ years of experience in data analysis and machine learning, 
                                    I help drive informed decisions through clean code, clear visualizations, and analytical thinking.
                                </p>

                                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
                                    <Badge className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 px-4 py-2 font-medium">
                                        <MapPin className="w-4 h-4 text-gray-500" />
                                        Malang, Indonesia
                                    </Badge>
                                    <Badge className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 font-medium">
                                        <Calendar className="w-4 h-4 text-blue-500" />
                                        Available Now
                                    </Badge>
                                </div>

                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Button
                                    asChild
                                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group text-base sm:text-lg font-medium"
                                >
                                    <a href="#projects">
                                        <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                                        View Projects
                                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                    </a>
                                </Button>

                                <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group text-base sm:text-lg font-medium"
                                        >
                                            <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                                            Let&apos;s Work Together
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
                                                <Label htmlFor="hero-name">Name *</Label>
                                                <Input
                                                    id="hero-name"
                                                    placeholder="Your name"
                                                    value={contactForm.name}
                                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="hero-email">Email *</Label>
                                                <Input
                                                    id="hero-email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={contactForm.email}
                                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="hero-message">Message *</Label>
                                                <Textarea
                                                    id="hero-message"
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

                            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-medium text-gray-700">Follow me:</span>
                                    <TooltipProvider>
                                        {socialLinks.map((social) => {
                                            const Icon = social.icon
                                            return (
                                                <Tooltip key={social.name}>
                                                    <TooltipTrigger asChild>
                                                        <a
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`p-3 text-gray-600 hover:text-white hover:bg-gray-800 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group ${social.color}`}
                                                            aria-label={social.name}
                                                        >
                                                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="top">
                                                        <p>{social.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            )
                                        })}
                                    </TooltipProvider>
                                </div>
                            </div>
                        </div>

                        <div className="relative" data-aos-delay="600" data-aos="fade-down">
                            <div className="relative">
                                <div className="mx-auto rounded-lg shadow-lg overflow-hidden hover:-translate-y-3 transition-all  w-full max-w-sm">
                                    <div className="relative w-full aspect-square max-h-[400px]">
                                        <Image
                                            src="/fafas.jpg"
                                            alt="Profile"
                                            fill
                                            priority
                                            className="object-cover rounded-lg"
                                        />
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