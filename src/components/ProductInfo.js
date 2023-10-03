import React,{useContext,useEffect,useState} from 'react'
import { productContext } from '../context/product';
import { Badge,Heading,Wrap,WrapItem, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Container, Divider, HStack, Image, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductInfo() {

    const {setproductfav,items}=useContext(productContext)

    const {id}=useParams()
    useEffect(() => {
      const detailHandle=async ()=>{
        await axios.get(`http://localhost:5000/Product/${id}`).then((res) => {
          setproductfav(res.data)
      
        })
        .catch((e) => console.log(e));
      }

      detailHandle()
     
    }, [id]);

  return (
    <ChakraProvider>
<Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'

  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src={items.img}
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>{items.title}</Heading>
  
        <Text py='2'>
         {items.des}
        </Text>
        <Text py='2'>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
        </Text>
        <Text py='2'>
         ${items.price}
        </Text>
      </CardBody>
 
  <Wrap spacing={4}>

    {
  items.color&&items.color.map(item=>(
    
       <WrapItem >
      <Button colorScheme={item} >red</Button>
    </WrapItem>

      )
        

      )
    }
    </Wrap>
      <CardFooter>
        <Button variant='solid' colorScheme=" blue">
          Buy Latte
        </Button>
      </CardFooter>
    </Stack>

    
  </Card>
    </ChakraProvider>
    
  )
}

export default ProductInfo
