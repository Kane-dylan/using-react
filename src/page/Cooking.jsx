import React from 'react'

const Cooking = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3e5d8]">
      <div className="max-w-4xl sm:p-10 md:m-44 bg-white sm:rounded-3xl shadow-lg">
        <div className="omelette bg-cover relative w-full h-[40vh] sm:rounded-2xl"></div>
        <h1 className="text-4xl young-serif-regular mt-8">
          Simple Omelette Recipe
        </h1>
        <p className="outfit text-[#9f9e9a] mt-4">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese. vegetables, or meats.
        </p>
        <div className="bg-[#fff7fc] outfit p-6 rounded-lg mt-8">
          <h2 className="text-xl mb-2 font-extrabold text-[#6c334b]">
            Preparation time
          </h2>
          <ol className="flex flex-col gap-2 text-[#726864]">
            <li className="font-medium">
              <span className="text-[#6c334b]">•</span>
              <span className="font-bold ml-5">Total</span>: Approximately 10
              minutes
            </li>
            <li className="font-medium">
              <span className="text-[#6c334b]">•</span>
              <span className="font-bold ml-5">Preparation</span>: 5 minutes
            </li>
            <li className="font-medium">
              <span className="text-[#6c334b]">•</span>
              <span className="font-bold ml-5">Cooking</span>: 5 minutes
            </li>
          </ol>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="young-serif-regular text-[#78453a] text-3xl font-medium">
            Ingredients
          </h2>
          <ul className="font-medium mt-4 text-[#726864]">
            <li>
              <span className="text-[#78453a]">•</span>
              <span className="ml-5">2-3 large eggs</span>
            </li>
            <li>
              <span className="text-[#78453a]">•</span>
              <span className="ml-5">Salt, to taste</span>
            </li>
            <li>
              <span className="text-[#78453a]">•</span>
              <span className="ml-5">Pepper, to taste</span>
            </li>
            <li>
              <span className="text-[#78453a]">•</span>
              <span className="ml-5">1 tablespoon of butter or oil</span>
            </li>
            <li>
              <span className="text-[#78453a]">•</span>
              <span className="ml-5">
                Optional fillings: cheese,diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </div>
        <hr />
        <div className="mt-8 mb-8">
          <h1 className="young-serif-regular text-[#78453a] text-3xl font-medium">
            Instructions
          </h1>
          <ol className="text-[#726864] outfit">
            <li>
              <span className="text-[#78453a]">1.</span>
              <span className="font-extrabold">Beat the eggs</span>: In a bowl,
              beat the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>
            <li>
              <span className="text-[#78453a]">2.</span>
              <span className="font-extrabold">Heat the pan</span>: Place a
              non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li>
              <span className="text-[#78453a]">3.</span>
              <span className="font-extrabold">Cook the omelette</span>: Once
              the butter is melted and bubbling, pour in the eggs. Tilt the pan
              to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <span className="text-[#78453a]">4.</span>
              <span className="font-extrabold">Add fillings (optional)</span>:
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li>
              <span className="text-[#78453a]">5.</span>
              <span className="font-extrabold">Fold and serve</span>: As the
              omelette continues to cook, carefully lift one edge and fold it
              over the fillings. Let it cook for another minute, then slide it
              onto a plate.
            </li>
            <li>
              <span className="text-[#78453a]">6.</span>
              <span className="font-extrabold">Enjoy</span>: Serve hot, With
              additional salt and pepper if needed.
            </li>
          </ol>
        </div>
        <hr />
        <div>
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <thead>
              <tr>
                <th>Calories</th>
                <th>Protein</th>
                <th>Fat</th>
                <th>Carbs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>210 kcal</td>
                <td>13g</td>
                <td>16g</td>
                <td>1g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cooking