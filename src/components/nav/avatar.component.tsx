import { twMerge } from "tailwind-merge";

type Props = {
  image?: string;
  initials?: string;
  className?: string;
}

export default function Avatar({ initials, image, className }: Props) {
  return (
    <div className={twMerge("p-2 w-10 h-10 rounded-full flex justify-center items-center bg-sky-500", className)}>
      {initials && (
        <span className="text-white">{initials}</span>
      )}
    </div>
  );
}
