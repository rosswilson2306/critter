import { LuSettings } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import Avatar from './avatar.component';

type Props = {
  className: string;
};

export default function TopBar({ className }: Props) {
  return (
    <section className={twMerge(className, 'border-b border-gray-700')}>
      <div className="flex justify-between items-center h-full px-8">
        <Avatar initials="RW" />
        <button type="button" aria-label="Does nothing yet">
          <LuSettings className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
