'use client'

import React from 'react'
import { SidebarMenu } from './SidebarMenu'
import { SidebarProps } from '@/types/sidebar'
import { Separator } from '../ui/separator'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOut, MoreHorizontal, User } from 'lucide-react'
import Link from 'next/link'
import SidebarButton from './SidebarButton'

const SidebarDesktop = ({ sidebarItems }: SidebarProps) => {
    return (
        <aside className='w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r'>
            <div className="h-full px-3 py-4">
                <h3 className="mx-3 text-lg font-semibold text-foreground">
                    Work Monitor
                </h3>

                <div className='mt-5'>
                    <div className="flex flex-col gap-2 wfull">
                        {sidebarItems.map((item) => (
                            <SidebarMenu key={item.title} item={item} />
                        ))}
                    </div>

                    <div className='absolute left-0 bottom-3 w-full px-3'>
                        <Separator className='absolute -top-3 left-0 w-full' />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant='ghost' className='w-full justify-start'>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className="flex items-center gap-2">
                                            <Avatar className='w-6 h-6'>
                                                <AvatarImage src='https://github.com/hariom-ojha23.png' />
                                                <AvatarFallback>Hariom Ojha</AvatarFallback>
                                            </Avatar>

                                            <span>Hari om Ojha</span>
                                        </div>

                                        <MoreHorizontal size={20} />
                                    </div>
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className='mb-2 w-60 p-2 rounded-[1rem]'>
                                <Link href='/profile'>
                                    <SidebarButton className='w-full rounded-xl' variant='ghost'  icon={User}>
                                        Profile
                                    </SidebarButton>
                                </Link>
                                
                                <Button className='w-full justify-start rounded-xl' variant='ghost'>
                                    <div className='flex gap-2'>
                                        <LogOut className='h-5 w-5' />
                                        Logout
                                    </div>
                                </Button>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </aside>    
    )
}

export default SidebarDesktop