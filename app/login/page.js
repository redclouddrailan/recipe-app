'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='max-w-xs mx-auto mt-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full '>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            {...register('email', { required: true })}
            type='email'
            required
            placeholder='Type here'
            className='input input-bordered w-full'
          />
        </div>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            {...register('password', { required: true })}
            type='password'
            required
            placeholder='Password'
            className='input input-bordered w-full '
          />
        </div>
        <button type='submit' className='btn btn-primary mt-5 w-full'>
          Sign In
        </button>
      </form>
    </div>
  );
}
