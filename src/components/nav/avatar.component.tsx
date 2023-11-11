type Props = {
  image?: string;
  initials?: string;
}

export default function Avatar({ initials, image }: Props) {
  return (
    <div className="p-2 rounded-full flex justify-center items-center bg-sky-500">
      {initials && (
        <span className="text-white">{initials}</span>
      )}
    </div>
  );
}
