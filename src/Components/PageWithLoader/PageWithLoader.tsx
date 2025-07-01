import { useSelector } from 'react-redux';
import { visible } from '../../Redux/Slices/navSlice';
import { LoaderBoundary } from '../../App';

type PageWithLoaderProps = {
  children: React.ReactNode;
};

export default function PageWithLoader({ children }: PageWithLoaderProps) {
  const navVisible = useSelector(visible);

  return (
    <>
      <div className="ml-30 absolute z-[999]">{navVisible && children}</div>
      {!navVisible && <LoaderBoundary />}
    </>
  );
}
