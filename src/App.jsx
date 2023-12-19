// // import Button from "./components/Button"
// import Image from "./components/image"
// import Banner from "./assets/banner.png"

import Container from "./components/Container";
import Flex from "./components/flex";
import Fresh from "./assets/Fresh.png";
import Navbar from "./components/layouts/Navbar";
import Banner from "./components/layouts/Banner";
 
// import Heading from "./components/Heading"

// import Banner2 from "./assets/banner2.png"
const App= () => {
  return (
    <>
       {/* <nav className="bg-primarycolor">
       <Container>
        <Flex>
           <div className="w-1/4">
 <img src={Fresh}  />
           </div>
           <div className="w-1/2">
adw
           </div>
           <div className="w-1/4">
qayp
           </div>
       </Flex>
       </Container>
  //  </nav> */}

      <Navbar/>   <Banner/> 
    </>
  );
}

export default App
  
// {/* <Image src={Banner}/>
// <Image src={Banner2}/> */}

// {/* <Button design="px-[25px] py-[15px] bg-teal-500 text-white rounded-lg  " text="buy now"/>
//        <Button design="px-[25px] py-[15px] bg-orange-500 text-white rounded-lg" text="sign up"/>
//        <Button text="login"/>
//        <Button text="registration"/> */}
       
        
// <Heading text="allwer" as="h1"/>
// <Heading text="allo" as="h2"/>