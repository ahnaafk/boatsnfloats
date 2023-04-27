import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="neuradao ">
      <Container>
        <Title>
        NeuraDAO <Badge>2021</Badge>
        </Title>
        <PortfolioImage src='../../images/contents/thumb-neuradao.png' alt='NeuraDAO' />
        <p>
          A DeSci DAO to accelerate neurotech research & development. We&apos;re
          one of the first DeSci DAOs and are leading the DeSci movement in
          product, tokenomics, and governance.
        </p>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.neuradao.to/' ml={'0.55rem'} >
            https://www.neuradao.to/ <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Memo</Meta>
            <Link href='https://bit.ly/neuradao_preseed' ml={'1.5rem'} >
            https://bit.ly/neuradao_preseed <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Twitter</Meta>
            <Link href='https://twitter.com/neuradao' ml={'0.5rem'} >
            https://twitter.com/neuradao <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
