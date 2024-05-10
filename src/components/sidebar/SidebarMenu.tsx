'use client'

import * as React from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/hooks/useSidebar'
import { buttonVariants } from '@/components/ui/button'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/sidebar/SubmenuAccordion'

import { ChevronDownIcon } from 'lucide-react'
import { SidebarMenuProps } from '@/types/sidebar'

export function SidebarMenu({ item }: SidebarMenuProps) {
    const path = usePathname()
    const { isOpen } = useSidebar()

    const [openItem, setOpenItem] = React.useState<string>('')
    const [lastOpenItem, setLastOpenItem] = React.useState<string>('')

    React.useEffect(() => {
        if (isOpen) {
            setOpenItem(lastOpenItem)
        } else {
            setLastOpenItem(openItem)
            setOpenItem('')
        }
    }, [isOpen])

    if (item.isChidren) {
        return (
            <Accordion
                type='single'
                collapsible
                className='space-y-2'
                key={item.title}
                value={openItem}
                onValueChange={setOpenItem}
            >
                <AccordionItem value={item.title} className='border-none '>
                    <AccordionTrigger
                        className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            'group relative flex h-10 justify-between px-4 py-2 text-base duration-200'
                        )}
                    >
                        <div>
                            <item.icon className={cn('h-5 w-5', item.color)} />
                        </div>
                        <div
                            className={cn(
                                'absolute left-12 text-sm duration-200',
                                !isOpen && ''
                            )}
                        >
                            {item.title}
                        </div>

                        {isOpen && (
                            <ChevronDownIcon className='h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200' />
                        )}
                    </AccordionTrigger>
                    <AccordionContent className='mt-2 space-y-2 pb-1'>
                        {item.children?.map((child) => (
                            <Link
                                key={child.title}
                                href={child.href}
                                className={cn(
                                    buttonVariants({ variant: 'ghost' }),
                                    'group relative flex h-10 justify-start gap-x-3',
                                    path === child.href && 'bg-primary font-bold hover:bg-primary'
                                )}
                            >
                                <child.icon
                                    className={cn('h-5 w-5', child.color)}
                                />
                                <div
                                    className={cn(
                                        'absolute left-12 text-sm duration-200',
                                        !isOpen && ''
                                    )}
                                >
                                    {child.title}
                                </div>
                            </Link>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )
    }

    return (
        <Link
            key={item.title}
            href={item.href}
            onClick={() => ('')}
            className={cn(
                buttonVariants({ variant: 'ghost' }),
                'group relative flex h-10 justify-start',
                path === item.href && 'bg-primary font-bold hover:bg-primary'
            )}
        >
            <item.icon className={cn('h-5 w-5', item.color)} />
            <span
                className={cn(
                    'absolute left-12 text-sm duration-200',
                    !isOpen && ''
                )}
            >
                {item.title}
            </span>
        </Link>
    )
}
