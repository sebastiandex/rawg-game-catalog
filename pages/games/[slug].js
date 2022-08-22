import {useRouter} from "next/router";
import Link from "next/link";
import {API, API_KEY} from "../../constants";
import {useEffect, useState} from "react";
import Image from "next/image";

const Slug = () => {
    const router = useRouter();
    const {slug, id} = router.query;
    const data = JSON.parse(router.query.data)
    // const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`${API}/games?id=${id}&key=${API_KEY}`)
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((responseData) => { // responseData = undefined
        //         console.log('responseData', responseData)
        //         // setData([...data, ...responseData.results])
        //         // setIsFetching(false)
        //         // setCurrentPage(prevState => prevState + 1)
        //         return responseData;
        //     })
    }, [id])

    return (
        <div>
            <h1>Just Testing</h1>
            <Link href="/">Back to home</Link>
            <Image
                height='144'
                width='300'
                src={data.background_image}
            />
            <h2>{data.name}</h2>
        </div>
    )
}

export default Slug

// export async function getServerSideProps(context) {
//     console.log('context', context)
//     return {
//         props: context.data, // will be passed to the page component as props
//     }
// }