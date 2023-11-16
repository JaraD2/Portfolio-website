
// IDEA
// when searching for id parse the input for :id at the end of the string
// EXAMPLE
// if id is 24
// search for 24:id



// when searching for project name
// EXAMPLE
// if project name is verygoodname
// verygoodname:name



// when searching for description
// EXAMPLE
// if description is very good description
// very:Disc
// good:Disc
// description:Disc
// so every word is a search term
 

// all the information is in the json file
// so we can search for it there
// and then display it
// in the table

function search(term, data) {
  let type = term.split(':')[1];
  let value = term.split(':')[0];
  let results = [];

  data.forEach(item => {
    if (type === 'id' && item.id === value) {
      results.push(item);


    } else if (type === 'name') {
      let nameWords = item.name.split(' ');
      if (nameWords.includes(value)) {
        results.push(item);
      }



    } else if (type === 'disc') {
      let descriptionWords = item.description.split(' ');
      if (descriptionWords.includes(value)) {
        results.push(item);
      }
    } else if (type === undefined) {
      let nameWords = item.name.split(' ');
      let descriptionWords = item.description.split(' ');
      if (nameWords.includes(value) || descriptionWords.includes(value)) {
        results.push(item);
      }
    }
  });

  return results;
}
const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const searchTerm = event.target.value;
    // call the search function here passing in the searchTerm and the data
    // log the results to the console
    // clear the input
    // prevent default
    fetch('/files.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Process the JSON data
        
        const results = search(searchTerm, data.projects);
        console.log(results);
        event.target.value = '';

        clearTable();
        
        var i = 0;
        while (i < results.length) {

          var list = document.querySelector('tbody');
          var row = document.createElement('tr');
          
          var projectName = results[i].name;
          var projectId = results[i].id;
          var projectDescription = results[i].description;

          var projectUrl = results[i].url;
          if ( projectUrl == "undefined" || projectUrl == "") {
            projectUrl = "#";
          }
          row.innerHTML = '<td>' +"<a href="+ projectUrl + ">" + projectName +"</a>" + '</td>' + '<td>' + projectId + '</td>' + '<td>' + projectDescription + '</td>';
          list.appendChild(row);
          i++;
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
    event.preventDefault();
  }
});

function clearTable() {
  const table = document.querySelector('table');

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}
