import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/product";
import {
  Heading,
  Wrap,
  WrapItem,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Container,
  Flex,Box
} from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductInfo() {
  const { setproductfav, items,addToCart } = useContext(productContext);

  const { id } = useParams();
  useEffect(() => {
    const detailHandle = async () => {
      await axios
        .get(`https://servermangodb.onrender.com/Product/${id}`)
        .then((res) => {
          setproductfav(res.data);
        })
        .catch((e) => console.log(e));
    };

    detailHandle();
  }, [id]);
  return (
    <ChakraProvider>
      <Container 
      display="flex" 
      flexDirection={"column"} 
      maxW="50%"
      maxH="100%"
      
      >



  
      <Card 
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        display="flex"
        justifyContent="center"
        alignItems="center"
        // padding="100px 50px"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "300px" }}
          src={items.img}
          alt="product"
        />

        <Stack display="flex" flexDirection={"column"}>
          <CardBody width={"500px"} padding={"50px"}>
            <Heading size="md" fontWeight="bold">
              {items.title}
            </Heading>

            <Text py="2" color={"hsl(228, 12%, 48%)"} >{items.des}</Text>
            <Text py="2" fontSize={"23px"} color={'gray'} fontWeight={'bold'}>
              $ {items.price}
            </Text>
            <Text py="2" color={"hsl(228, 12%, 48%)"} whiteSpace={"pre-line"}>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>


          
            
            <Wrap spacing={4}
            py="3" 
           
            >
      
            
              {items.color &&
                items.color.map((item) => (
                  <WrapItem>
                    <Button
                     border='2px'
                     borderColor='gray.300'
                      bg={item}
                     borderRadius='60px'
                     _hover={{ bg: item}}
                    ></Button>
                  </WrapItem>
                ))}
            </Wrap>

            <Wrap spacing={4}
            py="3" 
           
            >
      
            
              {items.size &&
                items.size.map((item) => (
                  <WrapItem>
                    <Button
                     
                     bg='white'
                     
                     borderRadius='2px'
                     _hover={{ bg:'gray.100'}}
                     
                    >{item}</Button>
                  </WrapItem>
                ))}
            </Wrap>


            <Button  onClick={()=>addToCart(items)} variant="solid" colorScheme=" white" color={'black'} 
           borderColor='gray'
           border={'1px'}
            >
              ADD TO CART
            </Button>
          </CardBody>
        </Stack>
  
      </Card>


     <Text fontSize={'32px'}>
       {items.title}
     </Text>
      </Container>
      <Flex justifyContent="center" alignItems="center" overflowX="auto">
    
      
    {items.images && items.images.map((image, index) => (
      <Box key={index} p={3}>
        <Image
          maxW="300px"
          maxH="300px"
          objectFit="contain"
        src={image} alt={`Image ${index}`}  />
      </Box>
    ))}
  </Flex>
    </ChakraProvider>
  );
}

export default ProductInfo;
