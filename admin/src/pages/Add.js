import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("Sports");
  const [subCategory,setSubCategory] = useState("TeamSports");
  const [bestseller,setBestseller] = useState(false);
  const [sizes,setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
       const formdata = new FormData()
       
       formdata.append("name",name)
       formdata.append("description",description)
       formdata.append("price",price)
       formdata.append("category",category)
       formdata.append("subCategory",subCategory)
       formdata.append("bestseller",bestseller)
       formdata.append("sizes",JSON.stringify(sizes))

      image1 && formdata.append("image1",image1)
      image2 && formdata.append("image2",image2)
      image3 && formdata.append("image3",image3)
      image4 && formdata.append("image4",image4)
      
      const response = await axios.post(`${backendUrl}/api/product/add`,formdata,{headers:{token}});

      if(response.data.success){
         toast.success(response.data.message)
         setName("")
         setDescription("")
         setImage1(false)
         setImage2(false)
         setImage3(false)
         setImage4(false)
         setPrice("")
      }else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
       <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img className='w-20' src={ !image1 ?  assets.upload_area : URL.createObjectURL(image1)} alt='null' />
            <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id="image1" hidden />
          </label>
          <label htmlFor='image2'>
            <img className='w-20' src={ !image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='' />
            <input onChange={(e)=>setImage2(e.target.files[0])} type='file' id="image2" hidden />
          </label>
          <label htmlFor='image3'>
            <img className='w-20' src={ !image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='' />
            <input onChange={(e)=>setImage3(e.target.files[0])} type='file' id="image3" hidden />
          </label>
          <label htmlFor='image4'>
            <img className='w-20' src={ !image4 ? assets.upload_area : URL.createObjectURL(image4)} alt='' />
            <input onChange={(e)=>setImage4(e.target.files[0])} type='file' id="image4" hidden />
          </label>
        </div>
      </div>


      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Write content here' required />
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2' required>
            <option value="" disabled>Select category</option>
            <option value="Sports">SPORTS</option>
            <option value="FITNESS">FITNESS</option>
            <option value="Shoes,Clothing & others">Shoes,Clothing & others</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2' required>
            <option value="" disabled>Select subcategory</option>
            <option value="TeamSports">Team Sport</option>
            <option value="RACKET SPORTS">RACKET Sport</option>
            <option value="Sports Essentials">Sports Essentials</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='Amount' required />
        </div>
      </div>
      <div  >
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
        <div onClick={()=>setSizes(prev => prev.includes("s") ? prev.filter(item => item !== "s") : [...prev,"s"] )} >
          <p className={`${sizes.includes("s") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
        </div>
        <div  onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev,"M"] )}  >
          <p className={`${sizes.includes("M") ? "bg-yellow-200" : "bg-slate-300"}  px-3 py-1 cursor-pointer`}>M</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev,"L"] )}>
          <p className={`${sizes.includes("L") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
        </div>
        <div  onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev,"XL"] )}>
          <p className={`${sizes.includes("XL") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
        </div>
        <div  onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev,"XXL"] )}>
          <p className={`${sizes.includes("XXL") ? "bg-yellow-200" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>XXL</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("5") ? prev.filter(item => item !== "5") : [...prev,"5"] )}>
          <p className={`${sizes.includes("5") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>5</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("6") ? prev.filter(item => item !== "6") : [...prev,"6"] )}>
          <p className={`${sizes.includes("6") ? "bg-yellow-200" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>6</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("8UK") ? prev.filter(item => item !== "8UK") : [...prev,"8UK"] )}>
          <p className={`${sizes.includes("8UK") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>8UK</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("9UK") ? prev.filter(item => item !== "9UK") : [...prev,"9UK"] )}>
          <p className={`${sizes.includes("9UK") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>9UK</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("4LB") ? prev.filter(item => item !== "4LB") : [...prev,"4LB"] )}>
          <p className={`${sizes.includes("4LB") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>4LB</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("6LB") ? prev.filter(item => item !== "6LB") : [...prev,"6LB"] )}>
          <p className={`${sizes.includes("6LB") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>6LB</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("5KG") ? prev.filter(item => item !== "5KG") : [...prev,"5KG"] )}>
          <p className={`${sizes.includes("5KG") ? "bg-yellow-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>5KG</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("10KG") ? prev.filter(item => item !== "10KG") : [...prev,"10KG"] )}>
          <p className={`${sizes.includes("10KG") ? "bg-yellow-200" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>10KG</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("550ML") ? prev.filter(item => item !== "550ML") : [...prev,"L"] )}>
          <p className={`${sizes.includes("550ML") ? "bg-yellow-200" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>550ML</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("1L") ? prev.filter(item => item !== "1L") : [...prev,"1L"] )}>
          <p className={`${sizes.includes("1L") ? "bg-yellow-200" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>1L</p>
        </div>
        <div onClick={()=>setSizes(prev => prev.includes("SH") ? prev.filter(item => item !== "SH") : [...prev,"SH"] )}>
          <p className={`${sizes.includes("SH") ? "bg-yellow-200" : "bg-slate-200"}  px-3 py-1 cursor-pointer`}>SH</p>
        </div>
      </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id ="bestseller"/>
        <label className='cursor-pointer' htmlFor='bestseller'>Add to Bestseller</label>
      </div>
      <button className='w-28 py-3 mt-4 bg-yellow-300 text-black' type='submit'>ADD</button>
    </form>
  )
}

export default Add