import { FlatList, StyleSheet } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data"


const CategoriesScreen = ({ navigation }) => {

    const renderCategoryItem = ({ item }) => {
        const pressHandler = () => {
            navigation.navigate("Meals", { categoryId: item.id, categoryTitle: item.title })
        }

        return (
            <CategoryGridTile
                title={item.title}
                color={item.color}
                onPress={pressHandler}
            // navigate={navigation.navigate}
            />
        )
    }

    return (
        <FlatList
            style={styles.list}
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20
    },
    list: {
        flex: 1,
        margin: 20,
    },
});