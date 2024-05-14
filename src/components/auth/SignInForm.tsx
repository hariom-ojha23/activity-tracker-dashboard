'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { baseUrl } from '@/lib/utils'

const signinFormSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' }),
})

const SignInForm = () => {
    const router = useRouter()

    const signInForm = useForm<z.infer<typeof signinFormSchema>>({
        resolver: zodResolver(signinFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const [disable, setDisable] = React.useState<boolean>(false)

    async function onSubmit(values: z.infer<typeof signinFormSchema>) {
        try {
            setDisable(true)
            const response = await axios.post(`${baseUrl}/api/users/signin`, values, {
                withCredentials: true
            })
            let user = response.data

            toast.success(`Good to see you again, ${user.name}`, {
                duration: 2000,
            })

            if (user.verified) router.push('/dashboard')
            else router.push('/auth/verify-email')

        } catch (error: any) {
            toast.error(error.message || error.response.data.error)
        } finally {
            setDisable(false)
        }
    }

    return (
        <Card className='w-[350px]  shadow-lg border-none'>
            <CardHeader>
                <CardTitle className='text-xl font-semibold'>
                    Welcome back!
                </CardTitle>
                <CardDescription className='text-xs'>
                    Please enter your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...signInForm}>
                    <form onSubmit={signInForm.handleSubmit(onSubmit)}>
                        <FormField
                            control={signInForm.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[13px]'>
                                        Email Address
                                        <span className='ml-1 text-primary'>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={signInForm.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-[13px]'>
                                        Password
                                        <span className='ml-1 text-primary'>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage className='text-red-600' />
                                </FormItem>
                            )}
                        />

                        <div className='flex flex-col gap-3 mt-5'>
                            <Button disabled={disable} type='submit' className='w-full mb-1'>Sign In</Button>

                            <p className='text-[13px] hover:underline cursor-pointer text-center'>
                                Forgot password?
                            </p>

                            <Link
                                href='/auth/signup'
                                className='text-[13px] hover:underline text-center'
                            >
                                Don't have an account?
                                <span className='ml-1 font-semibold text-primary'>
                                    Sign Up
                                </span>
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SignInForm
