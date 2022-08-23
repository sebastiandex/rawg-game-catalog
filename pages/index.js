import Head from 'next/head'
import {useEffect, useState} from "react";
import {API, API_KEY} from "../constants";
import HomeView from "../components/HomeView";
import {MainContainer} from "./styles";


const Home = (props) => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);
    
    useEffect(() => {
        if (searchValue.length > 2) {

            const delayDebounceFn = setTimeout(() => {
            console.log(searchValue)
                fetch(`${API}/games?search=${searchValue}&key=${API_KEY}`)
                    .then((res) => {
                        return res.json()
                    })
                    .then((responseData) => { // responseData = undefined
                        setData(responseData.results)
                        setIsFetching(false)
                        return responseData;
                    })
        }, 500)
        return () => clearTimeout(delayDebounceFn)
        }

    }, [searchValue])

    useEffect(() => {
        if (data.length === 0) {
            fetch(`${API}/games?page=${currentPage}&key=${API_KEY}`)
                .then((res) => {
                    return res.json()
                })
                .then((responseData) => { // responseData = undefined
                    setData([...data, ...responseData.results])
                    setIsFetching(false)
                    setCurrentPage(prevState => prevState + 1)
                    return responseData;
                })
        }
    }, []);

    useEffect(() => {
        if (isFetching) {
            fetch(`${API}/games?page=${currentPage}&key=${API_KEY}`)
                .then((res) => {
                    return res.json()
                })
                .then((responseData) => { // responseData = undefined
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
        if ((scrollHeight - (scrollTop + innerHeight) < 100) ) {
            setIsFetching(true)
        }
    };

    return (
        <MainContainer>
            <input
                type="search"
                placeholder='Введите запрос для поиска'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        <HomeView props={{data, isFetching}}/>
        </MainContainer>

    )
}

export default Home
