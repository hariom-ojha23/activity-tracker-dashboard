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
import { Minus } from 'lucide-react'

const VerifyEmailForm = () => {
  return (
    <Card className="w-[350px]  shadow-lg border-none">
        <CardHeader>
        <CardTitle className="text-xl font-[500] flex items-center">
            Almost there <Minus /> Check your inbox
        </CardTitle>
        <CardDescription className="text-xs">
            To finish signing up, enter the code we just sent to<br />
            hari.om.18659@gmail.com
        </CardDescription>
        </CardHeader>
        <CardContent>
        <form>
            <div className="grid w-full items-center gap-3">
            <div className="flex flex-col space-y-1.5">
                <Label className="text-[13px] font-thin" htmlFor="otp">
                Code <span className="text-primary">*</span>
                </Label>
                <Input id="otp" />
            </div>
            </div>
        </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
        <Button className="w-full mb-1">Verify OTP</Button>

        <p className="text-[13px] hover:underline cursor-pointer">
            Didn't receive a code? 
            <span className="ml-1 font-semibold text-primary">Resend Code</span>
        </p>
        </CardFooter>
    </Card>
  )
}

export default VerifyEmailForm