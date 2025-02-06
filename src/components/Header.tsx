import { type FC } from 'react'
import { cn } from '../app/lib/utils'
import { NavLink } from 'react-router-dom'


export interface HeaderProps {
    className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={cn(
            "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            "fixed top-0 left-0 right-0 z-50",
            "border-b border-border",
            "py-4",
            className
        )}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">

                        <h1 className="text-xl font-bold">Your Logo</h1>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink to="/about" className="text-sm font-medium transition-colors hover:text-primary">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                            Contact
                        </NavLink>
                        <NavLink to="/news" className="text-sm font-medium transition-colors hover:text-primary">
                            News
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;