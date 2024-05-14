import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const baseUrl = (
    process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL
) as string

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
