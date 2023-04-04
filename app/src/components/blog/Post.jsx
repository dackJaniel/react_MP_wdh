export default function Post(props) {
  const { title, content, imgUrl } = props.props;
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg">
      <img
        className="object-cover w-full h-auto rounded-t-lg aspect-[4/5]"
        src={imgUrl}
        alt={imgUrl}
      />

      <div className="p-6">
        <h5 className="mb-2 text-2xl font-semibold">{title}</h5>

        <p className="mb-4 text-base">
          {content.slice(0, 150)}
          {content.length >= 150 && "..."}
        </p>

        <div className="flex justify-start gap-7 text-sky-700">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            SHARE
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}
