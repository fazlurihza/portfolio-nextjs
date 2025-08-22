'use client'

import { useState } from 'react'
import { Home, User as IdCard, Briefcase, FolderOpen, Lightbulb, Rocket, Code, MessageSquare, CalendarDays, User, Send, Mail, Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Label } from '@/components/ui/label'
import emailjs from 'emailjs-com'

const navigationItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: IdCard },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Testimonials', href: '#testimonials', icon: MessageSquare },
    { name: 'Contact', href: '#contact', icon: Mail },
]

const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
]

export default function Footer() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [subscriptionEmail, setSubscriptionEmail] = useState('')
    const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
    const [isSubscriptionDialogOpen, setIsSubscriptionDialogOpen] = useState(false)

    const getCurrentDate = () => {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        const today = new Date()
        const dayName = days[today.getDay()]
        const day = today.getDate()
        const month = months[today.getMonth()]
        const year = today.getFullYear()
        return `${dayName}, ${day} ${month} ${year}`
    }

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            toast.error('Please fill in all required fields', {
                description: 'Name, email, and message are required',
            })
            return
        }

        try {
            await emailjs.send(
                'service_nhfhfcl', // service_id kamu
                'template_fzj5bk1', // template_id kamu
                {
                    name: contactForm.name,
                    email: contactForm.email,
                    subject: contactForm.subject,
                    message: contactForm.message,
                },
                'Da7kjQoWfC9Wca4Jm' // public key kamu
            )
            toast.success('Message sent successfully!', {
                description: `Thank you ${contactForm.name}! I'll get back to you soon at ${contactForm.email}.`,
                action: {
                    label: 'Close',
                    onClick: () => console.log('Message acknowledged'),
                },
            })
            setContactForm({ name: '', email: '', subject: '', message: '' })
            setIsContactDialogOpen(false)
        } catch (error) {
            toast.error('Failed to send message. Please try again later.')
        }
    }

    const handleSubscriptionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!subscriptionEmail) {
            toast.error('Please enter your email address', {
                description: 'Email is required for subscription',
            })
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscriptionEmail)) {
            toast.error('Invalid email format', {
                description: 'Please enter a valid email address',
            })
            return
        }


        toast.success('Successfully subscribed!', {
            description: `Welcome aboard! Updates will be sent to ${subscriptionEmail}.`,
            action: {
                label: 'Manage',
                onClick: () => console.log('Manage subscription'),
            },
        })
        setSubscriptionEmail('')
        setIsSubscriptionDialogOpen(false)
    }

    return (
        <>
            <Toaster position="top-center" />
            <footer className="bg-white/90 backdrop-blur-lg border-t border-gray-200 mt-20">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">Portfolio</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Passionate about turning data into actionable insights.  
                                Open to collaboration on impactful data projects.
                            </p>

                            <div className="flex items-center space-x-4">
                                <TooltipProvider>
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon
                                        return (
                                            <Tooltip key={social.name}>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href={social.href}
                                                        className="p-2 text-gray-700 hover:text-white hover:bg-gray-800 rounded-full hover:shadow-xl transition-all duration-200 group"
                                                        aria-label={social.name}
                                                    >
                                                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
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

                        <div className="space-y-4">
                            <h4 className="text-lg font-medium text-gray-900">Quick Links</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200 group text-sm"
                                        >
                                            <Icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-200" />
                                            <span className="font-medium">{item.name}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-medium text-gray-900">Get In Touch</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Mail className="w-4 h-4 text-gray-800" />
                                    <span className="text-sm">by.fazlurihza@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <MessageSquare className="w-4 h-4 text-gray-800" />
                                    <span className="text-sm">Available for freelance work</span>
                                </div>
                            </div>

                            <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-200 group text-sm font-medium">
                                        <span>Let&apos;s Work Together</span>
                                        <Mail className="w-3 h-3 group-hover:scale-110 transition-transform duration-200" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px]">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-2">
                                            <MessageSquare className="w-5 h-5" />
                                            Let&apos;s Work Together
                                        </DialogTitle>

                                        <DialogDescription>
                                            Tell me about your project and I&apos;ll get back to you as soon as possible.
                                        </DialogDescription>

                                    </DialogHeader>
                                    <form onSubmit={handleContactSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Name *</Label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                    <Input
                                                        id="name"
                                                        placeholder="Your name"
                                                        value={contactForm.name}
                                                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                                        className="pl-10"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email *</Label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="your@email.com"
                                                        value={contactForm.email}
                                                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                                        className="pl-10"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                placeholder="Project collaboration"
                                                value={contactForm.subject}
                                                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell me about your project..."
                                                value={contactForm.message}
                                                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                                rows={4}
                                            />
                                        </div>
                                        <Button type="submit" className="w-full hover:-translate-y-1 shadow-lg transition-all">
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-medium text-gray-900">Stay Updated</h4>
                            <p className="text-gray-600 text-sm">
                                Subscribe to get notified about my latest projects and articles.
                            </p>

                            <Dialog open={isSubscriptionDialogOpen} onOpenChange={setIsSubscriptionDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button className="w-full inline-flex items-center hover:-translate-y-1 gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-200 group text-sm font-medium">
                                        <span>Subscribe Now</span>
                                        <Send className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[400px]">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-2">
                                            <Mail className="w-5 h-5" />
                                            Subscribe to Newsletter
                                        </DialogTitle>
                                        <DialogDescription>
                                            Get the latest updates on my projects, articles, and tech insights delivered to your inbox.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleSubscriptionSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="subscription-email">Email Address</Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                <Input
                                                    id="subscription-email"
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    value={subscriptionEmail}
                                                    onChange={(e) => setSubscriptionEmail(e.target.value)}
                                                    className="pl-10"
                                                />
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-gray-500" />
                                                <span>Weekly project updates</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Rocket className="w-4 h-4 text-gray-500" />
                                                <span>New article notifications</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Lightbulb className="w-4 h-4 text-gray-500" />
                                                <span>Tech tips and insights</span>
                                            </div>
                                        </div>
                                        <Button type="submit" className="w-full hover:-translate-y-1 transition-all shadow-lg">
                                            <Send className="w-4 h-4 mr-2" />
                                            Subscribe
                                        </Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500 w-full">
                                <div className="flex items-center gap-2">
                                    <span>© {new Date().getFullYear()} Portfolio. Made with</span>
                                    <Heart className="w-3 h-3 text-red-500 fill-current" />
                                    <span>and endless cups of coffee</span>
                                </div>

                                <div className="flex items-center gap-1 text-xs text-gray-400 md:ml-4">
                                    <CalendarDays className="w-4 h-4" />
                                    {getCurrentDate()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}