import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {globalStyle} from '../components/globalStyle';
import {addOrder, getLoginedData} from '../components/api';
import {useSelector} from 'react-redux';
import LoadingCard from '../components/loading';

export default function Reward() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const userData = useSelector(state => state.auth.user);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    setLoading(true);
    const resData = await getLoginedData('/reward', userData.token);
    if (resData.con) {
      setPosts(resData.result);
      setLoading(false);
    } else console.log(resData.msg);
  };
  const showConfirmDialog = rewardId => {
    return Alert.alert('Are you sure to get reward?', '', [
      {
        text: 'Yes',
        onPress: () => {
          changePoints(rewardId);
        },
      },
      {
        text: 'No',
      },
    ]);
  };
  const changePoints = async rewardId => {
    setPostLoading(true);
    const resData = await addOrder(
      '/rewardOrder',
      {rewardId: rewardId},
      userData.token,
    );
    setPostLoading(false);
    ToastAndroid.show(resData.msg, ToastAndroid.SHORT);
  };
  const PromotionCard = ({item}) => {
    let image = item.image
      ? {uri: item.image}
      : require('../components/image/hill.jpeg');
    if (userData.points >= item.points) {
      setDisable(false);
    }
    return (
      <View style={globalStyle.cardContainer}>
        <Image source={image} style={globalStyle.promoImage} />
        <View style={{paddingHorizontal: 10}}>
          <Text style={globalStyle.title}>{item.title}</Text>
          <Text style={globalStyle.content}>{item.description}</Text>
          {userData.points >= item.points ? (
            <TouchableOpacity
              disabled={disable}
              onPress={() => showConfirmDialog(item._id)}
              style={styles.rewardBtn}>
              <Text style={{color: '#fff'}}>
                Get reward : {item.points} points
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              disabled={disable}
              style={{...styles.rewardBtn, backgroundColor: '#80b3ff'}}>
              <Text style={{color: '#fff'}}>
                Get reward : {item.points} points
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };
  if (postLoading) {
    return <LoadingCard />;
  }
  return (
    <View style={globalStyle.container}>
      <FlatList
        data={posts}
        keyExtractor={(k, v) => v.toString()}
        renderItem={({item}) => <PromotionCard item={item} />}
        refreshing={loading}
        onRefresh={() => getPosts()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rewardBtn: {
    width: 170,
    height: 40,
    backgroundColor: '#448AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 5,
  },
});
