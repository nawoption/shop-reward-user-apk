import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getLoginedData} from '../components/api';
import {globalStyle} from '../components/globalStyle';
import {useSelector} from 'react-redux';

export default function RewardHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const userData = useSelector(state => state.auth.user);
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    setLoading(true);
    const resData = await getLoginedData('/rewardOrder', userData.token);
    if (resData.con) {
      setLoading(false);
      setHistory(resData.result);
    } else console.log(resData.msg);
  };
  const HistoryCard = ({data}) => {
    let reward = data.reward;

    let image = reward.image
      ? {uri: reward.image}
      : require('../components/image/hill.jpeg');
    return (
      <View style={globalStyle.cardContainer}>
        <Text style={styles.title}>{reward.title}</Text>
        <Image source={image} style={globalStyle.promoImage} />
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Text style={styles.status}>Status : </Text>
          <Text
            style={data.status == 'pending' ? styles.pending : styles.received}>
            {data.status}
          </Text>
        </View>
        <Text style={styles.date}>
          Request Date : {data.created.split('T')[0]}
        </Text>
        <Text style={styles.date}>
          Received Date :
          {data.receivedDate ? data.receivedDate.split('T')[0] : ''}
        </Text>
      </View>
    );
  };
  return (
    <View style={globalStyle.container}>
      <FlatList
        data={history}
        keyExtractor={(k, v) => v.toString()}
        renderItem={({item}) => <HistoryCard data={item} />}
        refreshing={loading}
        onRefresh={() => getPost()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pending: {
    color: '#ffc61a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  received: {
    color: '#00cc44',
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    color: '#000',
    fontSize: 16,
  },
  date: {
    color: '#000',
  },
  title: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
    marginBottom: 5,
  },
});
