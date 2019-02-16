import { groceristar, gsLoopback } from "@groceristar/groceristar-fetch";

const getAllIngredients = () => {
  return groceristar.getIngredients();
}


const getDepartments = (all = true) => {

  if( all ){
    return groceristar.getAllDepartments();
  }

  return groceristar.getDepartments();
}

// GS Loopback
function getUltimateGrocery(){
  return gsLoopback.getUltimateGrocery();
};


export {

  getAllIngredients,
  getDepartments,
  getUltimateGrocery,


}
