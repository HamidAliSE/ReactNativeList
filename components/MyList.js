import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

const MyList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            });
    }, []);

    const renderCard = ({ item }) => {
        return (
            <View style={{ borderWidth: 1, borderColor: 'red' }}>
                <Text>{JSON.stringify(item)}</Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlashList
                data={products}
                renderItem={({ item }) => renderCard({ item })}
                estimatedItemSize={200}
            />
        </View>
    );
};

export default MyList;
