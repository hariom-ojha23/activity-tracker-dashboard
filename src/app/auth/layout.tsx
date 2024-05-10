import * as React from 'react'

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="h-screen flex justify-center items-center bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
            {children}
        </section>
    )
}