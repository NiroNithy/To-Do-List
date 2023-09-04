import React from 'react'

const Footer = () => {
    const year =new Date();
  return (
    <footer>CopyRight &copy; {year.getFullYear()}</footer>
  )
}

export default Footer