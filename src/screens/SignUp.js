import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
} from "native-base";

const SignUp = (props) => {
  return (
    <Container style={styles.container}>
      <Content>
        <Image
          source={require("../../assets/title.png")}
          style={styles.Image}
        />
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item>
            <Input placeholder="Password" />
          </Item>
          <Item last>
            <Input placeholder="Full Name" />
          </Item>
          <Button
            onPress={() => props.navigation.navigate("HomeTabs")}
            full
            primary
            style={styles.button}
          >
            <Text> Sign Up </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    padding: 20,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#2FC4B2",
    marginTop: 20,
  },
  Image: {
    justifyContent: "center",
    alignContent: "center",
    resizeMode: "contain",
    marginLeft: 50,
    width: 300,
    height: 300,
  },
});
