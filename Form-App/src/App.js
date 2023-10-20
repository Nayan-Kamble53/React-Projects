import { useState } from 'react';
import './App.css';

export default function App() {

  //rather than using number of usestates, we use only one use state to store all the form data in formData in which we can store any amount of data
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", country: "",  comments: false, candidates: false, offers: false, radios: ""});

  function changeHandler(event) {
    const {name, value, checked, type} = event.target; //jis element pe click kiya hai vo hai "EVENT.TARGET"
    setFormData(prevFormData => {
      return {
        ...prevFormData, //this is used for copy of previous data stored 
        [name] : type === "checkbox" ? checked : value
       //agar clicked element checkbox hai toh checked ki value update kro
       //otherwise normal value update kro jo bhi click hoke change hua hai 
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the data of entire form");
    console.log(formData);
  }
  return (  
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
      <br/>

        <label htmlFor='firstName' className='font-bold mb-3'>First Name</label>
        <br/>
        <input 
        className='input px-2 py-1 w-[40vw] mt-2' 
        type='text' 
        placeholder='Enter first name' 
        onChange={changeHandler} 
        name='firstName' 
        value={formData.firstName}/>
        {/* value is given to track the state of each state in each state */}
        <br/><br/>

        <label htmlFor='lastName' className='font-bold'>Last Name</label>
        <br/>
        <input
        className='input px-2 py-1 w-[40vw] mt-2' 
        type='text' placeholder='Enter Last name' 
        onChange={changeHandler} 
        name='lastName' 
        value={formData.lastName}/>
        <br/><br/>

        <label htmlFor='email' className='font-bold'>Email Address</label>
        <br/>
        <input 
        className='input px-2 py-1 w-[40vw] mt-2' 
        type='email' 
        placeholder='Enter your email' 
        onChange={changeHandler} 
        name='email' 
        value={formData.email}/>
        <br/><br/>

        <label className='font-bold'>Country</label>
        <br/>
        <select 
        className='input px-2 py-1 w-[40vw] mt-2 font-semibold'
        name='country' 
        id='country' 
        value={formData.country}
        onChange={changeHandler} 
        >
        <option>Select Your Country</option>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
        </select>
        <br/><br/>


        <fieldset> {/*to group elements we use fieldset and to give it a caption we use legend */}
          <legend className='font-bold text-[18px]'>By Email</legend>
          <br/>
            <input
              id='comments'
              name='comments'
              type='checkbox'
              checked={formData.comments}
              onChange={changeHandler}
              className='cursor-pointer'
            />
              <label htmlFor='comments' className='font-bold cursor-pointer'> Comments</label>
              <p className='mx-4 text-gray-500'>Get notified when someone posts a comment on a posting.</p>
              <br/>

            <input
              id='candidates'
              name='candidates'
              type='checkbox'
              checked={formData.candidates}
              onChange={changeHandler}
              className='cursor-pointer'
            />
              <label htmlFor='candidates' className='font-bold cursor-pointer'> Candidates</label>
              <p className='mx-4 text-gray-500'>Get notified when a candidate applies for a job.</p>
              <br/>      

            <input
              id='offers'
              name='offers'
              type='checkbox'
              checked={formData.offers}
              onChange={changeHandler}
              className='cursor-pointer'
            />
              <label htmlFor='offers' className='font-bold cursor-pointer'> Offers</label>
              <p className='mx-4 text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
              <br/>
        </fieldset>

        
        <fieldset>
            <legend className='font-bold'>Push Notifications</legend>
            <p className='text-gray-500'>These are delivered via SMS to your mobile phone</p>
            <br/>
          <div className='leading-relaxed'>
            <input
              type='radio'
              name='radios'
              id='radio1'
              value='Everything'
              onChange={changeHandler}
            />
            <label htmlFor='radio1' className='font-semibold cursor-pointer'> Everything</label>
            <br/>

            <input
              type='radio'
              name='radios'
              id='radio2'
              value='Same as email'
              onChange={changeHandler}
            />
            <label htmlFor='radio2' className='font-semibold cursor-pointer'> Same as email</label>
            <br/>

            <input
              type='radio'
              name='radios'
              id='radio3'
              value='No push notifications'
              onChange={changeHandler}
            />
            <label htmlFor='radio3' className='font-semibold cursor-pointer'> No push notifications</label>
            </div>
          </fieldset>
          <br/>

        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>
          Submit
        </button>    

      </form>
    </div>
  );
}


