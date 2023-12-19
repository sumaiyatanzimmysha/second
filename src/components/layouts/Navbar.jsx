import React from 'react'
import Container from '../Container'
import Flex from '../flex'
import List from '../List'
import Image from '../image'
import Fresh from '../../assets/Fresh.png'
import Button from '../Button'
const Navbar = () => {
  return (
     <nav className='bg-primarycolor'> 
       <Container>
          
        <Flex> 
        <div className="w-1/4 py-12"> <Image src={Fresh}/></div>
       
            <div className="w-1/2 py-14">
            <ul> 
            <Flex className="justify-evenly"> 
             <List href="https://tailwindcss.com/" target="_blank" text="Men"/>
                <List href="#" text="Woman"/>
                <List href="#" text="Kids"/>
                <List href="#" text="Collection"/>
                <List href="#" text="Trends"/> </Flex>
                
                 
            </ul>
            </div>
            <div className="w-1/4 py-12 text-right">
               <Button text="Login"/>
               <Button className= "ml-6" text="Signup"/>
            </div>
             </Flex>
        </Container>  
     </nav>
  )
}

export default Navbar