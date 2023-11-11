import Avatar from './avatar.component';

type Props = {
  name: string;
  handle: string;
  time: string;
  content: string;
  media?: string;
};

export default function Message({ name, handle, time, content, media }: Props) {
  return (
    <article className="">
      <Avatar initials="SH" />
      <div className="flex">
        <h3 className="">{name}</h3>
        <p>{handle}</p>
        <span>{time}</span>
      </div>
      <div className="">
        <p>{content}</p>
      </div>
    </article>
  );
}
