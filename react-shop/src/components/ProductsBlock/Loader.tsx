import React from 'react'
import ContentLoader from "react-content-loader";

export const Loader: React.FC = (props) => {
  return (
    <ContentLoader
    className='product-loader_block'
    speed={2}
    width={240}
    height={350}
    viewBox="0 0 240 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="120" cy="89" r="85" /> 
    <rect x="25" y="175" rx="10" ry="10" width="100" height="24" /> 
    <rect x="25" y="210" rx="10" ry="10" width="190" height="24" /> 
    <rect x="25" y="243" rx="10" ry="10" width="80" height="26" /> 
    <rect x="35" y="282" rx="20" ry="20" width="180" height="40" />
  </ContentLoader>
  )
}