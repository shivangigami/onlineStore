import React, {useState} from 'react'
import { useFormik } from 'formik'
import { Button, Card, Form, FormGroup, Input, Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import {ProfileImage} from '../../assets/images'
import * as Yup from 'yup'



    const  initialValues={
        name:'',
        password:'',
    }

    const  onSubmit= values =>{
        console.log('Form data' , values)
    }

    const validate=values =>{
        let errors ={}

        if(!values.name){
            errors.name= 'Required'
        }
        if (!values.password) {
            errors.password='Required'
        }
        return errors
     }

     const validationSchema =Yup.object({
         name: Yup.string().required('Required!!!'),
         password: Yup.string().required('Required!!!')
     })
     const LoginPage = () => {
    const formik=useFormik({
      initialValues ,
       onSubmit,
       validationSchema
        // validate
    })
console.log('Visited fields', formik.touched)
    // console.log('Form values' , formik.values)
    // const [name , setName]=useState('')
    // const [password , setPassword]=useState('')

    return (
        <div className='container'>
            <Card body color='info'>
             <img src={ProfileImage} alt="" className='profile-image' />
            <Form className='form' onSubmit={formik.handleSubmit}>
                <FormGroup >
                    <Input className='form-input' id='username' placeholder='UserName'
                    name='name' type='text'
                    invalid={formik.touched.name && formik.errors.name}
                     value={formik.values.name} 
                     onChange={formik.handleChange}
                    />
                     {formik.touched.name && formik.errors.name?(
                     <div className='error-message'>{formik.errors.name}</div>
                     ):null}
                </FormGroup>
                
                <FormGroup >
                    <Input className='form-input' id='password' placeholder='password' 
                    name='password'  type='password'
                    invalid={formik.touched.password && formik.errors.password}
                    value={formik.values.password}
                     onChange={formik.handleChange} />
                    {formik.touched.password && formik.errors.password?(
                    <div className='error-message'>{formik.errors.password}</div>
                    ):null}
                </FormGroup>

                <Button className='submit-button'
                color='success'
                outline>Submit</Button>
                <p className='signUp-button'>Register now <a href=''>Sign Up</a></p>
            </Form>
            </Card>
        </div>
    )
}

export default LoginPage
