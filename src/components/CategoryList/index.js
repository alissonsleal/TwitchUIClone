import React from "react";
import { View, Text } from "react-native";

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from "./styles";

import data from "./data";

const CategoryList = () => {
  const CategoryItem = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>12.8k</Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;

/* {data.map((item) => (
  <CategoryItem key={item.name} item={item} />
))} */

{
  /* <CategoryItem key={data[0].name} item={data[0]}></CategoryItem> */
}
