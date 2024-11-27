import axios from "axios";
import { useState } from "react";
import { AuthForm } from "../components/form";
import Modal from 'react-modal';

function SignUp({ isOpen, onClose }) {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })


    const handleChange = (e, key) => setForm({ ...form, [key]: e.target.value })

    const inputs = [
        { placeholder: 'enter user email', type: 'email', key: 'email' },
        { placeholder: 'enter user password', type: 'password', key: 'password' },
    ]


    const handleSubit = async () => {
        console.log('form', form)
        const url = 'http://localhost:5000/api/login'
        try {
            const { data, status } = await axios.post(url, form)
            if (status === 200 || status === 201) {
                alert('Success')
                console.log('Data', data)
            }
        } catch (ex) {
            console.error('ex', ex)
        }
    }


    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <AuthForm inputs={inputs} onSubmit={handleSubit} title={'Login'} isOpen={isOpen}
                handleChange={handleChange}
            />
        </Modal>
    );
}

export default SignUp;
