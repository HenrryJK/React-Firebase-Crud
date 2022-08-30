import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// para trabajar con los datos del firestore
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
const Create = () => {
     const[description, setDescription] = useState('')       
    const[stock,setStock] = useState(0)       

    const navigate = useNavigate()
    //hacer referencia a la coleccion
    const  productsCollection =collection(db,"products")

    // funcion para almacenar
      const store = async (e) =>{
        e.preventDefault()
        await addDoc(productsCollection , {description:description , stock:stock})
        navigate('/')
       //  console.log(e.target)
       //console.log(e.target[0].value)
      }
  return (
      <div className='container'>
          <div className='row'>
              <div className='col'>
                    <h1>Añadir Nuevo Producto</h1>
                    <form onSubmit={store}>
                        <div className='mb-3'>
                          <label className='form-label'>Description: </label>
                          <input 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            className='form-control'
                          />
                        </div>

                        <div className='mb-3'>
                          <label className='form-label'>Stock: </label>
                          <input 
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            type="number"
                            className='form-control'
                          />
                        </div>

                       <button type='submit' className='btn btn-primary'>Store</button>
                    </form>
              </div>
           </div>
      </div>
  )
}

export default Create