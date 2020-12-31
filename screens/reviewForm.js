import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
  title: yup.string()
            .required()
            .min(4),
  body: yup.string()
           .required()
           .min(8),
  rating: yup.string()
             .required()
             .test('is-num-1-5', 'Rating must be a num 1 - 5', (val) => {
    return parseInt(val) > 0 && parseInt(val) < 6;
  }),
})

export default function ReviewForm({ addReview }) {

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.error}> { props.touched.title && props.errors.title } </Text>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
             <Text style={globalStyles.error}> { props.touched.body && props.errors.body } </Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
             <Text style={globalStyles.error}> { props.touched.rating && props.errors.rating } </Text>
            {/* <Button color='maroon' title="Submit" onPress={props.handleSubmit} />  */}
            <FlatButton text="Submit" onPress={props.handleSubmit}></FlatButton>
          </View>
        )}
      </Formik>
    </View>
    
  );
}