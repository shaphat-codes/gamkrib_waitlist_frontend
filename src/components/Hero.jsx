'use client'
import  Typed from 'react-typed'
import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



const Hero = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


    let submitForm = async (e)=> {
		
		e.preventDefault()

		let response = await fetch('https://gamkribwaitlist.onrender.com/waitlist/', {

			method: 'POST',
      credentials: "include",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
            'full_name':e.target.full_name.value,
			'email':e.target.email.value,
            'phone':e.target.phone.value,
			
    
    })
		})
		
		let data = await response.json()
		
		console.log('response:', response)
		if (response.status === 200) {
			
			alert("we have received your info. we will get back to you") 
		} else{
			alert("something went wrong")
		}
		
	}




  return (
    <div className='text-white'>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Gamkrib</h1>
        <ul className='hidden md:flex'>
           
            
        </ul>
        <div onClick = {handleNav} className='block md:hidden'>
            {!nav ? <p><AiOutlineMenu/></p> :<p><AiOutlineClose/></p> }
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000308] ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Gamkrib</h1>

            <ul className='uppercase '>
                
                
                
            </ul>
        </div>
    </div>
    
    <br/><br/><br/><br/><br/>
        <div className='max-w-[800px] mt-[-96px] w-full  mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 text-2xl'>We are building the most convenient way for students to</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Find  accommodation.</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>At Gamkrib, we offer you the best</p>
                <Typed className='text-[#00df9a] md:text-5xl sm:text-4xl text-xl font-bold pl-2' strings={["Save time", "Save money", "Security", "Value", "Comfort"]} typespeed={140} backspeed={150} loop/>
            </div>
            <br/>
            <p className='md:text-2xl text-xl font-bold text-gray-600'>Join our waitlist, and get exclusive offers when we launch</p>
            

        </div>
       
        <div className='flex justify-center items-center '>
           
<div class="w-full max-w-sm p-4 bg-[#051a05] border border-[#051a05] rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form onSubmit={submitForm} class=" space-y-6" action="#">
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-[#00df9a] dark:text-white">Full Name</label>
            <input type="text" name="full_name"  class="bg-gray-600   font-bold  text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required/>
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-[#00df9a] dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-600 font-bold  text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required/>
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-[#00df9a] dark:text-[#00df9a]">Phone number (whatsapp)</label>
            <input type="text" name="phone" class="bg-gray-600   font-bold  text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div class="flex items-start">
            
        </div>
        <button type="submit" class="w-full text-white bg-[#0d553e] hover:bg-[#158561] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join the waitlist</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        </div>
    </form>

</div>

</div>
    </div>
  )
}

export default Hero