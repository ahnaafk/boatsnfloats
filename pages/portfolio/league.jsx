import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="league ">
      <Container>
        <Title>
          Playing League of Legends With BCIs <Badge>2020</Badge>
        </Title>
        <PortfolioImage
          src="../../images/contents/thumb-league.png"
          alt="league"
        />
        <p>
          This was my second Brain-Computer Interface project that I built when
          I was 15. The content is both nostalgic, and nearly embarrassing as I
          look back on it. I hope you enjoy.
          <br />
          <br />
          This is a neurofeedback program which asseses my relaxation using my EEG while
          playing League of Legends and pings me when I&apos;m too tense. This was
          one of the more enjoyable projects that I built, it had no functional
          utility, only comedic relief.
        </p>
        <List my={4}>
          <ListItem>
            <Meta>Youtube</Meta>
            <Link
              href="https://www.youtube.com/watch?v=Ii9A0FS8JIs"
              ml={'0.55rem'}
            >
              https://www.youtube.com/watch?v=Ii9A0FS8JIs{' '}
              <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Article</Meta>
            <Link
              href="https://ahnaafk.medium.com/creating-a-neurofeedback-program-with-python-c6153022a4e7"
              ml={'0.9rem'}
            >
              https://ahnaafk.medium.com/creating-a-neurofeedback-program-with-python-c6153022a4e7{' '}
              <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/ahnaafk/neurofeedback" ml={'1.1rem'}>
            https://github.com/ahnaafk/neurofeedback <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Brainflow, Python, OpenBCI-Ganglion, League of Legends
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
