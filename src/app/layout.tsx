import type { Metadata } from 'next'
import React from 'react';
 
// These styles apply to every route in the application
import './index.css'
 
export const metadata: Metadata = {
  title: 'Martin Bungner',
  description: 'Generated by create next app',
  keywords: 'martin bungner, martinbungner, martin, bungner, carl martin, carlmartin, carl, cm, cm edwards, cmedwards, carl edwards, carledwards, carl martin bungner edwards, carlmartinbungneredwards, mbng, mbng47, development, developer, web developer, webdeveloper, web development, webdevelopment, utveckling, utvecklare, mjukvaruutvecklare, mjukvaruutveckling, system, systemutveckling, systemutvecklare, systemvetare, itsystem, it-system, it, itutveckling, itutvecklare, it-utveckling, it-utvecklare, fedeqken'
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}