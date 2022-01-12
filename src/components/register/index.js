import React from 'react'
import { useFormik } from 'formik'
import { Button, Card, Form, FormGroup, Input, Label } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'
import {ProfileImage} from '../../assets/images'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'



    const  initialValues={
        name:'',
        password:'',
        email:''
    }

    const  onSubmit= values =>{
        console.log('Form data' , values)
    }

//     const validate=values =>{
//         let errors ={}
//    if (!values.email) {
//        errors.email ='Required'
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/I.test(values.email)) {
//     errors.email ='Invalid email format'
//    }
//         if(!values.name){
//             errors.name= 'Required'
//         }
//         if (!values.password) {
//             errors.password='Required'
//         }
//         return errors
//      }

     const validationSchema =Yup.object({
         email:Yup.string().email('Invalid email format').required('Required!!'),
         name: Yup.string().required('Required!!!'),
         password: Yup.string().required('Required!!!')
     })

const RegisterPage = () => {
    const formik=useFormik({
        initialValues ,
         onSubmit,
         validationSchema
          // validate
      })
    return (
        <div className='container'>
        <Card body color='info'>
        <h4 className='heading'>Create New Account</h4>
        <Form className='form' onSubmit={formik.handleSubmit}>
        <FormGroup >
                <Input className='form-input' id='email' placeholder='Enter Email'
                name='email' type='email'
                invalid={formik.touched.email && formik.errors.email}
                 value={formik.values.email} 
                 onChange={formik.handleChange}
                />
                 {formik.touched.email && formik.errors.email?(
                 <div className='error-message'>{formik.errors.email}</div>
                 ):null}
            </FormGroup>
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

            <Button className='register-button'
            color='success'
            outline>Register</Button>
            <p className='signUp-button'>Already have account <Link to='/'>Login</Link></p>
        </Form>
        </Card>
    </div>
    )
}

export default RegisterPage
