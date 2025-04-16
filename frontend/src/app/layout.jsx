import "../assets/styles/initial.scss"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
