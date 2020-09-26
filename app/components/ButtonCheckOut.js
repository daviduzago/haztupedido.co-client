import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";
import colors from "../config/colors";
import { Entypo } from "@expo/vector-icons";

export default ButtonCheckOut = ({
  onPress,
  image,
  title,
  subtitle,
  width = 50,
  height = 50,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {image && (
          <View>
            <View style={{ width: width, height: height }}>
              <Image
                style={{ resizeMode: "contain", width: width, height: height }}
                source={image}
              />
            </View>
          </View>
        )}
        {title && (
          <View>
            <Text style={{ fontSize: 25, fontWeight: "400", paddingLeft: 10 }}>
              {title}
            </Text>
            {subtitle && (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  paddingLeft: 10,
                  color: "gray",
                }}
              >
                {subtitle}
              </Text>
            )}
          </View>
        )}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Entypo name="chevron-thin-right" size={40} color="gray" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingLeft: 20,
    marginBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
});
