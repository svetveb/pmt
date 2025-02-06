import { type FC } from 'react'
import { cn } from '../app/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export interface NavigationMenuProps {
    className?: string
}

export const NavigationMenu: FC<NavigationMenuProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={cn(
            "bg-primary/90 backdrop-blur supports-[backdrop-filter]:bg-primary/60",
            "fixed top-[72px] left-0 right-0 z-40",
            "border-b border-border",
            "py-3",
            className
        )}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">

                        <h2 className="text-sm font-semibold">Your Logo</h2>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-full hover:bg-primary/20"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-primary-foreground" />
                        ) : (
                            <Menu className="h-6 w-6 text-primary-foreground" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}