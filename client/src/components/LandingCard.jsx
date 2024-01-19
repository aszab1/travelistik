import { Box, Image, Text, Heading } from '@chakra-ui/react'

export default function LandingCard(){

  return (
    <Box d="flex" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Box p="6">
      <Heading mb="4">Discover and Organize Your Favorite Places!</Heading>
      <Text>
        Discovered a trendy cafe on social media? Got a tip about a must-visit restaurant? Looking for travel destination ideas? How will you keep track of them all? Skip the hassle of notes, screenshots, and messages. Effortlessly save, categorize, and share your favorite spots in cities across the globe!
      </Text>
    </Box>
    <Image src="path_to_your_image.jpg" alt="image" />
  </Box>
  )
}