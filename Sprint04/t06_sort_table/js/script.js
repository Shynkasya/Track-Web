const data = [
    { name: 'Black Panther', strength: 66, age: 53 },
    { name: 'Captain America', strength: 79, age: 137 },
    { name: 'Captain Marvel', strength: 97, age: 26 },
    { name: 'Hulk', strength: 80, age: 49 },
    { name: 'Iron Man', strength: 88, age: 48 },
    { name: 'Spider-Man', strength: 78, age: 16 },
    { name: 'Thanos', strength: 99, age: 1000 },
    { name: 'Thor', strength: 95, age: 1000 },
    { name: 'Yon-Rogg', strength: 73, age: 52 },
  ];
function create_table(){
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Strength', 'Age'];
    const ids = ['name', 'strength', 'age'];
    headers.forEach((text, i) => {
      const th = document.createElement('th');
      th.id = ids[i];
      th.className = 'head cell';
      th.textContent = text;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    data.forEach(hero => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('th');
      nameCell.className = 'name cell';
      nameCell.textContent = hero.name;
      row.appendChild(nameCell);
      const strengthCell = document.createElement('th');
      strengthCell.className = 'strength cell';
      strengthCell.textContent = hero.strength;
      row.appendChild(strengthCell);
      const ageCell = document.createElement('th');
      ageCell.className = 'age cell';
      ageCell.textContent = hero.age;
      row.appendChild(ageCell);

      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.getElementById('placeholder').appendChild(table);
}
create_table()
let head = document.getElementsByClassName("head");
let name_el = document.getElementsByClassName("name");
let strength_el = document.getElementsByClassName("strength");
let age_el = document.getElementsByClassName("age");
let array = [];
for(let i = 0; i < name_el.length; i++){
    array.push({
        name: name_el[i].textContent,
        strength: strength_el[i].textContent,
        age:age_el[i].textContent
    })
}
let order = [true, true, true]
for(let i = 0; i < head.length; i++){
    head[i].addEventListener('click', function(e) {
        if(head[i].id === "name"){
            array.sort(function(a, b){
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            document.getElementById("notification").innerHTML = "Sorting by name, order: ";
        }
        if(head[i].id === "strength"){
            array.sort(function(a, b){
                return a.strength - b.strength
            });
            document.getElementById("notification").innerHTML = "Sorting by strength, order: ";
        }
        if(head[i].id === "age"){
            array.sort(function(a, b){
                return a.age - b.age
            });
            document.getElementById("notification").innerHTML = "Sorting by age, order: ";
        }
        if(!order[i]){
            array.reverse();
            order[i] = true
            document.getElementById("notification").innerHTML += "DESC"
        }else {
            order[i] = false
            document.getElementById("notification").innerHTML += "ASC"
        }
        for(let i = 0; i < name_el.length; i++){
            name_el[i].innerHTML = array[i].name
            strength_el[i].innerHTML = array[i].strength
            age_el[i].innerHTML = array[i].age
        }
    }, true);
}