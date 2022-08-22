import {GridWrapper, Loader, MainContainer} from "./styles";
import Tile from "../Tile";

const HomeView = ({props}) => {
    const {data, isFetching} = props;
    console.log(props)
    return (
            <MainContainer>
                <GridWrapper>
                    {data?.map((item) => {
                        return (
                            <Tile key={item.id} data={item}/>

                        )
                    })}
                </GridWrapper>
                {isFetching ? <Loader>Идёт загрузка...</Loader> : ''}
            </MainContainer>
        )
}

export default HomeView