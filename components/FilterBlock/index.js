import {Container, Input, Select} from "./styles";
import {filterValues} from "../../constants";
const FilterBlock = ({platforms, searchValue, handleSearch, handleFilterAndSort}) => {

    return (
        <Container>
            <Input
                type="search"
                placeholder='Введите запрос для поиска'
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <Select onChange={(e) => handleFilterAndSort(true, (e.target.value).toString())}>
                <option value="0">Все платформы</option>
                {platforms.map((item) => {
                    return (
                        <option
                            key={item.id}
                            value={item.id}
                        >
                            {item.name}
                        </option>
                    )
                })}
            </Select>
            <Select onChange={(e) => handleFilterAndSort(false,(e.target.value))}>
                {filterValues.map((item) => {
                    return (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.label}
                        </option>
                    )
                })}
            </Select>
        </Container>
    )
}

export default FilterBlock