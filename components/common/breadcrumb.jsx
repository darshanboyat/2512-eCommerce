// components/Breadcrumb.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LiaGreaterThanSolid } from "react-icons/lia";

const Breadcrumb = ({name, category}) => {
  const router = useRouter();
  const { pathname } = router;

  const breadcrumbItems = pathname.split('/').filter((item) => item !== '');

  return (
    <nav>
      <ul className="flex items-center py-2 px-5 font-semibold text-sm">
        <li>
          <Link href="/">
            <a>Shop</a>
          </Link>
        </li>
          <LiaGreaterThanSolid className='mx-2'/>
        <li>
          <Link href="/">
            <a>{category}</a>
          </Link>
        </li>
          <LiaGreaterThanSolid className='mx-2'/>
        <li>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
