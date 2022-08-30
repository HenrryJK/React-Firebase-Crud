//importamos usestate y useEffect
import React , {useState , useEffect} from 'react'
///Importamos las funciones necesarias para poder trabajar con la base de datos
// importacion de link
import { Link } from "react-router-dom"
// importar collections que ofrece el mismo firebase - en este caso se importa desde el firestore
// getDocs - para traer varios documentos , getDoc - para traer un solo documento
import { collection , getDocs , getDoc , deleteDoc , doc } from "firebase/firestore"

//importacion de la db
import { db } from '../firebaseConfig/firebase'

// importaciones extrar para el tema de  la funcion eliminar un registro 
import  Swal  from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const Show = () => {
        /// hooks - son como ganchos , api react que permite gestionar los estados en los componentes funcionales 
    // 1 Configuracion de los Hooks  --setProducts - sirve para actualizar el estado
        const [products, setProducts] = useState([])
        // useState devuelve un valor con listado y una funcion para actualizar.
    // 2 Referenciar a la DB del firestore
      const productsCollection = collection(db, "products")
    // 3 Funcion para mostrar TODOS los docs
        const getProducts = async() => {
            const data = await getDocs(productsCollection)
          //  console.log(data.docs)

          setProducts(
            data.docs.map((doc) => ( {...doc.data(), id:doc.id}))
          )
            console.log(products)
        }
    // 4 Funcion para eliminar un doc
        const deleteProduct = async (id) =>{
           const productDoc = doc(db,"products", id)
           await deleteDoc(productDoc)
           getProducts()
        }
    // 5 Funcion de configuracion para SweetAlert 2 

    // 6 Usamos useEffect
    useEffect(()=>{
            getProducts()
            //eslint-disabled-next-line
        } , [] )
    // 7 Devolvemos vista de nuestro componente
    return (
        // el "to= /ejemplo" es como referenciar una ruta.
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='d-grid gap-2'>
                        <Link to="/create" className='btn btn-success mt-2 mb-2'>Create</Link>
                        </div>
                        <table className='table table-dark table-hover'>
                            <thead>
                                <tr>
                                   <td>Description</td> 
                                   <td>Stock</td> 
                                   <td>Actions</td> 
                                </tr>
                            </thead>

                            <tbody>
                                {products.map( (product) =>(
                                 <tr key={product.id}>
                                   <td>{product.description}</td>  
                                   <td>{product.stock}</td>  
                                   <td>
                                       <Link to={'/edit/${product.id}'} className="btn btn-light"><i className="fa-solid fa-pen"></i></Link>
                                       <button onClick={() => {deleteProduct(product.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                   </td>
                                 </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Show