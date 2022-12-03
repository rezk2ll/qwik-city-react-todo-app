import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import Input from '~/components/todo/input';
import List from '~/components/todo/list';

export default component$(() => {
  return (
    <div class={'w-full'}>
      <div class={'flex flex-row'}>
        <h1 class='flex-grow mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
          Qwik
        </h1>
        <Link
          href='/react'
          class={
            'flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2'
          }
        >
          Use React
        </Link>
      </div>
      <div class={'flex justify-center w-full h-96'}>
        <div class={'p-6 rounded-lg shadow-lg bg-white w-full flex flex-col'}>
          <div class={'flex-grow overflow-x-auto'}>
            <List />
          </div>
          <Input />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik todo app'
};
