import React from "react";

function Categories({ value, onCategory }) {
  const categories = ['Все', 'Бургеры', 'Комбо', 'Закуски', 'Соусы'];

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
export default Categories