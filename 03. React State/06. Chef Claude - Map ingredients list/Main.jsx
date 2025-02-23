export default function Main() {
  let ingredients = ["Chicken", "Oregano", "Tomatoes"];

  /**
   * Review Challenge:
   * Map over the list of ingredients and render them as list items
   *
   * Note: We're doing things a weird way here. Don't worry,
   * we're building up to learning the right way 🙂
   */
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients = [...ingredients, newIngredient];
    console.log(ingredients)

   
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <div className="list-form">
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li> // Use the ingredient as the key
          ))}
        </ul>
      </div>
    </main>
  );
}
