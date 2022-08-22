import Link from "next/link";
import Image from "next/image";
import {Container, Title} from "./styles";

const Tile = ({data}) => {
    const {slug, background_image, name, id, rating, released} = data;
    return (
        <Link
            href={{pathname: `games/${slug}`, query: {data: JSON.stringify(data)}}}
            passHref
            as={`games/${slug}`}
        >
            <Container>
                <Image
                    height='144'
                    width='250'
                    src={background_image}
                />
                <Title>{name}</Title>
                <div>Рейтинг: {rating}</div>
                <div>Дата релиза:{released}</div>
            </Container>
        </Link>


    )
}

export default Tile