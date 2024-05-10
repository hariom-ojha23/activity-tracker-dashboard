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

const SignUpForm = () => {
  return (
    <Card className="w-[350px]  shadow-lg border-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Get started today!</CardTitle>
        <CardDescription className="text-xs">
          Please enter your details to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-3">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-[13px] font-thin" htmlFor="name">
                Full Name <span className="text-primary">*</span>
              </Label>
              <Input id="name" type="text" />
            </div>

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

            <div className="flex flex-col space-y-1.5">
              <Label className="text-[13px] font-thin" htmlFor="confirm-password">
                Confirm Password <span className="text-primary">*</span>
              </Label>
              <Input id="confirm-password" type="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full mb-1">Sign Up</Button>

        <Link href="/auth/signin" className="text-[13px] hover:underline">
          Already have an account? 
          <span className="ml-1 font-semibold text-primary">Sign In</span>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default SignUpForm