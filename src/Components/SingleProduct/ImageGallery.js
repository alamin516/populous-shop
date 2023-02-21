import React, { useState } from 'react';

const ImageGallery = ({ imgs = [{ url: ' ' }] }) => {
    const [image, setImage] = useState(imgs[0])

    return (
        <div className='lg:flex gap-1 px-2'>
            <div className='lg:w-3/12 grid lg:grid-cols-1 grid-cols-4 gap-1 lg:mb-0 mb-1'>
                {
                    imgs.map((img, i) =>
                        <figure
                            key={i}>
                            <img
                                src={img.url}
                                alt={img.filename}
                                onClick={() => setImage(img)}
                                className='cursor-pointer h-full'
                            />
                        </figure>
                    )
                }

            </div>
            <div className='lg:w-9/12'>
                <img
                    className='w-full h-full'
                    src={image.url}
                    alt='' />
            </div>
        </div>
    );
};

export default ImageGallery;