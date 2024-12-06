import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase/config';


export const AddBlog = () => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const blogRef = collection(db, "blogs");



    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })


        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }



    const findFormErrors = () => {
        const { titulo, descripcion, autor, categoria, fecha } = form
        const newErrors = {}

        if (!titulo || titulo === '') newErrors.titulo = 'No puede estar vacío!'
        else if (titulo.length > 30) newErrors.titulo = 'El nombre es muy largo!'

        if (!descripcion || descripcion === '') newErrors.descripcion = 'No puede estar vacío!'
        else if (descripcion.length > 30) newErrors.descripcion = 'El nombre es muy largo!'

        if (!autor || autor === '') newErrors.autor = 'No puede estar vacío!'
        else if (autor.length > 30) newErrors.autor = 'El nombre es muy largo!'

        if (!fecha || fecha === '') newErrors.fecha = 'No puede estar vacío!'
        else if (fecha.length > 30) newErrors.fecha = 'El nombre es muy largo!'

        if (!categoria || categoria === '') newErrors.categoria = 'No puede estar vacío!'
        else if (categoria.length > 30) newErrors.categoria = 'El nombre es muy largo!'


        return newErrors
    }

    const handleSubmit = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            // No errors! Put any logic here for the form submission!
            addDoc(blogRef, form)
                .then((doc) => {
                    console.log(doc);

                })
            alert('Thank you for your feedback!')
        }
    }



    return (
        <Container fluid='xl' className='p-5'>
            <div className='d-flex flex-column align-items-center'>
                <h1>Agrega una entrada al blog</h1>
                <Form style={{ width: '600px' }} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            type='text'
                            onChange={e => setField('titulo', e.target.value)}
                            isInvalid={!!errors.titulo}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.titulo}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type='text'
                            onChange={e => setField('descripcion', e.target.value)}
                            isInvalid={!!errors.descripcion}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.descripcion}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>fecha</Form.Label>
                        <Form.Control
                            type='text'
                            onChange={e => setField('fecha', e.target.value)}
                            isInvalid={!!errors.fecha}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.fecha}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Autor</Form.Label>
                        <Form.Control
                            type='text'
                            onChange={e => setField('autor', e.target.value)}
                            isInvalid={!!errors.autor}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.autor}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control
                            type='text'
                            onChange={e => setField('categoria', e.target.value)}
                            isInvalid={!!errors.categoria}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.categoria}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type='submit'>Enviar</Button>
                </Form>
            </div>
        </Container>
    );
}

