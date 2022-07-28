import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from "react-hot-toast";

const Invoice = () => {
  const {register, handleSubmit} = useForm();
  const [dummy, setDummy] = useState([]);
  const onSubmit = (data) => {
    if(data === 1){
      toast.success("The item has benn added successfully!");
    }
    const date = data.date;
    const amount = data.amount;
    const payment_mode = data.payment_mode;
    const remark = data.remark;
    const newDummy = {date, amount, payment_mode, remark};
    const newDummys = [...dummy, newDummy];

    setDummy(newDummys);
    console.log(data);
    console.log(newDummys);
  };
  useEffect(() => {
    fetch('dummy.json')
      .then((res) => res.json())
      .then((data) => setDummy(data));
  }, []);

  return (
    <div className="container lg:px-80 lg:py-16 sm:w-auto w-full text-left">
      <h6 className="underline">Recipient Details</h6>
      <div className="w-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="">
              Date<span className="text-red-600">*</span>{' '}
            </label>
            <input
              type="date"
              placeholder="Enter date"
              className="input input-bordered input-sm w-full max-w-max mt-2"
              id="floatingInput"
              //   value={}
              {...register('date')}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">
              Amount<span className="text-red-600">*</span>{' '}
            </label>
            <input
              type="number"
              placeholder="Enter Amount (in INR)"
              //   value={}
              className="input input-bordered input-sm w-full max-w-max mt-2"
              id="floatingInput"
              {...register('amount')}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">
              Payment Mode<span className="text-red-600">*</span>{' '}
            </label>
            <select
              {...register('payment_mode')}
              class="input input-bordered input-sm w-full max-w-xs mt-2"
            >
              <option>cash</option>
              <option>card</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="">Remark </label>
            <input
              type="text"
              placeholder="Remark"
              className="input input-bordered input-sm w-full max-w-xs mt-2"
              id="floatingInput"
              {...register('remark')}
            />
          </div>

          <div className="mb-3 text-center">
            <button class="gap-2 btn btn-outline btn-error rounded- px-2" value="Cancel">
            Cancel
            </button>
            <button class="gap-2 btn btn-success px-2 ml-2 bg-green-500" value="Submit">
              Submit
              
            </button>
          </div>
        </form>
      </div>

      <div className="mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Mode</th>
              <th>Remark</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {dummy.map((item, key) => (
              <tr key={key}>
                <th>{key + 1}</th>
                <td className=" capitalize">{item.date}</td>
                <td>{item.amount} INR</td>
                <td>{item.payment_mode}</td>
                <td>{item.remark}</td>
                {/* <td><button className='btn btn-primary btn-sm'>Delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
