import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, PortfolioImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="liberia ">
      <Container>
        <Title>
          Electrify Liberia <Badge>2021</Badge>
        </Title>
        <PortfolioImage
          src="../../images/contents/thumb-liberia.png"
          alt="liberia"
        />
        <p>
          Capstone project @ TKS Activate focused on social entrepreneurship. My
          team (Raina Bornstein, Sanvi Rao, and I) honed in on the issue of
          electricity poverty in Liberia. Despite being one of the poorest
          countries in the world, their electricity bills are 6x that of
          Canada&apos;s.
          <br />
          <br />
          My team proposed the solution of hybrid diesel-solar generators to
          provide cheaper, reliable, and accesible electricity to Liberian
          residents.
        </p>
        <List my={4}>
          <ListItem>
            <Meta>Article</Meta>
            <Link href="https://sanviiraoo.medium.com/why-90-of-liberia-lives-in-the-dark-bc14e91e3164" ml={'0.55rem'}>
            https://sanviiraoo.medium.com/why-90-of-liberia-lives-in-the-dark-bc14e91e3164 <ExternalLinkIcon mx={2} mb={1.5} />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
