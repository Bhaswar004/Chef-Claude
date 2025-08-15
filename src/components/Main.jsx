import React from "react";
import IngredientsList from "/src/components/IngredientsList.jsx";
import ClaudeRecipe from "/src/components/ClaudeRecipe.jsx";
import { getRecipeFromMistral } from "/src/ai";
import "../index.css"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    
  ]);
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

// import React from "react";
// import IngrediantsList from "/src/components/IngrediantsList.jsx";
// import ClaudeRecipie from "/src/components/ClaudeRecipie.jsx";
// import { getRecipeFromGemini } from "../ai";

// export default function Main() {
//   const [ingredients, setIngredients] = React.useState([]);
//   const [recipeShown, setRecipeShown] = React.useState(false);
//   const [recipe, setRecipe] = React.useState("");

//   async function getRecipe(currentIngredients) {
//     const recipeMarkdown = await getRecipeFromGemini(currentIngredients);
//     console.log(recipeMarkdown); // ✅ console output
//     setRecipe(recipeMarkdown);
//     setRecipeShown(true);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const newIngredient = formData.get("ingredient");
//     if (newIngredient.trim() !== "") {
//       const updatedIngredients = [...ingredients, newIngredient];
//       setIngredients(updatedIngredients);
//       getRecipe(updatedIngredients); // Fetch recipe after adding ingredient
//     }
//     e.target.reset();
//   }

//   return (
//     <main>
//       <form onSubmit={handleSubmit} className="add-ingredient-form">
//         <input
//           aria-label="Add ingredient"
//           type="text"
//           placeholder="e.g. Oregano"
//           name="ingredient"
//         />
//         <button type="submit">Add Ingredient</button>
//       </form>

//       {ingredients.length > 0 && (
//         <IngrediantsList
//           ingrediants={ingredients}
//           getRecipe={() => getRecipe(ingredients)}
//         />
//       )}

//       {recipeShown && <ClaudeRecipie recipe={recipe} />}
//     </main>
//   );
// }
