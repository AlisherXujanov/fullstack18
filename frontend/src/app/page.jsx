import Image from "next/image"
import Heading from "./components/Heading"
import Searchbox from "./components/Searchbox"


export default function Home() {
  return (
    <div>
      {/* <h1>Hello world</h1> */}
      <Heading color='red' bg='black'>Home page</Heading>
      <Searchbox></Searchbox>
    </div>
  )
}
