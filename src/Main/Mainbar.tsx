'use client'

import React, { useState, useEffect } from 'react'
import { PanelLeftOpen, PanelLeftClose, Home, IdCard, Briefcase, Menu, FolderOpen, Code, MessageSquare, Mail } from 'lucide-react'

const navigationItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: IdCard },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Skills', href: '#skills', icon: Code },
//    { name: 'Testimonials', href: '#testimonials', icon: MessageSquare },
    { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Mainbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2 
            let currentSection = 'home'

            navigationItems.forEach((item) => {
                const section = document.getElementById(item.href.substring(1))
                if (section) {
                    const offsetTop = section.offsetTop
                    const offsetBottom = offsetTop + section.offsetHeight
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        currentSection = item.href.substring(1)
                    }
                }
            })


            const lastSection = document.getElementById('contact')
            if (lastSection && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                currentSection = 'contact'
            }

            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() 
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const NavLink = ({ item, onClick }: { item: typeof navigationItems[0], onClick?: () => void }) => {
        const Icon = item.icon
        const isActive = activeSection === item.href.substring(1)
        return (
            <a
                href={item.href}
                onClick={onClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-800 hover:text-white'}`}
            >
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="font-medium">{item.name}</span>
            </a>
        )
    }

    return (
        <>
            <nav className="hidden lg:flex items-center justify-center fixed top-6 left-1/2 transform -translate-x-1/2 z-50" data-aos-duration="1000" data-aos="fade-down">
                <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-full px-6 py-3 shadow-lg">
                    <div className="flex items-center space-x-8">
                        {navigationItems.map((item) => {
                            const Icon = item.icon
                            const isActive = activeSection === item.href.substring(1)
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 group ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-lg'}`}
                                >
                                    <Icon className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                                    <span className="font-medium text-sm">{item.name}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </nav>

            <div className="lg:hidden fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 p-2 rounded-lg"
                >
                    <PanelLeftOpen className="h-5 w-5" />
                </button>

                <div
                    className={`fixed top-0 right-0 h-full w-60 bg-white border-l border-gray-200 p-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    style={{ zIndex: 50 }}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                                <Menu size={20} />
                                Navigation
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-gray-100 p-2 rounded-full"
                                aria-label="Close navigation menu"
                            >
                                <PanelLeftClose className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex-1 py-6">
                            <div className="space-y-2 px-6">
                                {navigationItems.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        item={item}
                                        onClick={() => setIsOpen(false)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100">
                            <p className="text-sm text-gray-500 text-center">
                                © {new Date().getFullYear()} Portfolio
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}