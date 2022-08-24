import {GridWrapper, Loader} from "./styles";
import Tile from "../Tile";

const TilesView = ({props}) => {
    const {data, isFetching, isSearching} = props;
    return (
        <GridWrapper>
            {data?.map((item) => {
                return (
                    <Tile key={item.id} data={item}/>
                )
            })}
            {isFetching || isSearching ? <Loader>Loading...</Loader> : ''}
        </GridWrapper>
    )
}

export default TilesView