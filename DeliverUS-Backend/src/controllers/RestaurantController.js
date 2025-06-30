import { Restaurant, RestaurantCategory } from '../models/models.js'

const index = async function (req, res) {
  try {
    const restaurants = await Restaurant.findAll( // Busca todos los registros de Restaurant
      {
        attributes: { exclude: ['userId'] }, // Exluye userId para no mostrarlo en respuesta
        include:
      {
        model: RestaurantCategory, // Incluye los datos de RestaurantCategory
        as: 'restaurantCategory'
      },
        order: [[{ model: RestaurantCategory, as: 'restaurantCategory' }, 'name', 'ASC']] // Ordenar por el campo name
      }
    )
    res.json(restaurants)
  } catch (err) {
    res.status(500).send(err)
  }
}

const RestaurantController = {
  index
}
export default RestaurantController
