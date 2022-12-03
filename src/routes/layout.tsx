import { component$, Slot } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <main>
        <section
          class={
            'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-400 via-teal-500 to-sky-600'
          }
        >
          <div
            class={
              'mx-auto py-40 px-4 flex justify-center items-center h-screen w-5/6'
            }
          >
            <Slot />
          </div>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  meta: [
    {
      key: 'description',
      name: 'description',
      content: 'Simple Todo app using Qwik City, React and Valtio'
    },
  ],
};