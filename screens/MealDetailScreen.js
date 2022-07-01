import { useLayoutEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ route: { params }, navigation }) => {
    const { mealId } = params;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const headerButtonHandler = () => {
        navigation.goBack();
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton icon='star' color='#fff' onPress={headerButtonHandler} />
            )
        });
    }, [navigation])

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