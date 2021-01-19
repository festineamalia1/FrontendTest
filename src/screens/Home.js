import React, { useState, useEffect } from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  SafeAreaView,
  View,
} from "native-base";
import { API } from "../config/api";
import axios from "axios";
const Home = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await API.get("/photo2");
      console.log(res);
      setResult(res.data.data.photos);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <Card key={index}>
        <CardItem>
          <Left>
            <Body>
              <Text>{item.arts.title}</Text>
              <Text note>{item.user.fullName}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: `http://192.168.1.100:5000/uploads/${item.Image}`,
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body></Body>
        </CardItem>
      </Card>
    );
  };

  return (
    <Container>
      <Header style={styles.header}>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={result}
            renderItem={renderItem}
            refreshing={isLoading}
            onRefresh={fetchData}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
   
    </Container>
  );
  // };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    backgroundColor: "#2FC4B2",
  },
});
export default Home;
