import React, { useState } from 'react'
import { url } from '../helpers/url'
import axios from 'axios'
import "../styles/addFormStyle.css"
import Swal from 'sweetalert2'
import { uploadImg } from '../helpers/uploadImg'

const AddFoods = () => {

  const initialFood = {
    name: '',
    precio: '',
    img: ''
  }

  const [food, setFood] = useState(initialFood)

  const { name, precio, img } = food

  const handleSubmit = (e) => {
    e.preventDefault()
    postData()
    setFood(initialFood)
  }

  const handleInput = ({ target }) => {
    setFood({
      ...food,
      [target.name]: target.value
    })
  }

  const postData = () => {
    axios.post(url, food)
      .then(resp => {

        let timerInterval
        Swal.fire({
          title: 'Guardando datos',
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleImg = e => {
    const img = e.target.files[0]
    uploadImg(img)
      .then(resp => {
        food.img = resp
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='contentForm'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleInput} />
        <input type="number" step="any" name="precio" placeholder="Precio" onChange={handleInput} />
        <input type="file" name="img" placeholder="Imagen Comida" onChange={handleImg} />
        <button className='add'>Agregar</button>
      </form>
    </div>
  )
}

export default AddFoods