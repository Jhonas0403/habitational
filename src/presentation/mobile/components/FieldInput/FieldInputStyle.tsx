import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   display:'flex',
   backgroundColor:'white',
   justifyContent:'center',
   alignItems:'flex-start',
   padding:2,
   width:350
  },
  text: {
    fontSize: 16,
    color: '#1E8449',
    fontWeight:'bold',
    marginBottom:2,
    marginTop:8
  },
  input:{
    borderRadius:10,
    backgroundColor:"#fff",
    fontSize:14,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 4 }, // Sombras a la izquierda y abajo
    shadowOpacity: 0.3, // Opacidad de la sombra
    elevation: 5
  }
});

export default styles;