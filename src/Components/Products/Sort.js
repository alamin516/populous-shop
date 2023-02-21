import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../../context/FilterContextProvider';

const Sort = () => {
    const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext()

    return (
        <div className='flex lg:px-0 justify-between items-center'>
            <div className='flex justify-between items-center'>
                <button
                    onClick={setGridView}
                    className={grid_view ? 'w-8 h-8 p-2 bg-black text-white mr-3' : 'w-8 h-8 p-2 bg-gray-200 mr-3'}>
                    <BsFillGridFill></BsFillGridFill>
                </button>
                <button
                    onClick={setListView}
                    className={grid_view ? 'w-8 h-8 p-2 bg-gray-200' : 'w-8 h-8 p-2 bg-black text-white'}>
                    <BsList></BsList>
                </button>
            </div>
            <div>
                <p className='text-center'>
                    {filter_products.length < 2 ?
                        `${filter_products.length} Product Available` :
                        `${filter_products.length} Products Available`}
                </p>
            </div>
            <div>
                <form>
                    <label htmlFor='sort'></label>
                    <select
                        onClick={sorting}
                        id="sort"
                        name='sort'
                        className='p-2 border border-1 outline-0'>
                        <option value="lowest">Price(lowest)</option>
                        <option value="highest">Price(highest)</option>
                        <option value="a-z">Price(a-z)</option>
                        <option value="z-a">Price(z-a)</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default Sort;