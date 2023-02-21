import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../../context/FilterContextProvider';
import FormatPrice from '../../Helper/FormatPrice';

const FilterSection = () => {
    const { filters: { text, category, colors, price, maxPrice, minPrice }, updateFilterValue, all_products, clearFilter } = useFilterContext();

    const newUniqueData = (data, property) => {
        let newValue = data.map((curElem) => {
            return curElem[property]
        })

        if (property === "colors") {
            return newValue = ['all', ...new Set([].concat(...newValue))]
            // return newValue = newValue.flat()
        } else {
            return newValue = ['all', ...new Set(newValue)]
        }

    }

    const categoryOnlyData = newUniqueData(all_products, 'category')
    const companyOnlyData = newUniqueData(all_products, 'company')
    const colorsOnlyData = newUniqueData(all_products, 'colors')

    return (
        <div className='lg:px-5 px-2 py-3 border border-1'>
            <div className='mb-2'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        className='p-2 w-full border border-1 outline-none'
                        type="text"
                        name='text'
                        value={text}
                        placeholder='Search products'
                        onChange={updateFilterValue} />
                </form>
            </div>
            <div className='my-10 lg:block hidden'>
                <h2 className='my-2 text-xl font-semibold'>Category</h2>
                <div>
                    {
                        categoryOnlyData.map((curElem, i) =>
                            <button
                                key={i}
                                type="button"
                                onClick={updateFilterValue}
                                name='category'
                                value={curElem}
                                className={category === curElem ? "text-start w-full  p-1 cursor-pointer mb-1 capitalize rounded-lg underline text-xl" : "text-start w-full 0 p-1 cursor-pointer mb-1 capitalize rounded-lg text-xl"}
                            >
                                {curElem}
                            </button>
                        )
                    }
                </div>
            </div>
            <div className='my-10 lg:block hidden'>
                <h2 className='my-2 text-xl font-semibold'>Company</h2>
                <form>
                    <label htmlFor='sort'></label>
                    <select
                        onClick={updateFilterValue}
                        name='company'
                        className='p-2 border border-1 outline-0 w-full uppercase'>
                        {
                            companyOnlyData.map((curElem, i) =>
                                <option key={i} value={curElem}>{curElem}</option>
                            )
                        }
                    </select>
                </form>
            </div>
            <div className='my-10 lg:block hidden'>
                <h2 className='my-2 text-xl font-semibold'>Colors</h2>
                <div className='flex items-center'>
                    {
                        colorsOnlyData.map((curElem, i) => {
                            if (curElem === 'all') {
                                return (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={updateFilterValue}
                                        name='colors'
                                        value={curElem}
                                        className={colors === curElem ? 'opacity-100 p-1 text-black text-xl underline' : 'p-1 text-black text-xl opacity-50'}
                                    >
                                        All
                                    </button>
                                )
                            }
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={updateFilterValue}
                                    name='colors'
                                    value={curElem}
                                    style={{ backgroundColor: curElem }}
                                    className={colors === curElem ? 'w-6 h-6 rounded-full ml-1 opacity-100 p-1 text-white' : 'w-6 h-6 rounded-full ml-1 opacity-50'}
                                >
                                    {colors === curElem ? <FaCheck></FaCheck> : null}
                                </button>
                            )
                        })
                    }
                </div>

            </div>
            <div className='my-10 lg:block hidden'>
                <h2 className='my-2 text-xl font-semibold'>Price</h2>
                <div>
                    <FormatPrice price={price}></FormatPrice>
                    <div>
                        <input
                            type='range'
                            name='price'
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            onChange={updateFilterValue}
                            className="w-10/12"
                        />
                    </div>
                </div>
            </div>
            <div>
                <button 
                className='bg-orange-600 text-white px-6 py-2 mb-6'
                onClick={clearFilter}
                >Clear Filter</button>
            </div>
        </div>
    );
};

export default FilterSection;