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
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from 'react-hot-toast';
import axios from 'axios'
import { baseUrl } from '@/lib/utils'

const signupFormSchema = z.object({
    name: z.string().min(4, {message: 'Full name must contain atleast 4 charcter'}).max(50),
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    confirmPassword: z.string().min(6, {message: 'Password must be at least 6 characters'}),
})

const SignUpForm = () => {
    const router = useRouter()

    const signUpForm = useForm<z.infer<typeof signupFormSchema>>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    })

    const [disable, setDisable] = React.useState<boolean>(false)

    async function onSubmit(values: z.infer<typeof signupFormSchema>) {
        if (values.password !== values.confirmPassword) {
            toast.error('Passwords do not match')
            return
        }

        try {
            setDisable(true)
            await axios.post(`${baseUrl}/api/users/signup`, values)

            toast.success('Account created successfully')
            router.push('/auth/signin')
        } catch (error: any) {
            toast.error(error.response.data.error || error.message)
        } finally {
            setDisable(false)
        }
    }

    return (
        <Card className='w-[350px]  shadow-lg border-none'>
            <CardHeader>
                <CardTitle className='text-xl font-semibold'>
                    Get started today!
                </CardTitle>
                <CardDescription className='text-xs'>
                    Please enter your details to create your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...signUpForm}>
                    <form onSubmit={signUpForm.handleSubmit(onSubmit)}>
                        <FormField
                            control={signUpForm.control}
                            name='name'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='text-[13px] '>
                                        Full Name
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
                            control={signUpForm.control}
                            name='email'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='text-[13px] '>
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
                            control={signUpForm.control}
                            name='password'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='text-[13px] '>
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

                        <FormField
                            control={signUpForm.control}
                            name='confirmPassword'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='text-[13px] '>
                                        Confirm Password
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
                            <Button type='submit' disabled={disable} className='w-full mb-1'>Sign Up</Button>

                            <Link
                                href='/auth/signin'
                                className='text-[13px] hover:underline text-center'
                            >
                                Already have an account?
                                <span className='ml-1 font-semibold text-primary'>
                                    Sign In
                                </span>
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SignUpForm