import {
    getRecipe,
    patchRecipe,
    delRecipe,
    postRecipe,
  } from "./modules/data.js";
  
  const getIt = getRecipe();
  
  const postIt = postRecipe();
  
  const delIt = delRecipe();
  
  const patchIt = patchRecipe();