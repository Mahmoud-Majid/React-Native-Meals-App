import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native"
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const MealsScreen = ({ route: { params }, navigation }) => {

    const catID = params.categoryId;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catID) >= 0);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: params.categoryTitle
        });
    }, [catID, navigation])

    return <MealsList items={displayedMeals} />

}

export default MealsScreen

const styles = StyleSheet.create({

    listItem: {
        backgroundColor: "#fafafa",
        borderWidth: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});