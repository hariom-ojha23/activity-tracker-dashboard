'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { SidebarMenuProps } from '@/types/sidebar'

export function SidebarMenu({ item }: SidebarMenuProps) {
    const path = usePathname()

    return (
        <Link
            key={item.title}
            href={item.href}
            className={cn(
                buttonVariants({ variant: 'ghost' }),
                'group relative flex h-10 justify-start',
                path === item.href && 'bg-primary font-bold hover:bg-primary'
            )}
        >
            <item.icon className='h-5 w-5' />
            <span className='absolute left-12 text-sm duration-200'>
                {item.title}
            </span>
        </Link>
    )
}
