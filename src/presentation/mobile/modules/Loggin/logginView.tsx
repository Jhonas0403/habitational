import React from 'react';
import {Formik} from 'formik';
import {Button, TextInput, View, Text} from 'react-native';
const LogginView = () => {
  return (
    <Formik
      initialValues={{usuario: '', password:''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, handleReset, values}) => (
        <View>
          <Text>Usuario</Text>
          <TextInput
            onChangeText={handleChange('usuario')}
            onBlur={handleBlur('usuario')}
            value={values.usuario}
          />
          <Text>Contraseña</Text>
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <Button onPress={handleSubmit} title="Submit" />
          <Button onPress={handleReset} title="Cancelar" />
        </View>
      )}
    </Formik>
  );
};

export default LogginView;
