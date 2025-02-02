import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const List = ({token}) => {

  const [list,setList] = useState([])
  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const navigate = useNavigate(); 

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }   

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const editProduct = (id) => {
    const product = list.find(item => item._id === id);
    setCurrentProduct(product);
    setIsEdit(true);
    navigate('/EditPage', { state: { product } }); 
  };

  const updateProduct = async (event) => {
    event.preventDefault(); 

    try {
      const sizesArray = Array.isArray(currentProduct.sizes)
        ? currentProduct.sizes
        : currentProduct.sizes.split(',');

      // Handle image uploads
      const images = [image1, image2, image3, image4];
      const uploadedImageUrls = [];

      for (const image of images) {
        if (image && typeof image !== 'string') {
          const formData = new FormData();
          formData.append('image', image);

          const response = await axios.post(`${backendUrl}/api/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
            }
          });

          if (response.data.success) {
            uploadedImageUrls.push(response.data.url);
          } else {
            throw new Error(response.data.message);
          }
        } else {
          uploadedImageUrls.push(image); // If it's already a URL, keep it as is
        }
      }

      const updatedProduct = {
        ...currentProduct,
        sizes: JSON.stringify(sizesArray),
        images: uploadedImageUrls
      };

      const response = await axios.put(`${backendUrl}/api/product/update/${currentProduct._id}`, updatedProduct, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        setIsEdit(false);
        fetchList(); 
        navigate('/'); 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  const removeProduct = async (id) => {
    try {
      const response = await axios.post(`${backendUrl}/api/product/remove`, { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

 


  

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
       <p className='mb-2'> All Products list</p>
      <div className='flex flex-col gap-2'>

       {/*list in table  */}

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/*list product */}
        {list.map((item, index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
            <img className='w-12' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
           <p  onClick={() => removeProduct(item._id)}  className='text-right md:text-center cursor-pointer text-lg'>X</p>
           <button onClick={() => editProduct(item._id)} className= 'text-right md:text-center cursor-pointer text-lg'>Update</button>
          </div>
        ))}
      </div>  

      {isEdit && (
        <div className='edit-form'>
          <h2>Edit Product</h2>
          <form onSubmit={updateProduct}>
            <input type="text" value={currentProduct.name} onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })} />
            <textarea value={currentProduct.description} onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}></textarea>
            <input type="number" value={currentProduct.price} onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })} />
            <input type="text" value={currentProduct.category} onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })} />
            <input type="text" value={currentProduct.subCategory} onChange={(e) => setCurrentProduct({ ...currentProduct, subCategory: e.target.value })} />
            <input type="text" value={Array.isArray(currentProduct.sizes) ? currentProduct.sizes.join(',') : currentProduct.sizes} onChange={(e) => setCurrentProduct({ ...currentProduct, sizes: e.target.value })} />
            <input type="checkbox" checked={currentProduct.bestseller} onChange={(e) => setCurrentProduct({ ...currentProduct, bestseller: e.target.checked })} />
            <div>
              <p className='DD3'>Upload Image</p>
              <div className='DDD'>
                <label htmlFor='image1'>
                  <img className='DD1' src={ !image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='null' />
                  <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id="image1" hidden />
                </label>
                <label htmlFor='image2'>
                  <img className='DD1' src={ !image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='' />
                  <input onChange={(e)=>setImage2(e.target.files[0])} type='file' id="image2" hidden />
                </label>
                <label htmlFor='image3'>
                  <img className='DD1' src={ !image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='' />
                  <input onChange={(e)=>setImage3(e.target.files[0])} type='file' id="image3" hidden />
                </label>
                <label htmlFor='image4'>
                  <img className='DD1' src={ !image4 ? assets.upload_area : URL.createObjectURL(image4)} alt='' />
                  <input onChange={(e)=>setImage4(e.target.files[0])} type='file' id="image4" hidden />
                </label>
              </div>
            </div>
            <button className='updateButton' type="submit">Update</button>
          </form>
        </div>
      )}
    </>
  )
}

export default List