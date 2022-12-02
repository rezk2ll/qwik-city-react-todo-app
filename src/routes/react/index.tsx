import { component$ } from '@builder.io/qwik';
import { qwikify$ } from '@builder.io/qwik-react';
import { TodoList } from '~/integrations/react/list';
import { Input } from '~/integrations/react/input';
import { DocumentHead, Link } from '@builder.io/qwik-city';

export default component$(() => {
  const ReactList = qwikify$(TodoList);
  const ReactInput = qwikify$(Input);

  return (
    <div class={'w-full'}>
      <div class={'flex flex-row'}>
        <h1 class='flex-grow mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
          Using React
        </h1>
        <Link
          href='/'
          class={
            'flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2'
          }
        >
          Use Qwik
        </Link>
      </div>
      <div class={'flex justify-center w-full h-96'}>
        <div class={'p-6 rounded-lg shadow-lg bg-white w-full flex flex-col'}>
          <div class={'flex-grow overflow-x-auto'}>
            <ReactList client:visible />
          </div>
          <ReactInput client:visible />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Todo app using React components with qwikify$',
};
