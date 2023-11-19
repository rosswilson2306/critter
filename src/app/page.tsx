import Message from '@/components/message.component';
import Messages from '@/components/messages.component';

const MESSAGES = [
  {
    id: 1,
    name: 'Stevie Mac',
    handle: '@stevie-mac',
    time: 'Yesterday',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between col-span-5">
      <section className="flex flex-col">
        <Messages />
      </section>
    </main>
  );
}
