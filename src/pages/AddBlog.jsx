import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase/config';


export const AddBlog = () => {
    const [blogView, setBlogView] = useState([])
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const blogRef = collection(db, "blogs");
    const [validCheck, setValidCheck] = useState(true)

    useEffect(() => {

        getDocs(blogRef)
            .then((resp) => {
                setBlogView(
                    resp.docs.map((doc) => {

                        return { ...doc.data(), id: doc.id }

                    })

                );
            })
    }, [])



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
        const { titulo, descripcion, autor, newAutor, categoria, fecha } = form
        const newErrors = {}

        if (!titulo || titulo === '') newErrors.titulo = 'No puede estar vacío!'
        else if (titulo.length < 6) newErrors.titulo = 'El nombre es muy corto!'
        else if (titulo.length > 30) newErrors.titulo = 'El nombre es muy largo!'

        if (!descripcion || descripcion === '') newErrors.descripcion = 'No puede estar vacío! 1'
        else if (descripcion.length < 6) newErrors.descripcion = 'La descripcion es muy corta!'



        if (!validCheck) {
            if (!newAutor || newAutor === '') newErrors.newAutor = 'No puede estar vacío! 2'
            else if (newAutor.length < 6) newErrors.newAutor = 'El autor es muy corto!'
            else if (newAutor.length > 30) newErrors.newAutor = 'El autor es muy largo!'
        } else if (!autor || autor === 0) {
            newErrors.autor = 'No puede estar vacío!'
        }

        if (!fecha || fecha === '') newErrors.fecha = 'No puede estar vacío! 3'

        if (!categoria || categoria === '') newErrors.categoria = 'No puede estar vacío! 4'
        else if (categoria.length > 30) newErrors.categoria = 'El nombre es muy largo!'


        return newErrors
    }

    const handleSubmit = e => {
        e.preventDefault()
        // get our new errors

        const newErrors = findFormErrors()
        console.log(newErrors);

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
            alert('Entrada agregada al blog!')
        }
    }



    return (
        <div className="containerAll">
            <Container fluid='xl' className='py-5 '>
                <div className='d-flex flex-column align-items-center text-white'>
                    <h1>Agrega una entrada al blog</h1>
                    <Form style={{ width: '600px' }} onSubmit={handleSubmit}>
                        <Form.Group className='mt-4'>
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                type='text'
                                onChange={e => setField('titulo', e.target.value)}
                                isInvalid={!!errors.titulo}
                            />

                            <Form.Control.Feedback type='invalid' className='position-absolute'>
                                {errors.titulo}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-4'>
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                                type='textarea'
                                onChange={e => setField('descripcion', e.target.value)}
                                isInvalid={!!errors.descripcion}
                            />
                            <Form.Control.Feedback type='invalid' className='position-absolute'>
                                {errors.descripcion}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-4'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control
                                type='date'
                                onChange={e => setField('fecha', e.target.value)}
                                isInvalid={!!errors.fecha}
                            />
                            <Form.Control.Feedback type='invalid' className='position-absolute'>
                                {errors.fecha}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className='row gap-1'>
                            <div className='col'>
                                <Form.Group className="mt-4">
                                    <Form.Label htmlFor="selectAutor">Seleccionar autor</Form.Label>
                                    <Form.Select id="selectAutor" disabled={!validCheck} onChange={e => setField('autor', e.target.value)} isInvalid={!!errors.autor}>

                                        <option value="0"></option>
                                        {blogView.map((data) => (
                                            <option key={data.id} value={data.autor}>{data.autor}</option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type='invalid' className='position-absolute'>
                                        {errors.autor}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>

                            <div className='col'>
                                <Form.Group className="mt-4">
                                    <Form.Label>
                                        <div className="d-flex gap-2">
                                            ¿Agregar autor?
                                            <Form.Check
                                                type="checkbox"
                                                onChange={() => setValidCheck((state) => !state)}

                                            />
                                        </div>
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type='text'
                                        onChange={e => setField('autor', e.target.value)}
                                        isInvalid={!!errors.newAutor}
                                        disabled={validCheck}

                                    />
                                    <Form.Control.Feedback type='invalid' className='position-absolute'>
                                        {errors.newAutor}
                                    </Form.Control.Feedback>
                                </Form.Group>

                            </div>
                        </div>



                        <Form.Group className="mt-4">
                            <Form.Label htmlFor="selectCategoria">Seleccionar categoría</Form.Label>
                            <Form.Select id="selectCategoria" onChange={e => setField('categoria', e.target.value)} isInvalid={!!errors.categoria}>
                                <option value="0"></option>
                                {blogView.map((data) => (
                                    <option key={data.id} value={data.categoria}>{data.categoria}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type='invalid' className='position-absolute'>
                                {errors.categoria}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button type='submit' className='mt-5'>Enviar</Button>
                    </Form>
                </div>
            </Container >
        </div >

    );
}

