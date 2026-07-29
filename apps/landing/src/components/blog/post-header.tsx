import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <header>
      <h1 className="mb-2 font-bold text-2xl text-foreground tracking-tighter sm:text-4xl">
        {title}
      </h1>
      <div className="mb-2 text-landing-subtle-foreground text-lg">
        <DateFormatter dateString={date} />
      </div>
    </header>
  );
};

export default PostHeader;
