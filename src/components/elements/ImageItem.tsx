type ImageItemProps = {
  src: string;
  className?: string;
  alt?: string;
};
const ImageItem: React.FC<ImageItemProps> = ({ src, className, alt }) => {
  return <img src={src} className={className || ""} alt={alt || ""} />;
};

export default ImageItem;
