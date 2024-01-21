import { useState, useEffect } from 'react'
import { Box, Heading, Text, Image, Card, Stack, CardBody } from '@chakra-ui/react'

// Local images
import machuPicchu from '../assets/images/MachuPicchu.jpg'
import petra from '../assets/images/Petra.jpg'
import babylon from '../assets/images/HangingGardensOfBabylon.jpg'
import pyramid from '../assets/images/pyramid.jpg'
import rio from '../assets/images/Rio.jpg'
import colosseum from '../assets/images/RomanColosseum.jpg'

export default function LandingCard() {
  const images = [machuPicchu, petra, pyramid, rio, colosseum, babylon]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length)
    }, 5500)

    return () => clearInterval(interval);
  }, [images.length])

  return (
    <Card className='landing-div'
  direction={{ base: 'column', lg: 'row' }}
  overflow='hidden'
  variant='outline'
>
      <Stack>
        <CardBody className='landing-body'>
        <Heading className='heading-text' size='md'>Discover and Organize Your Favorite Places with Travelistik!</Heading>
        <Text className='landing-text'>
        Got a tip about a must-visit restaurant? < br />Discovered a trendy bar on social media?  <br/> Looking for travel destination ideas? <br /> Effortlessly save and share your favorite spots in cities across the globe!
        </Text>
        </CardBody>
      </Stack>
      <Box width={{ base: '100%', sm: '50%' }}>
        <Image className='landing-img' src={images[currentImageIndex]} alt={`image ${currentImageIndex + 1}`} />
      </Box>
    </Card>
  )
}


