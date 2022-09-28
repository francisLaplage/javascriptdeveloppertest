const data = require("./data");
const funct = require("./functions");
/*
     Récupération des paramètres
 */
const param = process.argv[2] != null ? process.argv[2] : -1;
if (param != -1) {
  let tabParam = param.split("=");
  switch (tabParam[0].toLowerCase()) {
    case "--filter":
      console.log(JSON.stringify(funct.filtreData(data.data, tabParam[1])));
      break;
    case "--count":
      console.log(JSON.stringify(funct.countData(data.data)));
      break;
    default:
  }
}
