import NextLink from 'next/link';
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
    useColorModeValue
} from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Container my={5}>
            <Heading as='h1'>Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider
            my={4}
            borderWidth={1}
            borderColor={useColorModeValue('#1a202c', '#eeeeee')}
          />
            <Box my={6} align='center'>
                <NextLink href='/'>
                    <Button colorScheme={'teal'}>Return to home.</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound