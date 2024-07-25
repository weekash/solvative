import React from 'react'

export default function Button({customClass, variant, children,...props}) {
    const variantClass={
        'primary':'btn-primary',
        'danger':'btn-danger'
      }
      return (
        <button
          {...props}
          className={`btn ${variantClass[variant]} ${customClass}`}
        >
          {children}
        </button>
      );
}
