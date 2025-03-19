import Image from "next/image"
import Heading from "./components/Heading"


export default function Home() {
  return (
    <div>
      {/* <h1>Hello world</h1> */}
      <Heading color='red' bg='black'>Home page</Heading>
      <Heading color='snow' bg='red'>Test text</Heading>
      <Heading color='cyan' bg='#333'></Heading>
    </div>
  )
}
