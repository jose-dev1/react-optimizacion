import React from 'react';

type Props = {
    items: number[];
};

const ItemList = React.memo(({ items }: Props) => {
    console.log('Renderizando lista...');
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
});

export default ItemList;
