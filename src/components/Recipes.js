import React from "react";

const recipes = [
  {
    id: 1,
    title:
      "Vanilla Pancake with Homemade Peanut Butter and Banana Topping 🍌🥞",
    intro:
      "This delicious and nutritious pancake is perfect for breakfast, a pre-workout snack, or even post-workout (just add a scoop of protein powder for an extra boost 💪). The best part? It takes less than 5 minutes to make!",
    ingredients: [
      "1/2 cup rolled oats",
      "1/4 teaspoon baking powder",
      "1 teaspoon vanilla extract",
      "Stevia or Splenda (to taste)",
      "1/4 cup water",
    ],
    instructions: [
      "Blend all the ingredients until you get a semi-thick batter.",
      "Pour the mixture into a preheated pan, cover, and cook for 2 minutes.",
      "Flip and cook for another 2 minutes.",
      "Remove from the pan and top with the following: 2 teaspoons peanut butter and 1/2 banana (sliced)",
    ],
    conclusion: "Enjoy your healthy, protein-packed pancake! 😋",
    prepTime: "5 minutes",
    difficulty: "Easy",
    nutritionalInfo: "250 kcal, 35g carbs, 10g fat, 8g protein",
  },
  {
    id: 2,
    title: "Healthy Chocolate Avocado Brownies 🍫🥑",
    intro:
      "Do you find yourself craving sweets on the weekend? This guilt-free brownie recipe is the perfect treat to satisfy your cravings while keeping things healthy!",
    ingredients: [
      "250g dark chocolate (sugar-free; I used 80% cacao sweetened with stevia)",
      "1 tbsp coconut oil 🥥",
      "3 eggs 🥚",
      "1/2 cup whole wheat flour",
      "1/2 cup unsweetened cocoa powder",
      "2 ripe avocados 🥑",
      "3 tbsp powdered stevia",
    ],
    instructions: [
      "Preheat the oven to 180°C (350°F).",
      "Melt the chocolate and coconut oil together using a double boiler (bain-marie).",
      "Blend the avocados with the stevia until smooth.",
      "Gradually mix the avocado blend into the melted chocolate, stirring well.",
      "Add the eggs one at a time while stirring continuously.",
      "Slowly incorporate the flour and cocoa powder, mixing until smooth.",
      "Pour the batter into a baking dish and bake for about 15 minutes.",
      "Let cool and enjoy! 💕",
    ],
    conclusion: "A healthy alternative to satisfy your chocolate cravings!",
    image: "/images/recipes2.png",
    prepTime: "20 minutes",
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Homemade Peanut Butter Recipe 🥜",
    intro:
      "Are you a peanut butter lover? Then this easy homemade peanut butter recipe is for you!",
    ingredients: [
      "500g natural, unshelled peanuts",
      "(Optional) Stevia or Splenda for a touch of sweetness",
    ],
    instructions: [
      "Place the peanuts in a blender or food processor.",
      "Add your sweetener of choice, if desired.",
      "Blend for about 6-8 minutes until smooth and creamy.",
      "Pro Tip: Start blending at high speed. If the mixture stops moving, reduce to the lowest speed to keep the blending process going.",
      "Let cool and transfer to a glass container for better preservation.",
    ],
    conclusion:
      "Enjoy your homemade peanut butter on toast, smoothies, or as a healthy snack! 🥜✨",
    image: "/images/recipes3.png",
    prepTime: "10 minutes",
    difficulty: "Easy",
    benefits: [
      "100% natural",
      "Healthier than store-bought versions",
      "More affordable",
      "Takes less than 10 minutes to make",
    ],
  },
  {
    id: 4,
    title: "Boost Your Health with This Morning Tonic 💪",
    intro:
      "In addition to maintaining a balanced and varied diet filled with fruits and vegetables, try starting your morning with this powerful health-boosting drink! 😉",
    ingredients: [
      "1 tsp ground ginger (natural pain reliever, anti-inflammatory, helps with nausea, antioxidant - anti-aging)",
      "1 tsp ground turmeric (anti-inflammatory, antioxidant)",
      "½ tsp ground cinnamon (anti-inflammatory, aids digestion, antioxidant)",
      "Juice of 1 lemon (rich in vitamin C)",
    ],
    instructions: [
      "Mix all the ingredients in a glass of warm water.",
      "Stir well and drink on an empty stomach.",
    ],
    conclusion:
      "Enjoy the health benefits and start your day feeling great! Try it and let me know how you feel! ✨🍋",
    image: "/images/recipes4.png",
    prepTime: "3 minutes",
    difficulty: "Easy",
  },
  {
    id: 5,
    title: "Hibiscus Flower Quesadillas 🌺",
    intro:
      "Did you think hibiscus flowers were only for making tea? Think again! Hibiscus flowers are high in fiber, which aids digestion, and rich in antioxidants that help protect your health. Here's a delicious recipe to make the most of them!",
    ingredients: [
      "125g dried hibiscus flowers",
      "½ white onion, chopped",
      "1 garlic clove, minced",
      "2 tsp avocado or olive oil",
      "6 nopal or corn tortillas",
      "200g Oaxaca cheese",
    ],
    instructions: [
      "Heat the oil in a pan and sauté the onion and garlic until they become translucent.",
      "Add the hibiscus flowers and cover the pan. Let cook for 3-5 minutes.",
      "Use the mixture as a filling for your quesadillas, adding Oaxaca cheese.",
      "Heat until the cheese melts and enjoy!",
    ],
    conclusion: "Hope you love this unique and flavorful recipe! ☺ 🌮",
    image: "/images/recipes5.png",
    prepTime: "15 minutes",
    difficulty: "Medium",
    servings: "6 Tacos",
  },
  {
    id: 6,
    title: "Multi-Use Chocolate Pudding 🍫💕",
    intro:
      "This is one of my favorite recipes because it's so versatile! You can use it for a variety of occasions, and it's super easy and quick to make—plus, it's absolutely delicious. You can enjoy this pudding as a dessert after a meal, as a snack, spread it on toast or cookies, or even use it as frosting for a cake or muffins you bake at home!",
    ingredients: [
      "2 avocados",
      "¼ cup unsweetened cocoa powder",
      "Stevia or Splenda to taste",
      "¼ cup milk (you can use any type of milk: regular, almond, soy, coconut, etc.)",
    ],
    instructions: [
      "Add all the ingredients to a blender.",
      "Blend until smooth and well combined.",
      "I recommend storing it in a glass container and keeping it in the refrigerator.",
    ],
    conclusion:
      "Enjoy this healthy, tasty, and versatile chocolate pudding! 🍫✨",
    image: "/images/recipes6.png",
    prepTime: "5 minutes",
    difficulty: "Easy",
  },
  {
    id: 7,
    title: "Banana & Chocolate Ice Cream 🍌🍫",
    intro:
      "Craving a cold dessert in this hot weather? I've got a perfect healthy and delicious treat for you to enjoy after your meals! 😎",
    ingredients: [
      "4 ripe bananas (peel and freeze them in a glass container)",
      "4 tablespoons unsweetened cocoa powder",
      "1 teaspoon stevia",
      "Optional: 1 avocado (for a creamier texture)",
    ],
    instructions: [
      "Add all ingredients to a blender.",
      "Blend until smooth and well combined.",
      "Serve and enjoy your cool, healthy treat! 👌",
    ],
    conclusion:
      "Perfect for a sweet, refreshing snack or dessert on a warm day! 🌞",
    image: "/images/recipes7.png",
    prepTime: "5 minutes",
    difficulty: "Easy",
  },
  {
    id: 8,
    title: "Healthy Banana Cake for Your Coffee Break 🍌☕",
    intro:
      "We all deserve to indulge in some weekend cravings, but why not make them healthy? 🙌 When I'm in the mood for something sweet to pair with my coffee, I make this delicious banana bread. It's not only super tasty, but I also use high-quality, nutritious ingredients to stay on track with my healthy eating and keep myself feeling great. 💪",
    ingredients: [
      "2 ripe bananas (the riper, the sweeter they'll be)",
      "1/4 cup light or soy milk",
      "1 teaspoon baking powder",
      "1 egg",
      "1/2 cup ground oats",
      "Unsweetened cocoa powder or vanilla (you can swap this out for other flavors like nuts, coffee, peanut butter, etc.)",
    ],
    instructions: [
      "Preheat your oven to 180°C (350°F).",
      "Mash the bananas in a bowl until smooth.",
      "Add the milk, egg, and baking powder. Mix well.",
      "Gradually stir in the ground oats and cocoa powder (or your chosen flavor).",
      "Pour the batter into a loaf pan and bake for 25-30 minutes, or until a toothpick comes out clean.",
      "Let it cool, slice, and enjoy with your coffee! ☕",
    ],
    conclusion:
      "This banana bread is the perfect balance of sweet, healthy, and satisfying! 🚫 Just a reminder, even though it's nutritious, it's still important to enjoy it in moderation. Any excess can affect our health.",
    image: "/images/recipes8.png",
    prepTime: "35 minutes",
    difficulty: "Easy",
  },
  {
    id: 9,
    title: "Healthy Veggie Burger 🍔",
    intro:
      "Craving a burger? Here's a recipe for a delicious and healthy veggie burger that I made, and it's special because it's high in fiber, free of unhealthy fats like cholesterol, and a great option for those looking to improve cholesterol levels.",
    ingredients: [
      "1/2 cup cooked beans (make sure to drain them well for easier preparation)",
      "1/4 cup ground oats",
      "1/4 cup grated carrot",
      "1/4 cup chopped cilantro",
      "1/4 cup chopped red onion",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Blend the beans with the oats until smooth.",
      "In a separate bowl, combine the rest of the ingredients and mix well.",
      "Add the bean-oat mixture to the veggie mix and stir with a fork or your hands.",
      "Form the mixture into a ball and flatten it slightly with your hands.",
      "Heat some olive or avocado oil in a pan, and cook the burger patty. You can cover the pan with a glass lid to cook it more evenly.",
    ],
    conclusion:
      "Enjoy your healthy, plant-based burger! It's perfect for a nutritious meal without sacrificing flavor! 😊",
    image: "/images/recipes9.png",
    prepTime: "15 minutes",
    difficulty: "Medium",
    toppings: [
      "1 cup spinach",
      "Chopped white onion",
      "1 tomato",
      "1/2 avocado",
    ],
    benefits: [
      "🥬 High in fiber, thanks to the beans and oats.",
      "🥩 No animal-based ingredients, so it's free of unhealthy fats like cholesterol.",
      "🥑 Great option for those looking to improve cholesterol levels.",
    ],
  },
  {
    id: 10,
    title: "Healthy Nachos Recipe 🌮",
    intro:
      "✔️ A great choice for many occasions! You can enjoy them as a snack, post-workout meal, or even as a tasty appetizer. 🍅🧀 These nachos are made with beans and cheese, making them high in protein. Combined with baked tortilla chips and veggies, they also provide a good amount of fiber.",
    ingredients: [
      "1 cup baked tortilla chips",
      "1/2 cup mashed cooked beans",
      "100 grams panela cheese or Oaxaca cheese",
      "1 cup pico de gallo",
      "1/2 avocado",
    ],
    instructions: [
      "Arrange the baked tortilla chips on a plate.",
      "Spread the mashed beans evenly over the chips.",
      "Top with cheese and let it melt slightly (you can heat it up if needed).",
      "Add a generous serving of pico de gallo on top.",
      "Slice the avocado and add it as the final topping.",
    ],
    conclusion:
      "Enjoy your delicious and nutritious nachos! Perfect for satisfying your cravings in a healthy way! 😊",
    prepTime: "10 minutes",
    difficulty: "Easy",
  },
  {
    id: 11,
    title: "Healthy Dessert Recipe 🍓",
    intro:
      "😁 Who doesn't crave a sweet treat or a snack in the middle of the afternoon? ✔️ I want to share with you a super easy and quick recipe. If you have kids at home, it's a fun activity to do together!",
    ingredients: [
      "Strawberries or mixed berries (can be frozen)",
      "Natural yogurt (it can be any type, just make sure it doesn't have added sugars. I recommend using unsweetened Greek yogurt that's low in fat)",
      "Splenda or Stevia (optional, if you like it a bit sweeter)",
    ],
    instructions: [
      "You can make it in two ways:",
      "1. Blend both ingredients to get a smooth, creamy mixture.",
      "2. Stir the ingredients for a chunkier texture, leaving pieces of fruit.",
      "Then, place the mixture into popsicle molds and freeze for about 3-4 hours.",
    ],
    conclusion: "Enjoy and treat yourself to a refreshing, healthy dessert! 😉",
    image: "/images/recipes11.png",
    prepTime: "10 minutes + 3-4 hours freezing",
    difficulty: "Easy",
  },
  {
    id: 12,
    title: "Cauliflower Rice Recipe 🥦",
    intro:
      "I highly recommend this recipe, especially for those who find it difficult to meet their vegetable servings or are following a stricter carb count. 🍚 You can make this as a side dish or as part of a main dish, like a risotto! 🥕🥒 The advantage of this dish is that, unlike white rice, it's rich in fiber since it's made entirely with vegetables. Plus, it's very easy and quick to prepare.",
    ingredients: [
      "1 raw cauliflower, grated (you can use a large grater or a blender; you can also find pre-grated cauliflower at the store)",
      "2 carrots, diced",
      "2 celery stalks",
      "1/2 onion, diced",
      "1 garlic clove, minced",
      "2 teaspoons of olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a pan, heat the olive oil and cook the garlic and onion for about 3 minutes.",
      "Add the grated cauliflower, carrots, celery, salt, and pepper. Cover the pan to help it cook better.",
      "Let it cook for about 10 minutes until everything is well cooked, and enjoy!",
    ],
    conclusion:
      "A simple, healthy, and delicious way to enjoy your veggies! 🍽️",
    image: "/images/recipes12.png",
    prepTime: "15 minutes",
    difficulty: "Easy",
  },
  {
    id: 13,
    title: "Healthy Nutella Alternative Recipe",
    intro:
      "Are you a fan of Nutella? Here's a recipe for a MUCH healthier version 👌",
    ingredients: [
      "100 grams of toasted hazelnuts",
      "4 tablespoons of unsweetened cocoa powder",
      "2 teaspoons of stevia",
    ],
    instructions: [
      "Place all the ingredients in a food processor and blend until smooth.",
      "It's best to grind the hazelnuts first until they turn into a powder. This will help the mixture blend more easily.",
    ],
    conclusion:
      "Enjoy your healthier Nutella alternative! It's the perfect treat to spread on toast or use as a topping! 🍫",
    image: "/images/recipes13.png",
    prepTime: "10 minutes",
    difficulty: "Easy",
    benefits: [
      "🧠 Vitamin E – With antioxidant properties, it helps keep your immune system healthy.",
      "🦷🦴 Calcium – Essential for the nervous, muscular, cardiac, and bone systems.",
      "💤 Magnesium – Known to help with sleep issues.",
      "Potassium – Helps regulate blood pressure, especially in those with high blood pressure.",
      "❤️ Monounsaturated fats – Beneficial for cardiovascular health.",
    ],
  },
  {
    id: 14,
    title: "Healthy Low-Carb Pizza Recipe",
    intro:
      "It's the weekend, and it's pizza time! 🙌 Here's a recipe for a low-carb pizza with fewer fats and calories 😉.",
    ingredients: [
      "For the crust:",
      "1 grated cauliflower",
      "1 egg",
      "1 cup of water",
      "Salt and spices to taste",
      "1 cup of whole wheat flour",
      "For the pizza toppings:",
      "Tomato sauce",
      "100 grams of Oaxaca cheese",
      "1 bell pepper",
      "1/2 red onion",
      "1 cup of mushrooms",
    ],
    instructions: [
      "Cook the cauliflower. I recommend steaming it to preserve the nutrients 🥦.",
      "Add the egg. Tip: Let the cauliflower cool down before adding the egg 🥚.",
      "Add the flour, salt, and spices.",
      "Mix everything with your hands until you get a smooth dough 🧂.",
      "Shape the dough into your desired pizza shape using your hands. The number of pizzas you get will depend on how thick you want the crust. I recommend not making it too thin to avoid it breaking when you add the toppings 👩‍🍳.",
      "Bake the crust for 10-15 minutes.",
      "Add tomato sauce and your choice of toppings. I recommend using vegetables to increase your fiber intake and keep your pizza lower in calories 🍅.",
      "Bake the pizza for another 15-20 minutes.",
    ],
    conclusion:
      "Enjoy your healthy pizza! 🍕😁 Remember, eating healthy doesn't have to be boring! 😉",
    image: "/images/recipes14.png",
    prepTime: "40 minutes",
    difficulty: "Medium",
  },
  {
    id: 15,
    title: "Healthy French Toast with Peanut Butter and Strawberries 😍",
    intro:
      "A breakfast dish I absolutely love, especially when I'm craving something sweet! And believe it or not, it's a very complete and healthy breakfast.",
    ingredients: [
      "2 slices of whole wheat bread 🍞",
      "1/2 cup of sliced strawberries 🍓",
      "2 eggs 🥚",
      "1 teaspoon of vanilla",
      "1/2 teaspoon of ground cinnamon",
      "1 teaspoon of light milk 🥛",
      "1/2 teaspoon of powdered stevia (optional)",
      "1 tablespoon of peanut butter 🥜",
    ],
    instructions: [
      "In a bowl, whisk the eggs, milk, vanilla, cinnamon, and stevia together.",
      "Mix until everything is well combined.",
      "Dip one slice of bread into the mixture, making sure it's fully soaked. Use about half of the mixture for this.",
      "Heat a pan and place the soaked bread in it. I recommend covering it with a lid to ensure it cooks evenly.",
      "After about 2 minutes, flip the bread and cook for another 2 minutes.",
      "Repeat with the second slice of bread.",
      "Top with peanut butter and strawberries.",
    ],
    conclusion: "ENJOY! 😁",
    prepTime: "15 minutes",
    difficulty: "Easy",
    nutritionalInfo:
      "Each serving contains: 22g of protein, 15g of fats, 37g of carbs, 9g of fiber",
  },
  {
    id: 16,
    title: "Whole Wheat Banana Bread 🍞",
    intro:
      "Whether as part of breakfast, a snack (it can be a great pre-workout or post-workout option 🏋️‍♀️🏋️‍♂️), or just for a weekend treat, I highly recommend making this whole wheat banana bread. ❤️ Not only is it absolutely delicious, but it's also high in fiber, which is great for maintaining good digestion and a healthy gut flora. Plus, it's rich in polyunsaturated fats (good fats) that help us maintain, among other things, good cardiovascular health.",
    ingredients: [
      "4 ripe bananas 🍌",
      "1/2 cup of plain unsweetened yogurt or Greek yogurt",
      "2 eggs 🥚",
      "1 teaspoon of baking powder",
      "2 cups of ground oats",
      "1 teaspoon of vanilla",
      "1/2 cup of chia seeds",
      "1/2 cup of flaxseed",
      "Stevia to taste",
    ],
    instructions: [
      "Mash the peeled bananas with a fork until smooth and lump-free.",
      "Add the yogurt, vanilla, and eggs. Mix until everything is well combined.",
      "Add the oats, baking powder, and stevia. Keep mixing until everything is evenly incorporated.",
      "Add the chia seeds and flaxseed. Mix until the seeds are evenly distributed throughout the batter.",
      "Bake for approximately 30 minutes.",
    ],
    conclusion: "Enjoy!",
    prepTime: "40 minutes",
    difficulty: "Medium",
    nutritionalInfo:
      "✔️ Each slice provides: 133 kcal, 23g of carbs, 5g of fiber, 5g of fats, 4g of protein",
    servings: "12 servings",
  },
  {
    id: 17,
    title: "Healthy Chocolate Brownies 😋🍫",
    intro:
      "Craving something chocolatey this weekend? 😁✔️ Here's a recipe for a healthy version of brownies that is not only delicious but also a great option for athletes as a snack. These brownies contain protein, carbs, and fiber, making them a perfect energy boost for any activity.",
    ingredients: [
      "1 cup of cooked chickpeas (or 1 can)",
      "1 teaspoon of baking powder",
      "40g of unsweetened cocoa powder",
      "3 tablespoons of whole wheat flour",
      "🍫 200g of chocolate for melting (I used 80% cocoa, unsweetened)",
      "3 teaspoons of stevia",
      "1/4 cup of peanut butter",
      "1/2 cup of chopped walnuts (optional)",
    ],
    instructions: [
      "Blend the chickpeas until smooth, forming a dough-like texture.",
      "Add the cocoa powder, baking powder, stevia, peanut butter, and flour. Blend until the mixture is smooth.",
      "Transfer the mixture to a bowl and slowly add the melted chocolate. Stir the batter until everything is well combined.",
      "Add the chopped walnuts (if using).",
      "Bake for about 30-35 minutes.",
    ],
    conclusion: "Enjoy! 😁👌",
    prepTime: "45 minutes",
    difficulty: "Medium",
    benefits: [
      "✔️ Nutritional Benefits of Chickpeas:",
      "Protein: Helps with satiety and meets your protein requirements (1 cup contains ~19g).",
      "Fiber: Aids in digestion and promotes fullness.",
      "Potassium: May help with blood pressure issues.",
      "The chickpeas help give the brownies texture, and you won't even taste them!",
    ],
  },
  {
    id: 18,
    title: "Sweet and Salty Snack Combo 🍌🥔🍫🥨",
    intro:
      "Craving a snack but can't decide between something sweet or savory? Why not combine them both! 😁👌",
    ingredients: [
      "1 banana, cut into four halves",
      "1 teaspoon of peanut butter per piece",
      "1 teaspoon of broken pretzels",
      "1 teaspoon of dark chocolate (at least 85% cocoa and unsweetened)",
    ],
    instructions: [
      "Cut the banana into four halves.",
      "Spread 1 teaspoon of peanut butter on each piece.",
      "Top with 1 teaspoon of broken pretzels.",
      "Melt the dark chocolate and drizzle over the banana pieces.",
      "Place in the freezer for 10 minutes.",
    ],
    conclusion: "Enjoy your delicious sweet and salty snack! 😋",
    prepTime: "15 minutes",
    difficulty: "Easy",
  },
  {
    id: 19,
    title: "Chocolate Mugcake 🍫💕",
    intro:
      "I want to share with you a recipe that's not only super delicious but also incredibly easy to make, and it will take you no more than five minutes to prepare! You can enjoy it as part of your breakfast, dinner, snack, or even as a dessert. I hope you love it as much as I do. Enjoy! 😁",
    ingredients: [
      "1/3 cup of oats",
      "1 teaspoon of vanilla",
      "1 teaspoon of baking powder",
      "1 tablespoon of unsweetened cocoa powder",
      "Calorie-free sweetener to taste",
      "1/4 cup of water",
    ],
    instructions: [
      "Blend all ingredients together until smooth.",
      "Pour the mixture into a mug.",
      "Microwave for 2:30 minutes.",
    ],
    conclusion: "Enjoy your tasty mugcake! 🍫😋",
    prepTime: "5 minutes",
    difficulty: "Easy",
    topping: "1 tablespoon of natural peanuts",
  },
  {
    id: 20,
    title: "Healthy Carrot Muffins 🥕🍰",
    intro:
      "Looking for healthy recipes for a weekend snack? Try these carrot muffins! They're super easy to make and absolutely delicious.👌",
    ingredients: [
      "2 cups of grated carrots 🥕",
      "3 eggs 🥚",
      "1 1/2 cups of ground oats",
      "1/2 cup of plain Greek yogurt",
      "1/4 cup of light milk 🥛",
      "1 teaspoon of vanilla",
      "2 teaspoons of ground cinnamon",
      "1 teaspoon of baking powder",
      "1 teaspoon of stevia",
    ],
    instructions: [
      "Beat the eggs together with the yogurt, milk, and vanilla.",
      "Add the ground oats, baking powder, stevia, and cinnamon. Stir well.",
      "Add the grated carrots and mix everything together.",
      "Bake at 350°F (175°C) for 25-30 minutes.",
    ],
    conclusion: "ENJOY! 😁 Perfect for a healthy and tasty treat!",
    prepTime: "40 minutes",
    difficulty: "Easy",
    optionalTopping:
      "Low-fat cream cheese, 2 teaspoons of vanilla, 2 teaspoons of stevia. Use 1 tablespoon of the topping per muffin.",
  },
];
function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {recipe.image && (
            <img
              className="h-64 w-full object-cover md:w-64"
              src={recipe.image}
              alt=""
            />
          )}
        </div>
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {recipe.title}
            </h3>
            <div className="flex space-x-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {recipe.prepTime}
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {recipe.difficulty}
              </span>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{recipe.intro}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
            <ol className="list-decimal pl-5 space-y-1">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <p className="italic text-gray-700">{recipe.conclusion}</p>
        </div>
      </div>
    </div>
  );
}

function Recipes() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Healthy Recipes</h2>
      <div className="space-y-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
