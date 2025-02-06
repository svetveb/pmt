import { type FC } from 'react'
import { cn } from '../app/lib/utils'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export interface FooterProps {
    className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer className={cn(
            "bg-primary text-primary-foreground",
            "mt-auto py-8",
            className
        )}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-primary-foreground/80">
                            Your company description here
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="space-y-2">
                            <a href="#home" className="text-sm hover:text-primary-foreground/80">
                                Home
                            </a>
                            <a href="#about" className="text-sm hover:text-primary-foreground/80">
                                About
                            </a>
                            <a href="#services" className="text-sm hover:text-primary-foreground/80">
                                Services
                            </a>
                            <a href="#contact" className="text-sm hover:text-primary-foreground/80">
                                Contact
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                        <div className="flex gap-6">
                            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 border-t pt-8">
                    <p className="text-sm text-primary-foreground/80">
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;