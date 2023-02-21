import React from 'react';

function PhoneLink() {
    return (
        <a 
            href="tel:019555555555"
            onClick={(e) => {
                e.preventDefault();
                window.location.href = 'tel:019555555555';
            }}>
            019555555555
        </a>
    );
}

export default PhoneLink;