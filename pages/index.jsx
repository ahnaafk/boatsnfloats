import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Button,
  Text,
  List,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoBehance,
  IoLogoMedium,
  IoLogoLinkedin
} from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
import ThumbNeuradao from '../public/images/contents/thumb-neuradao.png'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Boats n' Floats
            </Heading>
            <p>Floatation Device Company</p>
          </Box>
          <Box
            flexShrink={8}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ahnaaf.png"
              alt="profile pic"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            WE LAUNCH ON THE JUNE 7TH.
          </Heading>
          <Text text-align="centered">
            Cheer us on as we go big slatt slime.
          </Text>
          <br />
          <Text as="u" mt={'1rem'}>
            <Text as="b">Past experiences:</Text>
          </Text>
          <UnorderedList mt={'1rem'}>
            <ListItem>Physics Student Won the PHysics award</ListItem>
          </UnorderedList>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            On My Desk.
          </Heading>
          <SimpleGrid columns={[1, 2, 1]} gap={6} mt={2}>
            <GridItem
              href="https://neuradao.to"
              title="NeuraDAO"
              thumbnail={ThumbNeuradao}
            >
              First time founder @ NeuraDAO. We&apos;re building the future of
              neurotech research.
            </GridItem>
          </SimpleGrid>
          <Box align="center" my={5}>
            <NextLink href={'/portfolio'}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Check out my Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Connect w/ da SQUAAAD.
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ahnaaf-khan/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Ahnaaf Khan
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:ahnaafk@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={SiGmail} />}
                >
                  ahnaafk@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/ahnaafkk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @ahnaafkk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/ahnaafk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @ahnaafk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://ahnaafk.medium.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoMedium} />}
                >
                  @ahnaafk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.behance.net/ahnaafkhan" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoBehance} />}
                >
                  Ahnaaf Khan
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
