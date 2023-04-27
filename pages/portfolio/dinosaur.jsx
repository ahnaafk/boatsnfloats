import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Dinosaur ">
      <Container>
        <Title>
          Playing the Dino Game With My Brain <Badge>2020</Badge>
        </Title>
        <PortfolioImage
          src="../../images/contents/thumb-dinosaur.png"
          alt="dinosaur"
        />
        <p>
          This was my first Brain-Computer Interface project that I built when I
          was 15. The content is both nostalgic, and nearly embarrassing as I
          look back on it. I hope you enjoy.
          <br />
          <br />I used the OpenBCI Ganglion Board to read my EMG data and press
          space on my computer whenver I flexed my muscle. I used Brainflow to
          interface w/ my BCI.
        </p>
        <List my={4}>
          <ListItem>
            <Meta>Youtube</Meta>
            <Link
              href="https://www.youtube.com/watch?v=Gew-nY42T_s"
              ml={'0.55rem'}
            >
              https://www.youtube.com/watch?v=Gew-nY42T_s{' '}
              <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Article</Meta>
            <Link
              href="https://ahnaafk.medium.com/how-i-played-the-chrome-dino-game-with-my-brain-signals-984b2f1a7b04"
              ml={'0.9rem'}
            >
              https://ahnaafk.medium.com/how-i-played-the-chrome-dino-game-with-my-brain-signals-984b2f1a7b04{' '}
              <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Brainflow, Python, OpenBCI-Ganglion</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
