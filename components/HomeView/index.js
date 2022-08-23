import {GridWrapper, Loader, MainContainer} from "./styles";
import Tile from "../Tile";

const HomeView = ({props}) => {
    const {data, isFetching} = props;
    console.log(props)
    return (
                <GridWrapper>
                    {data?.map((item) => {
                        return (
                            <Tile key={item.id} data={item}/>

                        )
                    })}
                    {isFetching ? <Loader>Loading...</Loader> : ''}
                </GridWrapper>
        )
}

export default HomeView