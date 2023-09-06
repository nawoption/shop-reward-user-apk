import {StyleSheet} from 'react-native';
export const globalStyle = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:"#f2f2f2"
  },
  promoImage: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
  cardContainer: {
    width: '100%',
    padding: 6,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#333',
    marginTop:10
  },
  content: {
    fontSize: 16,
    marginTop: 5,
    lineHeight:22,
    textAlign:'justify',
    color:'#333'

  },
  date: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom:5,
    color:"#444"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
  },
  heading: {
    fontSize: 40,
    color: '#fff',
    textAlign:'center',
    paddingTop:10
  },
  subHeading: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
    textAlign:'center'
  },
  row:{
    justifyContent:"space-between",
    flexDirection:'row'
  }
});
