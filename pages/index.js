import {useEffect, useState} from "react";
import {API, API_KEY} from "../constants";
import TilesView from "../components/TilesView";
import {MainContainer} from "./styles";
import {useIsMount} from "../hooks";
import FilterBlock from "../components/FilterBlock";

const Home = (props) => {
    const [data, setData] = useState(props?.data?.results || []);
    const [isFetching, setIsFetching] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [activePlatform, setActivePlatform] = useState('');
    const [sortValue, setSortValue] = useState('');
    const platforms = props.platforms.results || [];
    const isMount = useIsMount();

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const platform = activePlatform ? `parent_platforms=${activePlatform}&` : '';
    const search = searchValue ? `search=${searchValue}&` : '';
    const sort = sortValue ? `ordering=${sortValue}&` : '';

    useEffect(() => {
        // Хук для фильтрации, сортировки и поиска
        if (!isMount) {
            const delayDebounceFn = setTimeout(() => {
                setIsSearching(true)
                fetch(`${API}/games?${search}${platform}${sort}key=${API_KEY}`)
                    .then((res) => {
                        return res.json()
                    })
                    .then((responseData) => {
                        setData(responseData.results)
                        setIsSearching(false)
                        setCurrentPage(1)
                        return responseData;
                    })
            }, 500)
            return () => clearTimeout(delayDebounceFn)
        }
    }, [isMount, search, platform, sort]);

    useEffect(() => {
        // Бесконечный скролл
        // Можно переместить в хук для фильтрации, но логика будет совсем плохо читаться
        if (isFetching) {
            fetch(`${API}/games?${search}${platform}${sort}page=${currentPage + 1}&key=${API_KEY}`)
                .then((res) => {
                    return res.json()
                })
                .then((responseData) => {
                    setData([...data, ...responseData.results])
                    setCurrentPage(prevState => prevState + 1)
                    setIsFetching(false)
                })
        }
    }, [isFetching]);

    const scrollHandler = (e) => {
        // Для включения бесконечного скролла
        const scrollHeight = e.target.documentElement.scrollHeight
        const scrollTop = e.target.documentElement.scrollTop
        const innerHeight = window.innerHeight
        if ((scrollHeight - (scrollTop + innerHeight) < 100)) {
            setIsFetching(true)
        }
    };

    return (
        <MainContainer>
            <FilterBlock
                platforms={platforms}
                searchValue={searchValue}
                handleSearch={setSearchValue}
                handleFilter={setActivePlatform}
                handleSort={setSortValue}
            />
            <TilesView props={{data, isFetching, isSearching}}/>
        </MainContainer>

    )
}

export default Home

export async function getStaticProps() {
    const data = await (await fetch(`${API}/games?page=1&key=${API_KEY}`))?.json()
    const platforms = await (await fetch(`${API}/platforms/lists/parents?key=${API_KEY}`))?.json()

    return {
        props: {
            data,
            platforms
        }
    }
}