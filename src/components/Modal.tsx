/* eslint-disable react/prop-types */
import React from 'react'
import '../index.css'

type Props = {
  open?: () => void
  onClose?: () => void
  children?: string
  styleBox?: string
  styleClose?: string
  styleTitle?: string
  styleDesc?: string
  title?: string
  description?: string
  position?: string
}

export const Modal: React.FC<Props> = ({
  open,
  onClose,
  children,
  styleBox,
  styleClose,
  styleTitle,
  styleDesc,
  title,
  description,
  position,
}) => {
  return (
    <div
      onClick={onClose}
      className={`${position ? position : 'fixed inset-0 flex justify-center items-center transition-colors'} ${open ? 'visible bg-black/10 z-50' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styleBox ? styleBox : 'bg-card font-title border-input border py-8 px-8'} rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className={` ${styleClose ? styleClose : 'font-bold hover:bg-white/10'} absolute top-1 right-1 p-1 rounded-lg`}
        >
          X
        </button>
        {title && (
          <h1
            className={`${styleTitle ? styleTitle : 'flex justify-center items-center mb-3 text-cardforeground'}`}
          >
            {title}
          </h1>
        )}
        {description && (
          <p
            className={`${styleDesc ? styleDesc : 'flex justify-center items-center text-cardforeground'}`}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}
