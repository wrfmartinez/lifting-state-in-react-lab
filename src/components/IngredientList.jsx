const IngredientList = (props) => {
  const { ingredients, addToBurger, removeFromBurger } = props;

  return (
    <ul>
      {ingredients.map((ingredient, idx) => {
        return (
          <li key={idx} style={{backgroundColor: ingredient.color}}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        )
      })}
    </ul>
  )
};

export default IngredientList;