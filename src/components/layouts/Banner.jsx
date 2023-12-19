 
import Container from '../Container'
import Flex from '../flex'
import Image from '../image'
import Model from "../../assets/model.png";
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
 
// import Flex from "./components/flex";
const Banner = () => {
  return (
    <section> <Container>
 <Flex className="justify-between">
    <div className="w-1/2">
        <Heading className=" font-pop   font-semibold  text-mainheading pr-[152px]" text="Find The Best Fashion Style 
For You" as="h1"/>
<Paragraph className="text-para" text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
<Button className="text-[24px] text-white bg-black border-none hover:bg-black mt-10" text="SHOP NOW"/>
    </div>
    <div className="w-1/2">
         <Image src={Model}/>
    </div>
 </Flex>
        </Container></section>
  )
}

export default Banner