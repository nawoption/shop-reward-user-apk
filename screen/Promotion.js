import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {globalStyle} from '../components/globalStyle';
import {getData} from '../components/api';

export default function Promotion(prpos) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    setLoading(true);
    const resData = await getData('/promotion');
    if (resData.con) {
      setPosts(resData.result);
      setLoading(false);
    } else console.log(resData.msg);
  };
  const PromotionCard = ({item}) => {
    let image = item.image
      ? {uri: item.image}
      : require('../components/image/hill.jpeg');
    return (
      <TouchableOpacity
        onPress={() => prpos.navigation.navigate('Detail', {post: item})}
        style={globalStyle.cardContainer}>
        <Image source={image} style={globalStyle.promoImage} />
        <Text style={globalStyle.title}>{item.title}</Text>
        <Text style={globalStyle.content}>
          {item.description.substring(0, 200) + ' ...'}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(k, v) => v.toString()}
        renderItem={({item}) => <PromotionCard item={item} />}
        refreshing={loading}
        onRefresh={() => getPost()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
