import { useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailScreen = ({ route: { params }, navigation }) => {
    const favoriteMealCtx = useContext(FavoritesContext);

    const { mealId } = params;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const isFavorite = favoriteMealCtx.ids.includes(mealId);

    const toggleFavoriteHandler = () => {
        if (isFavorite) {
            favoriteMealCtx.removeFavorite(mealId);
        } else {
            favoriteMealCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon={isFavorite ? 'star' : 'star-outline'} color='#fff'
                    onPress={toggleFavoriteHandler} />
            )
        });
    }, [navigation, toggleFavoriteHandler]);

    return (
        <ScrollView style={styles.root}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                style={styles.details}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>

        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 8,
        fontWeight: 'bold',
        color: '#fff',
    },
    detailText: {
        color: '#fff',
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',
    }
});