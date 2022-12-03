import {
  component$,
  useSignal,
  $,
  QwikKeyboardEvent,
  QwikChangeEvent,
} from '@builder.io/qwik';
import { add } from '~/store';

export default component$(() => {
  const content = useSignal<string>('');

  const addTodo = $(() => {
    add({
      completed: false,
      id: Date.now(),
      value: content.value,
    });

    content.value = '';
  });

  const handleEnter = $((event: QwikKeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  });

  const handleChange = $((event: QwikChangeEvent<HTMLInputElement>) => {
    content.value = event.target.value;
  });

  return (
    <div class='flex flex-row space-x-2 w-full justify-center items-center'>
      <input
        aria-label='todo'
        placeholder='type something'
        name='todo'
        type='text'
        value={content.value}
        onKeyUp$={handleEnter}
        onChange$={handleChange}
        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      <button
        type='button'
        name='add-todo'
        aria-label='add todo item'
        onClick$={addTodo}
        class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
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
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          ></path>
        </svg>
      </button>
    </div>
  );
});
