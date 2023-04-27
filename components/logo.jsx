import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 22px;
    display: inline-flex;
    align-items: center;
    height: 60px;
    line-height: 20px
    padding: 10px; 
`

const Logo = () => {
    const faceImg = '/images/ahnaaf-face.png'

    return (
        <Link href='/'>
            <a href="">
                <LogoBox>
                    <Image src={faceImg} width={40} height={40} alt='logo'/>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="Satoshi"
                        fontWeight='800'
                        ml={3}
                        mb={1}
                        >
                        ahnaafk
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo