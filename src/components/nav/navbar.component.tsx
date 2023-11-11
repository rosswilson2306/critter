import { twMerge } from 'tailwind-merge';
import { LuBell, LuHome, LuMail, LuSearch } from 'react-icons/lu';

const NAV_ITEMS = [
  { caption: 'Home', icon: <LuHome className="h-6 w-6" /> },
  { caption: 'Explore', icon: <LuSearch className="h-6 w-6" /> },
  { caption: 'Notifications', icon: <LuBell className="h-6 w-6" /> },
  { caption: 'Messages', icon: <LuMail className="h-6 w-6" /> },
];

type Props = {
  className: string;
};

export default function Navbar({ className }: Props) {
  return (
    <aside className={twMerge(className, 'border-r border-gray-700 h-full')}>
      <nav className="p-8 h-full">
        <ul className="h-full flex sm:flex-col gap-2 lg:gap-8 items-center justify-between lg:items-start lg:justify-start">
          {NAV_ITEMS.map((item) => (
            <li key={item.caption} className="flex gap-2">
              {item.icon}
              <span className="hidden lg:inline">{item.caption}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
