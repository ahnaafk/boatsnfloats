import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center" suppressHydrationWarning={true}>
    <LinkBox cursor={'pointer'} suppressHydrationWarning={true}>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        suppressHydrationWarning={true}
      />
      <LinkOverlay href={href} target="_blank" suppressHydrationWarning={true}>
        <Text mt={2} as="b" suppressHydrationWarning={true}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
    
  </Box>
)

export const PortfolioGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/portfolio/${id}`}>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/portfolio/${id}`} target="_blank">
          <Text as="b" mt={2}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const PortfolioItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}
  />
)
