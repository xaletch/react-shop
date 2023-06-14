import React from "react";

type CategoriesProps = {
  value: number;
  onCategory: (id: number) => void;
  categories: string[];
}

export const Categories: React.FC<CategoriesProps> = ({ value, onCategory, categories }) => {

    return (
        <div className="categories">
            <ul>
              {categories.map((categoryName, i ) => 
                <li key={i} onClick={() => onCategory(i)} className={value === i ? 'active' : ''}>{categoryName}</li>
              )}
            </ul>
        </div>
    )
}