import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {globalStyle} from '../components/globalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import QRCode from 'react-native-qrcode-svg';

export default function Home(props) {
  const userData = useSelector(state => state.auth.user);
  const [visible, setVisible] = useState(false);
  const [productQRref, setProductQRref] = useState();

  return (
    <View style={globalStyle.container}>
      {/* <Modal visible={visible} animationType={'slide'} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <MaterialIcons
              style={styles.closeText}
              onPress={() => setVisible(!visible)}
              name="close"
              color="#000"
            />
            <QRCode
              value={userData.phone}
              size={200}
              color="black"
              backgroundColor="white"
              getRef={(c) => setProductQRref(c)}
            />
          </View>
        </View>
      </Modal> */}
      <Text style={{...globalStyle.heading, color: '#00BCD4'}}>Shop Rewards</Text>
      <Text style={{...globalStyle.subHeading, color: '#00BCD4'}}>
        computer | moblile
      </Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('RewardHistory')}
          style={styles.btnHistory}>
          <MaterialIcons name="card-giftcard" color="#000" size={30} />
          <Text style={{color:'#000',marginTop:5}}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PointsHistory')}
          style={styles.btnHistory}>
          <FontAwesome5 name="coins" color="#000" size={30} />
          <Text style={{color:'#000',marginTop:5}}>Points History</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.memberCard}>
        <Text style={styles.memberName}>{userData.name}</Text>
        <Text style={styles.totalText}>Total Points</Text>
        <Text style={styles.totalPoint}>{userData.points}</Text>
        <Text style={styles.member}>Privilege Membership</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topCard: {
    backgroundColor: '#fff',
  },
  memberCard: {
    width: 300,
    height: 180,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 30,
    backgroundColor: '#00BCD4',
    marginTop: 20,
  },
  memberName: {
    fontSize: 22,
    color: '#fff',
    marginTop: 30,
  },
  member: {
    position: 'absolute',
    color: '#fff',
    bottom: 20,
    right: 20,
    fontSize: 16,
  },
  totalPoint: {
    color: '#fff',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  totalText: {
    color: '#fff',
    marginTop: 20,
  },
  btnHistory: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    margin: 5,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical:10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
  closeText: {
    alignSelf: 'flex-end',
    fontSize: 28,
    fontWeight: 'bold',
    margin:10
  },
});
