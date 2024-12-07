import { TextInput, StyleSheet } from 'react-native';

const Input = ({ ...props }) => (
    <TextInput
        style={styles.input}
        {...props}
    />
)

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    }
});

export { Input }