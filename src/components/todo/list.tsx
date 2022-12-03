import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import { watch } from 'valtio/utils';
import { store, Todo, toggle, remove } from '~/store';

export default component$(() => {
  const state = useStore<{ todos: Todo[] }>({
    todos: [],
  });

  useClientEffect$(
    () => {
      watch((get) => {
        state.todos = [...get(store).todos];
      });
    },
    { eagerness: 'visible' }
  );

  return (
    <div class={'w-full flex flex-col space-y-4'}>
      {state.todos.map(({ id, completed, value }) => {
        return (
          <div class={'flex flex-row space-x-2 rounded-md w-full'} key={id}>
            <button
              name='item'
              disabled
              type='button'
              class='h-full flex-grow text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2'
            >
              {value}
            </button>
            <button
              name='toggle'
              onClick$={() => toggle(id)}
              type='button'
              class='text-blue-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center '
            >
              {completed ? (
                <svg
                  class='w-6 h-6'
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
                  class='w-6 h-6'
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
              onClick$={() => remove(id)}
              name='remove'
              type='button'
              class='text-red-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center '
            >
              <svg
                class='w-6 h-6'
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
              <span class='sr-only'>remove todo</span>
            </button>
          </div>
        );
      })}
    </div>
  );
});
