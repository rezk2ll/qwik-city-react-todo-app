/** @jsxImportSource react */
import React from 'react';
import { useSnapshot } from 'valtio';
import { remove, store, toggle } from '~/store';

export const TodoList = (): React.ReactElement => {
  const state = useSnapshot(store);

  return (
    <div className={'w-full flex flex-col space-y-4'}>
      {state.todos.map(({ id, completed, value }) => {
        return (
          <div className={'flex flex-row space-x-2 rounded-md w-full'} key={id}>
            <button
              name='item'
              disabled
              type='button'
              className='h-full flex-grow text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2'
            >
              {value}
            </button>
            <button
              name='toggle'
              onClick={() => toggle(id)}
              type='button'
              className='text-blue-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center '
            >
              {completed ? (
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 13l4 4L19 7'
                  ></path>
                </svg>
              ) : (
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
              )}
            </button>
            <button
              name='remove'
              onClick={() => remove(id)}
              type='button'
              className='text-red-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center '
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                ></path>
              </svg>
              <span className='sr-only'>remove todo</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
