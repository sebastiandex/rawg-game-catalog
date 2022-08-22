import Head from 'next/head'
import {useEffect, useState} from "react";
import {API, API_KEY} from "../constants";
import HomeView from "../components/HomeView";


const Home = (props) => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

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
        <>
            <Head>
                <title>Себастьянов тестовое</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <HomeView props={{data, isFetching}}/>
        </>
    )
}

export default Home
