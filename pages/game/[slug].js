import {useRouter} from "next/router";
import Link from "next/link";
import {API, API_KEY} from "../../constants";
import {useState} from "react";
import Image from "next/image";
import {BackButton, Description, TopBlock, MainContainer, Span, StyledLink, Title, InfoBlock} from "./styles";
import SwiperView from "../../components/Swiper";
import noImage from './../../public/images/noimage.jpeg';

const Slug = (props) => {
    const router = useRouter();
    const {slug} = router.query;
    const [data] = useState(props.data || {});
    const [screenshots] = useState(props.screenshots.results || [])

    return (
        <MainContainer>
            <Link href="/">
                <BackButton>&#8592; Back to home</BackButton>
            </Link>
            <Title>{data.name || slug}</Title>
            <TopBlock>
                <Image
                    alt='image'
                    height='300'
                    width='650'
                    src={data.background_image || noImage}
                />
                <InfoBlock>
                    <Span>&#11088; &nbsp;{data.rating}</Span>
                    <Span>&#128197;&nbsp;{data.released}</Span>
                    <Span>&#128377;&nbsp;
                        <StyledLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href={data.website || ''}
                        >
                            {data.website}
                        </StyledLink>
                    </Span>
                </InfoBlock>

            </TopBlock>
            <SwiperView data={screenshots}/>
            <Description dangerouslySetInnerHTML={{__html: data.description}}/>
        </MainContainer>
    )
}

export default Slug

export async function getStaticPaths() {
    const data = await (await fetch(`${API}/games?page_size=7200&key=${API_KEY}`))?.json()
    const paths = data.results.map((item) => ({
        params: {slug: item.slug},
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const data = await (await fetch(`${API}/games/${context.params.slug}?key=${API_KEY}`))?.json()
    const screenshots = await (await fetch(`${API}/games/${context.params.slug}/screenshots?key=${API_KEY}`))?.json()
    return {
        props: {
            data,
            screenshots
        }
    }
}