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
    const [activePlatform, setActivePlatform] = useState(0);
    const [sortValue, setSortValue] = useState('');

    const platforms = props.platforms.results || [];
    const parent = activePlatform && activePlatform !== '0' ? `parent_platforms=${activePlatform}&` : '';
    const search = searchValue ? `search=${searchValue}&` : '';
    const sort = sortValue ? `ordering=${sortValue}&` : '';
    const isMount = useIsMount();

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    useEffect(() => {
        if (!isMount) {
            const delayDebounceFn = setTimeout(() => {
                setIsSearching(true)
                fetch(`${API}/games?${search}${parent}${sort}key=${API_KEY}`)
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
    }, [searchValue]);

    useEffect(() => {
        if (isFetching) {
            fetch(`${API}/games?${search}${parent}${sort}page=${currentPage + 1}&key=${API_KEY}`)
                .then((res) => {
                    return res.json()
                })
                .then((responseData) => {
                    console.log(data)
                    console.log(responseData.results)
                    setData([...data, ...responseData.results])
                    setCurrentPage(prevState => prevState + 1)
                    setIsFetching(false)
                })
        }
    }, [isFetching]);

    const scrollHandler = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight
        const scrollTop = e.target.documentElement.scrollTop
        const innerHeight = window.innerHeight
        if ((scrollHeight - (scrollTop + innerHeight) < 100)) {
            setIsFetching(true)
        }
    };

    const filterAndSort = (toggle, value) => {
        setCurrentPage(1);
        setIsSearching(true)
        const parentValue = toggle ? `parent_platforms=${value}&` : parent;
        const sortValue = !toggle ? `ordering=${value}&` : sort;
        if (toggle) {
            setActivePlatform(value)
        } else {
            setSortValue(value);
        }
        fetch(`${API}/games?${search}${parentValue}${sortValue}page=1&key=${API_KEY}`)
            .then((res) => {
                return res.json()
            })
            .then((responseData) => {
                setIsSearching(false)
                setData(responseData.results)
            })
    }

    return (
        <MainContainer>
            <FilterBlock
                platforms={platforms}
                searchValue={searchValue}
                handleSearch={setSearchValue}
                handleFilterAndSort={filterAndSort}
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