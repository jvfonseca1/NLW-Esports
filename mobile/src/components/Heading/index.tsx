import React from "react";
import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

interface Props extends ViewProps {
    title: string;
    subtitle: string;
}

export function Heading({title, subtitle, ...rest}: Props) {
    return (
        <View style={styles.container} {...rest}>
            <text style={styles.title}>
                {title}
            </text>

            <text style={styles.subtitle}>
                {subtitle}
            </text>
        </View>
    );
}