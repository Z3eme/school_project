import './globals.css'

export const metadata = {
  title: 'Codifyr',
  description: 'Learn programming with us!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
