import { StyleSheet, Text, View } from "react-native"

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({

    subTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContainer: {
        padding: 8,
        marginHorizontal: 14,
        marginVertical: 4,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
    }
});