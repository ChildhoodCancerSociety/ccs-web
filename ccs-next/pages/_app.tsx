import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

//import custom fonts
const gothamRounded = localFont({
  src: [
    {
      path: '../fonts/Gotham-Rounded/Gotham-Rounded-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Gotham-Rounded/Gotham-Rounded-Medium-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Gotham-Rounded/Gotham-Rounded-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../fonts/Gotham-Rounded/Gotham-Rounded-Light-Italic.otf',
      weight: '300',
      style: 'light-italic',
    },
    {
      path: '../fonts/Gotham-Rounded/Gotham-Rounded-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-gotham-rounded'
})

const futuraRounded = localFont({
  src: [
    {
      path: '../fonts/Futura-Rounded/Futura-Round-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Futura-Rounded/Futura-Round-Medium-Oblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Futura-Rounded/Futura-Round-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../fonts/Futura-Rounded/Futura-Round-Light-Oblique.ttf',
      weight: '300',
      style: 'light-italic',
    },
    {
      path: '../fonts/Futura-Rounded/Futura-Round-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-futura-rounded'
})

export default function App({ Component, pageProps }: AppProps) {
    return(
      <div className = {`${gothamRounded.variable} ${futuraRounded.variable} font-sans`} >
        <Component {...pageProps} />
      </div>
    ) 
}
