function countData(arr) {
  return arr.filter(function (el, key, arr) {
    arr[key].name = arr[key].name + "[" + el.people.length + "]";

    for (let [index, people] of el.people.entries()) {
      arr[key].people[index].name =
        people.name + "[" + people.animals.length + "]";
    }
    return arr;
  });
}
function filtreData(arr, requete) {
  return arr.filter(function (el, key, arr) {
    for (let i = 0; i < el.people.length; i++) {
      for (let j = 0; j < el.people[i].animals.length; j++) {
        if (
          el.people[i].animals[j].name
            .toLowerCase()
            .indexOf(requete.toLowerCase()) !== -1
        ) {
          arr[key].people = [
            {
              name: el.people[i].name,
              animals: [{ name: el.people[i].animals[j].name }],
            },
          ];
          return arr.length > 0 ? arr : "";
        }
      }
    }
  });
}
module.exports = {
  filtreData,
  countData,
};
