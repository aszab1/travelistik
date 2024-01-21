import { Link as RouterLink } from 'react-router-dom'
import { Box, Image, Text, Button, Grid, Flex, Heading, Container, Card, CardHeader, CardBody, CardFooter,useDisclosure } from '@chakra-ui/react'
import { BiLike, BiChat } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken } from '../utils/helpers/common'
import ReviewForm from './Reviewform'


export default function Inspirations({ inspirations }) {

  const [likes, setLikes] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedInspirationId, setSelectedInspirationId] = useState(null)

  const handleReviewButtonClick = (id) => {
    setSelectedInspirationId(id)
    onOpen()
  }


  

  useEffect(() => {
    const initialLikes = {}
    inspirations.forEach(inspo => {
      initialLikes[inspo.id] = { count: inspo.likeCount || 0, liked: inspo.userLiked || false }
    })
    setLikes(initialLikes)
  }, [inspirations])

  const handleLike = async (id) => {
    try {
      const response = await axios.patch(`/api/inspirations/${id}/like/`, null, {
        validateStatus: () => true,
        headers: {
          Authorization: `Bearer ${getToken()}`
        } 
      })
      console.log(likes)
      if (response.status === 201 || response.status === 204) {
        setLikes(prevLikes => {
          const isLiked = prevLikes[id] ? prevLikes[id].liked : false
          const likeCount = prevLikes[id] ? prevLikes[id].count : 0
          
          return {
            ...prevLikes,
            [id]: {
              count: isLiked ? likeCount - 1 : likeCount + 1,
              liked: !isLiked
            }
          }
        })
      }
    } catch (error) {
      console.error('Error liking inspiration:', error)
    }
  }


  return (
    <>
      <Box textAlign="center" p={30} mb={5}>
        <Heading className='heading-text' fontWeight="bold" m={4}>Travel Inspirations</Heading>
      </Box>

      <Container maxW="container.xl" p={50}>
        <Flex direction={{ base: "column", lg: "row" }}>
          <Grid flex={1} templateColumns="repeat(auto-fill, minmax(350px, 1fr))" gap={100}>
            {inspirations && inspirations.map(inspo => {
              const { id, image, city, country } = inspo
              const likeData = likes[id] || { count: 0, liked: false }
              return (
                <Card key={id} maxW='md' borderWidth="1px" borderRadius="lg" overflow="hidden" className="inspo-card">
                  <CardHeader>
                    <RouterLink to={`/home/${id}`}>
                      <Image objectFit='cover' src={image} alt={`${city}`} className="inspo-image" />
                    </RouterLink>
                  </CardHeader>
                  <CardBody p={4} className="inspo-content">
                    <Text>{`${city}, ${country}`}</Text>
                  </CardBody>
                  <CardFooter justifyContent="space-between" flexWrap='wrap' sx={{ '& > button': { minW: '136px' } }}>
                    <Button size="sm" variant='ghost' leftIcon={<BiLike />} onClick={() => handleLike(inspo.id)} colorScheme={likes[inspo.id]?.liked ? 'blue' : 'gray'}>
                    {likeData.count > 0 ? `${likeData.count} Likes` : 'Like'}
                    </Button>
                    <Button size="sm" variant='ghost' leftIcon={<BiChat />} onClick={() => handleReviewButtonClick(id)}>Review</Button>
                  </CardFooter>
                </Card>
              )
            })}
          </Grid>
          <Box p={5} ml={{ lg: 6 }} mt={{ base: 6, lg: 0 }} w={{ lg: "300px" }} className="sidebar">
            <Text className='sidebar-text' fontSize="lg" mb={4}>Share your destination.</Text>
            <RouterLink to="/home/create" className="btn-share">Share Now</RouterLink>
          </Box>
        </Flex>
      </Container>
      <ReviewForm isOpen={isOpen} onClose={onClose} inspirationId={selectedInspirationId} />
    </>
  )
} 