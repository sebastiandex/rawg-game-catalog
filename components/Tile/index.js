import Link from "next/link";
import Image from "next/image";
import {Container, Title} from "./styles";
import noImage from './../../public/images/noimage.jpeg';

const Tile = ({data}) => {
    const {slug, background_image, name, rating, released} = data;
    return (
        <Link
            href={{pathname: `game/${slug}`, query: {data: JSON.stringify(data)}}}
            passHref
            as={`game/${slug}`}
        >
            <Container>
                <Image
                    alt='img'
                    height='144'
                    width='250'
                    src={background_image || noImage}
                />
                <Title>{name}</Title>
                <div>&#11088; &nbsp; {rating}</div>
                <div>&#128197; &nbsp; {released}</div>
            </Container>
        </Link>


    )
}

export default Tile