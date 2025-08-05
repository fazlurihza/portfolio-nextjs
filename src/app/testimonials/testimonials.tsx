'use client'

import { useState } from 'react'
import { MessageSquare, Star, Plus, Send, Building2, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast, Toaster } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            name: "Sarah Johnson",
            position: "Marketing Director",
            company: "Tech Solutions Inc",
            rating: 5,
            message: "Hizkia delivered an outstanding website that exceeded our expectations. Her attention to detail and creative approach made our brand stand out. Highly recommended!",
            date: "March 2024",
            project: "Corporate Website"
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Startup Founder",
            company: "InnovateLab",
            rating: 5,
            message: "Working with Hizkia was a game-changer for our startup. She created a modern, responsive web application that our users love. Professional and reliable!",
            date: "February 2024",
            project: "Web Application"
        },
        {
            id: 3,
            name: "Lisa Rodriguez",
            position: "E-commerce Manager",
            company: "Fashion Hub",
            rating: 5,
            message: "Hizkia transformed our online store with a beautiful, user-friendly design. Sales increased by 40% after the redesign. Amazing work!",
            date: "January 2024",
            project: "E-commerce Platform"
        },
        {
            id: 4,
            name: "David Wilson",
            position: "Creative Director",
            company: "Design Studio",
            rating: 5,
            message: "Emma's frontend development skills are exceptional. She brought our designs to life with pixel-perfect precision and smooth animations.",
            date: "December 2023",
            project: "Portfolio Website"
        },
        {
            id: 5,
            name: "Anna Thompson",
            position: "Product Manager",
            company: "SaaS Company",
            rating: 5,
            message: "Excellent communication and technical expertise. Hizkia delivered our dashboard redesign on time and within budget. Will definitely work with her again!",
            date: "November 2023",
            project: "Dashboard Redesign"
        },
        {
            id: 6,
            name: "James Park",
            position: "Business Owner",
            company: "Local Restaurant",
            rating: 5,
            message: "Hizkia created a stunning website for our restaurant that perfectly captures our brand. The online ordering system works flawlessly!",
            date: "October 2023",
            project: "Restaurant Website"
        }
    ])

    const [testimonialForm, setTestimonialForm] = useState({
        name: '',
        position: '',
        company: '',
        rating: '',
        message: '',
        project: ''
    })
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleSubmit = () => {
        if (!testimonialForm.name || !testimonialForm.message || !testimonialForm.rating) {
            toast.error('Please fill in all required fields')
            return
        }

        const newTestimonial = {
            id: testimonials.length + 1,
            name: testimonialForm.name,
            position: testimonialForm.position || "Client",
            company: testimonialForm.company || "Company",
            rating: parseInt(testimonialForm.rating),
            message: testimonialForm.message,
            date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            project: testimonialForm.project || "Project"
        }

        setTestimonials([newTestimonial, ...testimonials])
        setTestimonialForm({
            name: '',
            position: '',
            company: '',
            rating: '',
            message: '',
            project: ''
        })
        setIsDialogOpen(false)
        toast.success('Thank you for your testimonial!', {
            description: 'Your feedback has been added successfully.',
        })
    }

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ))
    }

    return (
        <>
            <Toaster position="top-center" />
            <section id="testimonials" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-white" data-aos="fade-down">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-12" data-aos-delay="600" data-aos="fade-down">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Client <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Testimonials</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            What my clients say about working with me and the results we&apos;ve achieved together
                        </p>

                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group">
                                    <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
                                    Add Testimonial
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                        <MessageSquare className="w-5 h-5" />
                                        Share Your Experience
                                    </DialogTitle>
                                    <DialogDescription>
                                        Your feedback helps me improve and shows potential clients what it&apos;s like to work with me.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name *</Label>
                                            <Input
                                                id="name"
                                                placeholder="Your full name"
                                                value={testimonialForm.name}
                                                onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="position">Position</Label>
                                            <Input
                                                id="position"
                                                placeholder="Your job title"
                                                value={testimonialForm.position}
                                                onChange={(e) => setTestimonialForm({ ...testimonialForm, position: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="company">Company</Label>
                                            <Input
                                                id="company"
                                                placeholder="Company name"
                                                value={testimonialForm.company}
                                                onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="project">Project Type</Label>
                                            <Input
                                                id="project"
                                                placeholder="e.g., Website Design"
                                                value={testimonialForm.project}
                                                onChange={(e) => setTestimonialForm({ ...testimonialForm, project: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="rating">Rating *</Label>
                                        <Select onValueChange={(value) => setTestimonialForm({ ...testimonialForm, rating: value })}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select rating" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                                                <SelectItem value="4">⭐⭐⭐⭐ Very Good</SelectItem>
                                                <SelectItem value="3">⭐⭐⭐ Good</SelectItem>
                                                <SelectItem value="2">⭐⭐ Fair</SelectItem>
                                                <SelectItem value="1">⭐ Poor</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Your Experience *</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell others about your experience working with me..."
                                            value={testimonialForm.message}
                                            onChange={(e) => setTestimonialForm({ ...testimonialForm, message: e.target.value })}
                                            rows={4}
                                        />
                                    </div>

                                    <Button
                                        onClick={() => handleSubmit()}
                                        className="w-full hover:-translate-y-1 shadow-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Submit Testimonial
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos-delay="600" data-aos="fade-up">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="w-14 h-14">
                                            <AvatarFallback className="bg-gray-800 text-white font-semibold">
                                                {testimonial.name.split(" ").map(n => n[0]).join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.position}</p>
                                            <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                                                <Building2 className="w-3 h-3" />
                                                <span>{testimonial.company}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                    {testimonial.message}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <Badge variant="secondary" className="text-xs">
                                        {testimonial.project}
                                    </Badge>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                        <Calendar className="w-3 h-3" />
                                        <span>{testimonial.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}