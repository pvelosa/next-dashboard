//quiero agregar, eliminar y actualizar un product

import { useState } from "react";
import Modal from "../../common/Modal";

import {
  CheckIcon,
} from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">List of Products</h2>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Añade producto
          </button>
        </span>


      </div>
    </div>
    <Modal open={open} setOpen= {setOpen}>
      <h1>holiii</h1>
    </Modal>
    </>
  );
}
