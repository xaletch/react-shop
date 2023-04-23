import React from "react";

type CategoriesProps = {
  value: number;
  onCategory: (id: number) => void;
}

const categories = ['Все', 'Бургеры', 'Комбо', 'Закуски', 'Соусы'];

export const Categories: React.FC<CategoriesProps> = ({ value, onCategory, }) => {

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