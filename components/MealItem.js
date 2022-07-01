import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import MealDetails from "./MealDetails";


const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {

    const navigation = useNavigation();


    const selectMealHandler = () => {
        navigation.navigate('MealDetail', {
            mealId: id,
            title: title,
            imageUrl: imageUrl,
            duration: duration,
            complexity: complexity,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
                onPress={selectMealHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            style={styles.image} s
                            source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        affordability={affordability}
                        duration={duration}
                        complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        backgroundColor: "#fff",
        margin: 16,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonPressed: {
        opacity: Platform.OS === 'ios' && 0.85,
        backgroundColor: Platform.OS === 'ios' && '#ccc',
    },
});