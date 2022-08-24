import {useRouter} from "next/router";
import Link from "next/link";
import {API, API_KEY} from "../../constants";
import {useState, useEffect} from "react";
import Image from "next/image";
import {BackButton, Description, TopBlock, MainContainer, Span, StyledLink, Title, InfoBlock} from "./styles";
import SwiperView from "../../components/Swiper";
import noImage from './../../public/images/noimage.png';

const Slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    const [data, setData] = useState(router.query.data ? JSON.parse(router.query.data) : {});
    const [screenshots, setScreenshots] = useState([])

    useEffect(() => {
        if (slug) {
            fetch(`${API}/games/${slug}?key=${API_KEY}`)
                .then((res) => {
                    return res.json()
                })
                .then((responseData) => {
                    setData(responseData)
                    return responseData;
                })
            fetch(`${API}/games/${slug}/screenshots?key=${API_KEY}`)
                .then((res) => {
                    return res.json()
                })
                .then((responseData) => {
                    setScreenshots(responseData.results)
                    return responseData;
                })
        }
    }, [slug])

    return (
        <MainContainer>
            <Link href="/">
                <BackButton>&#8592; Back to home</BackButton>
            </Link>
            <Title>{data.name}</Title>
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