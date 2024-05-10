import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { SidebarButtonProps } from '@/types/sidebar'

const SidebarButton = ({icon: Icon, className, children, ...props}: SidebarButtonProps) => {
  return (
    <Button className={cn('gap-2 justify-start', className)} {...props}>
        {Icon && <Icon className='h-5 w-5' />}
        <span>{ children }</span>
    </Button>
  )
}

export default SidebarButton