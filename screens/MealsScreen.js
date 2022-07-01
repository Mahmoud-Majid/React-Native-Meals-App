import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealsScreen = ({ route: { params }, navigation }) => {

    const catID = params.categoryId;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catID) >= 0);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.categoryTitle
        });
    }, [navigation])



    const renderMealItem = ({ item }) => {
        return (
            <MealItem
                {...item}
            />
            // <MealItem
            //     title={item.title}
            //     imageUrl={item.imageUrl}
            //     duration={item.duration}
            //     complexity={item.complexity}
            //     affordability={item.affordability}
            // />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    )
}

export default MealsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    listItem: {
        backgroundColor: "#fafafa",
        borderWidth: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});