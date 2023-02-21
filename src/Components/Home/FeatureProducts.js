import { useProductsContext } from "../../context/AppProvider";
import Product from "./Product";

const FeatureProducts = () => {
    const { isLoading, featureProducts } = useProductsContext()

    if (isLoading) {
        return <div className='flex justify-center items-center min-h-[50vh]'>
            <span className='w-10 h-10 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
            <span className='w-8 h-8 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
            <span className='w-6 h-6 border-4 border-dashed border-orange-600 rounded-full animate-spin duration-500 block'></span>
            <p className='text-xl font-bold ml-4'>Loading...</p>
        </div>
    }

    return (
        <div className="bg-gray-200 py-20">
            <div className="lg:w-10/12 mx-auto px-2">
                <div>
                    <h5 className="text-sm mb-2">Check Now!</h5>
                    <h2 className='text-3xl font-semibold '>Our Feature Services</h2>
                </div>
                <div className="grid lg:grid-cols-3 lg:gap-10 gap-5 mt-10">
                    {
                        featureProducts.map(product =>
                            <Product
                                key={product.id}
                                product={product}
                            ></Product>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureProducts;