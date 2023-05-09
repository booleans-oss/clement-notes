import { Inter, Montserrat } from 'next/font/google';

export const body = Inter({
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    subsets: ['latin'],
})

export const heading = Montserrat({
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
    subsets: ['latin'],
})