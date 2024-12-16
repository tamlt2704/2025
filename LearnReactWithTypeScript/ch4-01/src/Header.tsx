import React, { FormEvent } from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';

export default function Header() {
  const [searchParam, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    // throw new Error('Function not implemented.');
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    // setSearchParams({ search });
    navigate(`/products/?search=${search}`);
  }

  return (
    <header className="text-center text-slate-500 bg-slate-800">
      React Tools
      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `no-underline ${isActive} ? "border-white" : "border-transparent"`
          }
        >
          Products
        </NavLink>

        <NavLink to={'admin'} className={'p-1 border-solid'}>
          Admin
        </NavLink>
        <form className="relative text-right" onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            placeholder="Search"
            defaultValue={searchParam.get('search') ?? ''}
            className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
          />
        </form>
      </nav>
    </header>
  );
}
