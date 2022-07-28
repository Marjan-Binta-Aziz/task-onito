import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
const Invoice = () => {
  const {register, handleSubmit} = useForm();
  const [dummy, setDummy] = useState([]);
  const onSubmit = (data) => {
    const date = data.date;
    const amount = data.amount;
    const payment_mode = data.payment_mode;
    const remark = data.remark;
    const newDummy = {date, amount,payment_mode,remark};
    const newDummys = [...dummy,newDummy ];

    setDummy(newDummys);
    console.log(data);
    console.log(newDummys);
    };
  useEffect(()=>{
    fetch('dummy.json')
    .then(res=> res.json())
    .then(data => setDummy(data))
  },[])

  return (
    <div className="container lg:px-80 lg:py-16 sm:w-auto w-full text-left">
      <h6 className='underline'>Recipient Details</h6>
      <div className='w-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="">Date<span className='text-red-600'>*</span> </label>
          <input
            type="date"
            placeholder="Enter date"
            className="input input-bordered input-primary input-sm w-full max-w-max mt-2"
            id="floatingInput"
            //   value={}
            {...register('date')}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Amount<span className='text-red-600'>*</span> </label>
          <input
            type="number"
            placeholder="Enter Amount (in INR)"
            //   value={}
            className="input input-bordered input-primary input-sm w-full max-w-max mt-2"
            id="floatingInput"
            {...register('amount')}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Payment Mode<span className='text-red-600'>*</span> </label>
          <select  {...register('payment_mode')} class="input input-bordered input-primary input-sm w-full max-w-xs mt-2">
            <option>cash</option>
            <option>card</option>
          </select>
        </div>

        <div className="mb-3">
            <label htmlFor="">Remark </label>
          <input
            type="text"
            placeholder="Remark"
            className="input input-bordered input-primary input-sm w-full max-w-xs mt-2"
            id="floatingInput"
            {...register('remark')}
          />
        </div>

        <div className='mb-3 text-center'>
        <input className="btn btn-outline-danger px-2" type="submit" value="Cancel" />
        <input className="btn btn-success px-2  ml-2" type="submit" value="Submit" />
        <button class="btn gap-2">
  Button
</button>
        </div>
      </form>
      </div>
      
      
      
    </div>
  );
};

export default Invoice;
