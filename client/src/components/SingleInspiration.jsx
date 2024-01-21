import { useLoaderData, Link, Form } from "react-router-dom"
import { activeUser } from "../utils/helpers/common"
import { Box, Image, Text, Button, VStack, HStack, Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react"




export default function SingleInspiration() {
  const selectedData = useLoaderData()
  const selectedInspiration = selectedData.data
  const owner = selectedData.data.owner.username

  const displayOwner = owner !== 'admin'
  
  
  const { id, image, city, country, description, places, reviews} = selectedInspiration
  console.log(selectedInspiration)

 
  console.log(selectedInspiration.owner.id)

  

  const groupedPlaces = {};
  places.forEach(place => {
    place.categories.forEach(category => {
      const categoryName = mapCategoryName(category.name);
      if (!groupedPlaces[categoryName]) {
        groupedPlaces[categoryName] = [];
      }
      groupedPlaces[categoryName].push(place);
    });
  });

  function mapCategoryName(name) {
    const nameMapping = {
      'restaurant': 'Restaurants',
      'bar': 'Bars',
      'landmark': 'Landmarks'
    };
    return nameMapping[name]
  }
  
  
  

  return (
    <>
      <VStack spacing={4} align="stretch">
      <Card  maxW='md' borderWidth="1px" borderRadius="lg" overflow="hidden" className="single-card">
        <CardHeader className='single-image'>
          <Image boxSize="500px" objectFit="cover" src={image} alt={`${city}`} />
          </ CardHeader>
          <CardBody className="single-body">
            <Text className='single-header' fontSize="xl">{city}, {country}</Text>
            {displayOwner && <Text>Created by user {owner}</Text>}
            <Text mt={4}>{description}</Text>
            </CardBody>
            <CardFooter>
            {activeUser() === selectedInspiration.owner.id && (
              <HStack>
                <Link to={`/home/${id}/edit`}>Edit</Link>
                <Form method="POST">
                  <Button type="submit">Delete</Button>
                </Form>
              </HStack>
            )}
            </CardFooter>
            
          </Card>
        
        {Object.entries(groupedPlaces).map(([category, categoryPlaces], index) => (
          <Box key={index}>
            <Text className='category' fontSize="lg" fontWeight="bold">{category}</Text>
            <HStack className='places-stack' spacing={4}>
              {categoryPlaces.map((place, placeIndex) => (
                <Box borderWidth="10px" borderRadius="lg" overflow="hidden" key={placeIndex}>
                  <Box className='single-box' p={5}>
                    <Text fontSize="md" fontWeight="bold" className="font-tag">{place.name}</Text>
                    <Text>{place.description}</Text>
                  </Box>
                </Box>
              ))}
            </HStack>
          </Box>
        ))}
        <Box>
          <Text fontSize="xl" fontWeight="bold">Reviews</Text>
          {reviews && reviews.map((review, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Text fontWeight="bold">{review.owner.username}</Text>
              <Text fontSize="sm">{review.text}</Text>
              <Text fontSize="xs">{new Date(review.created_at).toLocaleDateString()}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </>
  )
}


