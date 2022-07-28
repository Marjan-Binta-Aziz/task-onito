import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

const Invoice = () => {
  const {register, handleSubmit} = useForm();
  const [dummy, setDummy] = useState([]);
  const onSubmit = (data) => {
    if (onSubmit === true) {
      toast.success('The item has been added successfully!');
      console.log(data.status);
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
    <div className="container lg:px-80 py-10 sm:w-auto w-full text-left">
      <h1 className="text-center text-3xl font-bold">Task Onito</h1>
      <h6 className="underline font-bold">Recipient Details</h6>
      <div className="w-3/4 mt-5 mb-9">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 grid grid-cols-2">
            <label htmlFor="">
              Date<span className="text-red-600">*</span>{' '}
            </label>
            <input
              type="date"
              placeholder="Enter date"
              className="input input-bordered input-sm "
              id="floatingInput"
              //   value={}
              {...register('date')}
              required
            />
          </div>

          <div className="mb-3 grid grid-cols-2">
            <label htmlFor="">
              Amount<span className="text-red-600">*</span>{' '}
            </label>
            <input
              type="number"
              placeholder="Enter Amount (in INR)"
              //   value={}
              className="input input-bordered input-sm"
              id="floatingInput"
              {...register('amount')}
              required
            />
          </div>
          <div className="mb-3 grid grid-cols-2">
            <label htmlFor="">
              Payment Mode<span className="text-red-600">*</span>{' '}
            </label>
            <select {...register('payment_mode')} className="input input-bordered input-sm">
              <option>cash</option>
              <option>card</option>
            </select>
          </div>

          <div className="mb-3 grid grid-cols-2">
            <label htmlFor="">Remark </label>
            <input
              type="text"
              placeholder="Remark"
              className="input input-bordered input-sm"
              id="floatingInput"
              {...register('remark')}
            />
          </div>

          <div className="mb-3 mt-5 text-right">
            <button className="btn btn-outline btn-error rounded- px-6" value="Cancel">
              Cancel <br />
              (ESC)
            </button>
            <button className="btn btn-success  px-6 ml-10" value="Submit">
              Submit <br />
              (ꕤ S)
            </button>
          </div>
        </form>
      </div>
      <p className="text-2xl font-bold">Total Array length: {dummy.length}</p>
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
