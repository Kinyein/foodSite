import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { url } from '../helpers/url'
import '../styles/listStyle.css'

const FoodList = () => {

    const aboutFood = {
        name: '',
        price: '',
        img: ''
    }

    const [food, setFood] = useState([])

    useEffect(() => {
        getData()

    }, [])


    const getData = () => {
        axios.get(url)
            .then(resp => {
                console.log(resp.data)
                setFood(resp.data)
            })
            .catch(error => console.log(error))
    }

    const alertDelete = (id) => {
        Swal.fire({
            title: '¿Desea borrar el alimento?',
            showDenyButton: true,
            denyButtonText: `Borrar`,
            confirmButtonText: 'Cancel',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
                deleteData(id)
                Swal.fire('Eliminado', '', 'success')
            }
        })
    }

    const deleteData = (id) => {
        axios.delete(url + id)
            .then(resp => {
                getData()
                console.log(resp);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='main'>
            {
                food.map(f => (
                    <div className='card' key={f.id}>
                        <button className='delete' onClick={() => alertDelete(f.id)}>X</button>
                        <img src={f.img} alt={f.name} width="250" />
                        <div className='cardText'>
                            <h5>{f.name}</h5>
                            <h5>${f.precio}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FoodList