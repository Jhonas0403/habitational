import {Text, View, Button} from 'react-native';
import FieldInput from '../../components/FieldInput/FieldInput';
import stylesRegister from './registerStyle';
interface Props {}

const RegisterView: React.FC<Props> = props => {
  return (
    <View>
      <Text> Bienvenido</Text>
      <Text>Registro</Text>
      <View style={stylesRegister.container}>
        <FieldInput title={'Nombres'} />
        <FieldInput title={'Apellidos'} />
        <FieldInput title={'Edad'} />
        <FieldInput title={'Lugar de residencia'} />
        <FieldInput title={'Sexo'} />
        <FieldInput title={'Número de teléfono'} />
        <Button title='Crear Usuario'/>
      </View>
    </View>
  );
};

export default RegisterView;
