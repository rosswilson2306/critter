import Avatar from './nav/avatar.component';

export type MessageData = {
  name: string;
  handle: string;
  time: string;
  content: string;
  media?: string;
};

export default function Message({ name, handle, time, content, media }: MessageData) {
  return (
    <article className="px-4 py-2 grid grid-cols-8">
      <div className="p-2">
        <Avatar initials="SH" />
      </div>
      <div className="col-span-7">
        <div className="flex gap-2 mb-2">
          <h3 className="">{name}</h3>
          <p className="text-gray-500">{handle}</p>
          <span className="text-gray-500">{time}</span>
        </div>
        <div className="">
          <p>{content}</p>
        </div>
      </div>
    </article>
  );
}
