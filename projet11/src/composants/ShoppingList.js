import { plantList } from '../datas/plantList'

function ShoppingList() {
  return (
    <ul>
      {plantList.map((plant) => (
        <li key={plant.id}>
          {plant.name}
          {plant.isBestSale ? <span>🔥</span> : null}
        </li>
      ))}
    </ul>
    // <ul>
    //   {plantList.map((plant, index) => (
    //     <li key={`${plant.name}-${index}`}>{plant}</li>
    //   ))}
    // </ul>
  )
}

export default ShoppingList
