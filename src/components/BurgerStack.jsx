const BurgerStack = (props) => {
  const { burger, removeFromBurger } = props;
  return (
    <ul>
      {burger?.map((ingredient, idx) => {
        return (
          <li key={idx} style={{backgroundColor: ingredient.color}}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(idx)}>-</button>
          </li>
        )
      })}
      {burger?.length === 0 && <li>No Ingredients</li>}
    </ul>
  )
};

export default BurgerStack;