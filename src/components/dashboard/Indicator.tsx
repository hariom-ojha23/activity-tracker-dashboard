import * as React from 'react'
import { Card } from '../ui/card'
import { Users } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IndicatorProps {
    title: string
    value: number
    className?: string
}

const Indicator = ({ className, ...indicator }: IndicatorProps) => {
    return (
        <Card className='relative h-full w-full lg:max-w-[250px] shadow-lg border-b-primary border-b-[3px]'>
            <div className={cn(
                'absolute -top-4 left-4 h-12 w-12 rounded-lg flex justify-center items-center', 
                className ? className : 'bg-primary text-white'
            )}>
                <Users />
            </div>

            <div className='w-full p-2'>
                <p className='text-xs text-right font-semibold text-gray-400'>{ indicator.title }</p>
                <p className='text-md text-right font-semibold'>{ indicator.value }</p>
            </div>
        </Card>
    )
}

export default Indicator
