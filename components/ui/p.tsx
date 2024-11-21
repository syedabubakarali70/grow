const P = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`leading-5 ${className}`}>{children}</p>;
};

export default P;
