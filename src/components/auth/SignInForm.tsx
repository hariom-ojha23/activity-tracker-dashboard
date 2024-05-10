'use-client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const SignInForm = () => {
  return (
    <Card className="w-[350px]  shadow-lg border-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Welcome back!</CardTitle>
        <CardDescription className="text-xs">
          Please enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-3">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-[13px] font-thin" htmlFor="email">
                Email <span className="text-primary">*</span>
              </Label>
              <Input id="email" type="email" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label className="text-[13px] font-thin" htmlFor="password">
                Password <span className="text-primary">*</span>
              </Label>
              <Input id="password" type="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full mb-1">Sign In</Button>

        <p className="text-[13px] hover:underline cursor-pointer">
          Forgot password?
        </p>

        <Link href="/auth/signup" className="text-[13px] hover:underline">
          Don't have an account? 
          <span className="ml-1 font-semibold text-primary">Sign Up</span>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default SignInForm