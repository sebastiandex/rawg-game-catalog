import Link from "next/link";
import Image from "next/image";
import {Container, ImageContainer, InfoContainer, InfoBlock, Title} from "./styles";
import noImage from './../../public/images/noimage.png';

const Tile = ({data}) => {
    const {slug, background_image, name, rating, released} = data;
    return (
        <Link
            href={{pathname: `game/${slug}`, query: {data: JSON.stringify(data)}}}
            passHref
            as={`game/${slug}`}
        >
            <Container>
                <ImageContainer>
                    <Image
                        alt='img'
                        layout='fill'
                        src={background_image || noImage}
                        placeholder='blur'
                        blurDataURL={noImage}
                    />
                </ImageContainer>
                <InfoContainer>
                    <Title>{name}</Title>
                    <InfoBlock>&#11088; &nbsp; {rating}</InfoBlock>
                    <InfoBlock>&#128197; &nbsp; {released}</InfoBlock>
                </InfoContainer>
            </Container>
        </Link>
    )
}

export default Tile